# RAG 管理平台 - 代码生成提示词

## 项目概述

基于设计稿生成 RAG（检索增强生成）管理平台的 React 前端代码，技术栈为 React + Ant Design 5.x + ECharts。

---

## 技术栈要求

- **React**: 18.x
- **UI框架**: Ant Design 5.x
- **图标**: @ant-design/icons
- **图表**: echarts + echarts-for-react
- **状态管理**: React Hooks / Zustand（可选）
- **样式**: Less / CSS Modules
- **路由**: React Router DOM 6.x

---

## 字体规范

**字体家族**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**行高**:
- 标题: 1.4
- 正文: 1.5715
- 数值: 1.2

**字号**:
- H1（页面标题）: 20px / 600
- H2（卡片标题）: 16px / 600
- H3（小标题）: 14px / 500
- Body（正文）: 14px / 400
- Small（辅助文字）: 12px / 400
- 数值大字: 28px / 600
- 面包屑: 14px / 400

---

## 整体布局结构

### 布局组件 (Layout.tsx)

**结构说明**:
- **Sidebar (侧边栏)**: 固定在左侧，全高 (`100vh`)，深蓝色背景 `#001529`。包含 Logo 区域和菜单列表。
- **Header (顶部导航)**: 位于侧边栏右侧顶部，白色背景 `#ffffff`，高度 56px。
- **Main Content (主内容区)**: 位于 Header 下方，浅灰色背景 `#f0f2f5`，内部包含左右两部分布局。

**布局图示**:
```
┌──────────────────────────────────────────────────────────────┐
│  Header (#ffffff)                                            │
│  [Logo RAG 平台]  [≡] [首页 / 知识库管理] [搜索框] [🔔] [AD] │
────────────────┬─────────────────────────────────────────────┤
│  Sidebar       │  Main Content (#f0f2f5)                     │
│  (#001529)     │                                             │
│  [知识库管理]  │  [Stats Cards]      │  [Right Panel]       │
│  [数据源管理]  │  [Table & Filters]  │  [Health Chart]      │
│  [文档管理]    │  [Trend Charts]     │  [Data Source Chart] │
│  [向量管理]    │                     │  [Recent Uploads]    │
│  [检索测试]    │                     │                      │
│  ...           │                     │                      │
│  [« 收起菜单]  │                     │                      │
└────────────────┴─────────────────────────────────────────────┘
```

**间距与尺寸**:
- **Sidebar**: 宽度 220px，全高。
- **Header**: 高度 56px，位于 Sidebar 右侧。
- **Main Content**: 占据剩余高度和宽度。
- **右侧面板**: 宽度 320px，与主内容区之间间距 16px。
- **内部组件间距**: 24px。

---

## 颜色体系

```less
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #fa8c16;
@error-color: #ff4d4f;
@info-color: #13c2c2;

@sidebar-bg: #001529;
@page-bg: #f0f2f5;
@card-bg: #ffffff;
@table-header-bg: #fafafa;

@text-title: #262626;
@text-body: #595959;
@text-secondary: #8c8c8c;
@text-disabled: #bfbfbf;
@link-color: #1890ff;
```

---

## 组件清单

### 1. 顶部导航栏 (Header)

**文件**: `src/components/Layout/Header.tsx`

**背景**: `#ffffff` (白色)
**高度**: 56px
**边框**: 底部 `1px solid #f0f0f0` (可选，视设计稿阴影而定，设计稿似有轻微阴影或边框)

**内容布局** (Flex, Space Between):
- **左侧**:
  - 汉堡菜单图标: `MenuOutlined`，颜色 `#595959`，尺寸 16px。
  - 面包屑导航: `Breadcrumb`，"首页 / 知识库管理"。
    - 分隔符: "/"，颜色 `#d9d9d9`。
    - 链接颜色: `#595959`。
    - 当前页颜色: `#262626`。
    - 左边距: 16px。
- **右侧**:
  - 搜索框:
    - 组件: `Input` 或自定义 div。
    - 占位符: "搜索知识库、数据源或文档"。
    - 宽度: 300px。
    - 背景: `#f5f5f5`。
    - 边框: 无。
    - 圆角: 4px。
    - 内部搜索图标: `SearchOutlined`，右侧对齐，颜色 `#8c8c8c`。
  - 通知图标:
    - 组件: `Badge` + `BellOutlined`。
    - 徽标: 数字 22，背景 `#ff4d4f`，文字白色。
    - 左边距: 16px。
  - 用户头像:
    - 组件: `Avatar` + `Dropdown`。
    - 头像: 蓝色背景 `#1890ff`，文字 "AD"。
    - 用户名: "admin"，颜色 `#595959`。
    - 下拉箭头: `DownOutlined`。
    - 左边距: 16px。
    - 右边距: 24px。

---

### 2. 左侧边栏 (Sidebar)

**文件**: `src/components/Layout/Sidebar.tsx`

**整体样式**:
- 宽度: 220px
- 背景: `#001529`
- 高度: 100vh (全高)

**顶部 Logo 区**:
- 高度: 56px (与 Header 同高)
- 内容: 六边形 Logo 图标 + "RAG 管理平台" 文字。
- 文字样式: 16px, 白色, 粗体。
- 对齐: 左对齐，内边距 24px。
- 图标与文字间距: 8px。

**菜单项**:
| 序号 | 名称 | 图标组件 |
|------|------|----------|
| 1 | 知识库管理 | DatabaseOutlined（选中态） |
| 2 | 数据源管理 | FolderOutlined |
| 3 | 文档管理 | FileOutlined |
| 4 | 向量管理 | BlockOutlined（立方体） |
| 5 | 检索测试 | SearchOutlined |
| 6 | 问答测试 | MessageOutlined |
| 7 | 应用管理 | AppstoreOutlined |
| 8 | 权限管理 | UserOutlined |
| 9 | 系统设置 | SettingOutlined |
| 10 | 操作日志 | FileTextOutlined |

**底部**: "« 收起菜单" 按钮（可切换收起/展开）

**尺寸**: 宽度 220px，背景 #001529

---

### 3. 页面标题区

**文件**: `src/pages/KnowledgeBase/index.tsx`

- 主标题："知识库管理"（20px，600）
- 副标题："管理您的知识库，支持知识库的创建、配置和监控"（14px，#8c8c8c）
- 操作按钮："+ 创建知识库"（蓝色按钮）

---

### 4. 统计卡片组件 (StatCards)

**文件**: `src/components/KnowledgeBase/StatCards.tsx`

**布局**: 4列等宽卡片，间距 16px（gutter）

**卡片样式**:
- 背景: `#ffffff`
- 圆角: 8px
- 阴影: `0 1px 2px rgba(0,0,0,0.03)`
- 内边距: 24px
- 悬停阴影: `0 2px 8px rgba(0,0,0,0.08)`

**卡片内部结构**:
```
┌─────────────────────────────────────┐
│  [图标]    标题                     │
│  48x48     14px, #8c8c8c           │
│            数值                     │
│            28px, 600, #262626      │
│            趋势                     │
│            12px, #52c41a           │
─────────────────────────────────────┘
```

**图标样式**:
- 大小: 48x48px
- 背景: 圆形，对应主色透明度 10%
- 图标颜色: 对应主色
- 位置: 卡片左侧

**数值样式**:
- 字体大小: 28px
- 字体粗细: 600
- 颜色: `#262626`
- 位置: 图标右侧，与图标垂直居中对齐

**标题样式**:
- 字体大小: 14px
- 颜色: `#8c8c8c`
- 位置: 数值上方，间距 4px

**趋势样式**:
- 字体大小: 12px
- 格式: "较上月 ↑ 20%"
- 颜色: "较上月" 为 `#8c8c8c` (灰色)，"↑ 20%" 为 `#52c41a` (绿色)。
- 位置: 数值下方，间距 8px

**卡片数据**:
| 卡片 | 图标 | 标题 | 数值 | 趋势 | 图标颜色 | 图标背景 |
|------|------|------|------|------|----------|----------|
| 1 | DatabaseOutlined | 知识库总数 | 12 | ↑ 20% | #1890ff | rgba(24,144,255,0.1) |
| 2 | FileOutlined | 文档总数 | 18,542 | ↑ 15.3% | #52c41a | rgba(82,196,26,0.1) |
| 3 | BlockOutlined（立方体） | 向量总数 | 235.6 万 | ↑ 18.7% | #fa8c16 | rgba(250,140,22,0.1) |
| 4 | PieChartOutlined（饼图） | 存储空间 | 256.7 GB | ↑ 12.1% | #1890ff | rgba(24,144,255,0.1) |

---

### 5. 知识库列表 (KnowledgeTable)

**文件**: `src/components/KnowledgeBase/KnowledgeTable.tsx`

**Tab切换**:
- 选项: 全部知识库 | 我创建的 | 共享给我的
- 选中态: 文字 `#262626`，底部蓝色下划线 `#1890ff`（高度 2px）
- 未选中: 文字 `#8c8c8c`
- 字号: 14px
- 间距: 每个 Tab 间距 24px
- 与下方筛选栏间距: 16px

**筛选栏**:
- 布局: Flex 横向排列，间距 12px
- 搜索输入框:
  - 占位符: "搜索知识库名称或描述"
  - 宽度: 240px
  - 背景: `#ffffff`
  - 边框: `1px solid #d9d9d9`
  - 圆角: 4px
  - 右侧搜索图标: `SearchOutlined`
- 下拉选择:
  - "全部状态": 宽度 120px
  - "全部标签": 宽度 120px
  - 背景: `#ffffff`，边框 `1px solid #d9d9d9`，圆角 4px
- 刷新按钮:
  - 图标: `ReloadOutlined`
  - 位置: 最右侧
  - 尺寸: 32x32px 圆形按钮
  - 背景: 透明，悬停 `#f5f5f5`
- 与表格间距: 16px

**表格样式**:
- 表头背景: `#fafafa`。
- 表头文字颜色: `#595959`，字体粗细 500。
- 表体文字颜色: `#262626`。
- 行悬停背景: `#f5f5f5`。
- 边框: 底部 `1px solid #f0f0f0`。

**表格列**:
| 列名 | 宽度 | 对齐 | 内容 |
|------|------|------|------|
| 知识库名称 | 200px | 左 | 图标 + 名称 |
| 描述 | 250px | 左 | 文本，省略号 |
| 状态 | 80px | 中 | Tag |
| 文档数 | 100px | 右 | 数字 |
| 向量数 | 100px | 右 | 数字+万 |
| 存储大小 | 100px | 右 | 数字+GB |
| 更新时间 | 160px | 中 | 日期时间 |
| 操作 | 150px | 右 | 链接按钮组 |

**知识库图标样式**:
- 大小: 24x24px
- 圆角: 4px
- 背景: 对应颜色，透明度 10%
- 图标: 白色 `DatabaseOutlined`，大小 14px
- 与名称间距: 8px

**知识库图标颜色列表**:
| 知识库名称 | 图标颜色 | 图标背景 |
|-----------|----------|----------|
| 公司产品文档 | #1890ff | rgba(24,144,255,0.1) |
| 技术知识库 | #52c41a | rgba(82,196,26,0.1) |
| 行业研究报告 | #722ed1 | rgba(114,46,209,0.1) |
| 客户服务知识库 | #fa8c16 | rgba(250,140,22,0.1) |
| 法律法规库 | #1890ff | rgba(24,144,255,0.1) |
| 内部培训资料 | #eb2f96 | rgba(235,47,150,0.1) |
| 竞品分析库 | #1890ff | rgba(24,144,255,0.1) |
| 市场营销资料 | #52c41a | rgba(82,196,26,0.1) |

**状态标签样式**:
- 正常: 背景 `#f6ffed`，文字 `#52c41a`，边框 `#b7eb8f`
- 警告: 背景 `#fff7e6`，文字 `#fa8c16`，边框 `#ffd591`
- 停用: 背景 `#f5f5f5`，文字 `#8c8c8c`，边框 `#d9d9d9`
- 内边距: 2px 8px
- 圆角: 4px
- 字号: 12px

**操作列**:
- 链接文字: "查看" | "编辑" | "更多▼"
- 颜色: `#1890ff`
- 间距: 8px
- 悬停: 下划线

**分页**:
- 位置: 表格底部，右侧对齐
- 内容: 共 12 条 < 1 2 > 10条/页 跳至 [1] 页
- 样式:
  - 文字颜色: `#595959`
  - 页码按钮: 白色背景，边框 `#d9d9d9`，圆角 4px
  - 当前页: 蓝色背景 `#1890ff`，白色文字
  - 每页条数下拉: 宽度 80px
  - 跳至输入框: 宽度 50px，边框 `#d9d9d9`，圆角 4px

---

### 6. 知识库趋势图表 (TrendCharts)

**文件**: `src/components/KnowledgeBase/TrendCharts.tsx`

**标题**: "知识库趋势（最近 7 天）"
- 字体: 16px，600，`#262626`
- 位置: 表格下方，间距 24px

**布局**: 4列等宽卡片，间距 16px

**趋势卡片样式**:
- 背景: `#ffffff`
- 圆角: 8px
- 阴影: `0 1px 2px rgba(0,0,0,0.03)`
- 内边距: 16px

**卡片内部结构**:
```
┌─────────────────────────────────────┐
│  指标名称                           │
│  14px, #8c8c8c                     │
│  数值                               │
│  20px, 600, #262626                │
│  趋势                               │
│  12px, #52c41a                     │
│  ─────────────────────────────     │
│  [折线图]                           │
│  高度 60px                          │
─────────────────────────────────────┘
```

**图表样式**:
- 类型: 折线图（ECharts）
- 高度: 60px
- 无坐标轴、无网格线
- 平滑曲线: true
- 线条宽度: 2px
- 填充: 渐变填充（透明度 0.1）

**7天数据点**（示例数据）:
| 指标 | 数值 | 趋势 | 颜色 | Day1 | Day2 | Day3 | Day4 | Day5 | Day6 | Day7 |
|------|------|------|------|------|------|------|------|------|------|------|
| 文档数量 | +1,250 | ↑ 12.5% | #1890ff | 120 | 145 | 132 | 168 | 155 | 178 | 195 |
| 向量数量 | +85,420 | ↑ 15.3% | #52c41a | 8200 | 9100 | 8800 | 10500 | 9800 | 11200 | 12000 |
| 检索次数 | +12,560 | ↑ 18.7% | #722ed1 | 1500 | 1680 | 1550 | 1820 | 1750 | 1950 | 2100 |
| 问答次数 | +8,460 | ↑ 11.2% | #fa8c16 | 980 | 1050 | 1100 | 1180 | 1250 | 1320 | 1400 |

---

### 7. 右侧面板 (RightPanel)

**文件**: `src/components/KnowledgeBase/RightPanel.tsx`

**面板样式**:
- 宽度: 320px
- 背景: `#ffffff`
- 与主内容区间距: 16px

包含三个子卡片：

#### 7.1 知识库健康度 (HealthCard)

**卡片标题**: "知识库健康度"
- 字体: 16px，600，`#262626`
- 下边框: `1px solid #f0f0f0`
- 内边距: 16px

**健康度指标**:
- 环形进度图:
  - 直径: 120px
  - 进度: 85%（绿色弧线 `#52c41a`）
  - 背景弧: `#f0f0f0`
  - 线条宽度: 8px
  - 中心文字: "85"（28px，600，`#262626`）+ "良好"（12px，`#8c8c8c`）
- 明细列表:
  - 布局: 三行，每行左侧圆点 + 文字
  - 健康: 10 | 83.3%（绿色圆点 `#52c41a`）
  - 警告: 2 | 16.7%（橙色圆点 `#fa8c16`）
  - 异常: 0 | 0%（红色圆点 `#ff4d4f`）
  - 圆点大小: 8px
  - 文字颜色: `#595959`
  - 间距: 每行 8px
- 统计时间: "2024-05-20 10:30:00"（灰色小字 `#8c8c8c`，12px）
- 与明细列表间距: 16px

#### 7.2 数据源类型分布 (DataSourcePie)

**卡片标题**: "数据源类型分布" + "查看详情 >"（蓝色链接 `#1890ff`）
- 标题与链接间距: 8px
- 下边框: `1px solid #f0f0f0`
- 内边距: 16px

**环形图**:
- 直径: 120px
- 中心文字: "总数"（12px，`#8c8c8c`）+ "45"（20px，600，`#262626`）
- 图例位置: 右侧
- 图例样式:
  - 圆点大小: 8px
  - 文字颜色: `#595959`
  - 间距: 每行 8px

**图例数据**:
| 类型 | 数量 | 百分比 | 颜色 |
|------|------|--------|------|
| PDF | 18 | 40% | #1890ff |
| Word | 10 | 22.2% | #40a9ff |
| Excel | 5 | 11.1% | #52c41a |
| Markdown | 6 | 13.3% | #13c2c2 |
| 网页 | 4 | 8.9% | #fa8c16 |
| 其他 | 2 | 4.4% | #fadb14 |

#### 7.3 最近上传 (RecentUploads)

**卡片标题**: "最近上传" + "查看全部 >"（蓝色链接 `#1890ff`）
- 下边框: `1px solid #f0f0f0`
- 内边距: 16px

**文件列表**（5条）:
- 每条布局: 文件图标 + 文件名 + 知识库名称 + 时间
- 间距: 每行 12px

**文件图标样式**:
| 类型 | 背景色 | 文字 | 尺寸 |
|------|--------|------|------|
| PDF | #ff4d4f | "P" 白色 | 32x32px，圆角 4px |
| Word | #1890ff | "W" 白色 | 32x32px，圆角 4px |
| Excel | #52c41a | "X" 白色 | 32x32px，圆角 4px |
| Markdown | #fa8c16 | "M" 白色 | 32x32px，圆角 4px |

**文件列表数据**:
| 文件名 | 知识库 | 时间 |
|--------|--------|------|
| 产品使用手册 v2.1.pdf | 公司产品文档 | 2024-05-20 10:20 |
| 技术方案设计文档.docx | 技术知识库 | 2024-05-20 09:15 |
| 市场数据分析.xlsx | 行业研究报告 | 2024-05-19 16:45 |
| FAQ 常见问题.md | 客户服务知识库 | 2024-05-19 14:30 |
| 行业研究报告 2024.pdf | 行业研究报告 | 2024-05-19 11:20 |

**文件名样式**: 14px，`#262626`，500
**知识库样式**: 12px，`#8c8c8c`
**时间样式**: 12px，`#8c8c8c`，右侧对齐

---

## 数据类型定义

**文件**: `src/types/knowledgeBase.ts`

```typescript
// 知识库列表项
interface KnowledgeBase {
  id: string;
  name: string;
  description: string;
  status: 'normal' | 'warning' | 'disabled';
  documentCount: number;
  vectorCount: number;
  storageSize: string;
  updateTime: string;
  iconColor: string;      // 图标背景颜色
}

// 统计卡片
interface StatCard {
  title: string;          // 标题
  value: string | number; // 数值
  trend: number;          // 趋势百分比
  icon: string;           // 图标组件名
  color: string;          // 图标颜色
}

// 趋势数据
interface TrendData {
  name: string;           // 指标名称
  value: string;          // 数值
  trend: number;          // 趋势百分比
  color: string;          // 图表颜色
  chartData: number[];    // 7天数据点
}

// 健康度明细
interface HealthDetail {
  label: string;          // 标签（健康/警告/异常）
  count: number;          // 数量
  percentage: string;     // 百分比
  color: string;          // 圆点颜色
}

// 数据源类型
interface DataSourceType {
  name: string;           // 类型名称
  count: number;          // 数量
  percentage: string;     // 百分比
  color: string;          // 颜色
}

// 最近上传文件
interface RecentUpload {
  fileName: string;       // 文件名
  knowledgeBase: string;  // 所属知识库
  time: string;           // 上传时间
  fileType: 'pdf' | 'word' | 'excel' | 'markdown'; // 文件类型
}

// 侧边栏菜单项
interface MenuItem {
  key: string;            // 菜单key
  label: string;          // 显示文字
  icon: string;           // 图标组件名
}
```

---

## 模拟数据

**文件**: `src/data/mockData.ts`

### 知识库列表数据（8条）
```typescript
const knowledgeBases: KnowledgeBase[] = [
  {
    id: '1',
    name: '公司产品文档',
    description: '公司产品相关文档和使用手册',
    status: 'normal',
    documentCount: 2350,
    vectorCount: 286000,
    storageSize: '32.4 GB',
    updateTime: '2024-05-20 10:20',
    iconColor: '#1890ff'
  },
  {
    id: '2',
    name: '技术知识库',
    description: '技术文档、方案和最佳实践',
    status: 'normal',
    documentCount: 5620,
    vectorCount: 683000,
    storageSize: '58.7 GB',
    updateTime: '2024-05-20 09:15',
    iconColor: '#52c41a'
  },
  {
    id: '3',
    name: '行业研究报告',
    description: '行业分析报告和市场研究',
    status: 'warning',
    documentCount: 1230,
    vectorCount: 152000,
    storageSize: '18.6 GB',
    updateTime: '2024-05-19 16:45',
    iconColor: '#722ed1'
  },
  {
    id: '4',
    name: '客户服务知识库',
    description: '常见问题和解决方案',
    status: 'normal',
    documentCount: 3125,
    vectorCount: 356000,
    storageSize: '28.9 GB',
    updateTime: '2024-05-19 14:30',
    iconColor: '#fa8c16'
  },
  {
    id: '5',
    name: '法律法规库',
    description: '法律法规和政策文件',
    status: 'normal',
    documentCount: 1856,
    vectorCount: 221000,
    storageSize: '22.3 GB',
    updateTime: '2024-05-18 11:20',
    iconColor: '#1890ff'
  },
  {
    id: '6',
    name: '内部培训资料',
    description: '员工培训和学习资料',
    status: 'disabled',
    documentCount: 950,
    vectorCount: 98000,
    storageSize: '12.1 GB',
    updateTime: '2024-05-17 18:10',
    iconColor: '#eb2f96'
  },
  {
    id: '7',
    name: '竞品分析库',
    description: '竞争对手分析资料',
    status: 'normal',
    documentCount: 1411,
    vectorCount: 167000,
    storageSize: '16.8 GB',
    updateTime: '2024-05-17 10:05',
    iconColor: '#1890ff'
  },
  {
    id: '8',
    name: '市场营销资料',
    description: '市场营销策略和素材',
    status: 'warning',
    documentCount: 2000,
    vectorCount: 243000,
    storageSize: '24.5 GB',
    updateTime: '2024-05-16 15:30',
    iconColor: '#52c41a'
  }
];
```

### 统计卡片数据
```typescript
const statCards: StatCard[] = [
  { title: '知识库总数', value: 12, trend: 20, icon: 'DatabaseOutlined', color: '#1890ff' },
  { title: '文档总数', value: 18542, trend: 15.3, icon: 'FileOutlined', color: '#52c41a' },
  { title: '向量总数', value: '235.6 万', trend: 18.7, icon: 'BlockOutlined', color: '#fa8c16' },
  { title: '存储空间', value: '256.7 GB', trend: 12.1, icon: 'PieChartOutlined', color: '#1890ff' }
];
```

### 趋势数据（7天）
```typescript
const trendData: TrendData[] = [
  {
    name: '文档数量',
    value: '+1,250',
    trend: 12.5,
    color: '#1890ff',
    chartData: [120, 145, 132, 168, 155, 178, 195]
  },
  {
    name: '向量数量',
    value: '+85,420',
    trend: 15.3,
    color: '#52c41a',
    chartData: [8200, 9100, 8800, 10500, 9800, 11200, 12000]
  },
  {
    name: '检索次数',
    value: '+12,560',
    trend: 18.7,
    color: '#722ed1',
    chartData: [1500, 1680, 1550, 1820, 1750, 1950, 2100]
  },
  {
    name: '问答次数',
    value: '+8,460',
    trend: 11.2,
    color: '#fa8c16',
    chartData: [980, 1050, 1100, 1180, 1250, 1320, 1400]
  }
];
```

### 健康度数据
```typescript
const healthData = {
  score: 85,
  level: '良好',
  details: [
    { label: '健康', count: 10, percentage: '83.3%', color: '#52c41a' },
    { label: '警告', count: 2, percentage: '16.7%', color: '#fa8c16' },
    { label: '异常', count: 0, percentage: '0%', color: '#ff4d4f' }
  ],
  updateTime: '2024-05-20 10:30:00'
};
```

### 数据源类型数据
```typescript
const dataSourceTypes: DataSourceType[] = [
  { name: 'PDF', count: 18, percentage: '40%', color: '#1890ff' },
  { name: 'Word', count: 10, percentage: '22.2%', color: '#40a9ff' },
  { name: 'Excel', count: 5, percentage: '11.1%', color: '#52c41a' },
  { name: 'Markdown', count: 6, percentage: '13.3%', color: '#13c2c2' },
  { name: '网页', count: 4, percentage: '8.9%', color: '#fa8c16' },
  { name: '其他', count: 2, percentage: '4.4%', color: '#fadb14' }
];
```

### 最近上传数据
```typescript
const recentUploads: RecentUpload[] = [
  { fileName: '产品使用手册 v2.1.pdf', knowledgeBase: '公司产品文档', time: '2024-05-20 10:20', fileType: 'pdf' },
  { fileName: '技术方案设计文档.docx', knowledgeBase: '技术知识库', time: '2024-05-20 09:15', fileType: 'word' },
  { fileName: '市场数据分析.xlsx', knowledgeBase: '行业研究报告', time: '2024-05-19 16:45', fileType: 'excel' },
  { fileName: 'FAQ 常见问题.md', knowledgeBase: '客户服务知识库', time: '2024-05-19 14:30', fileType: 'markdown' },
  { fileName: '行业研究报告 2024.pdf', knowledgeBase: '行业研究报告', time: '2024-05-19 11:20', fileType: 'pdf' }
];
```

### 侧边栏菜单数据
```typescript
const menuItems: MenuItem[] = [
  { key: 'knowledge', label: '知识库管理', icon: 'DatabaseOutlined' },
  { key: 'datasource', label: '数据源管理', icon: 'FolderOutlined' },
  { key: 'document', label: '文档管理', icon: 'FileOutlined' },
  { key: 'vector', label: '向量管理', icon: 'BlockOutlined' },
  { key: 'search', label: '检索测试', icon: 'SearchOutlined' },
  { key: 'qa', label: '问答测试', icon: 'MessageOutlined' },
  { key: 'app', label: '应用管理', icon: 'AppstoreOutlined' },
  { key: 'permission', label: '权限管理', icon: 'UserOutlined' },
  { key: 'settings', label: '系统设置', icon: 'SettingOutlined' },
  { key: 'logs', label: '操作日志', icon: 'FileTextOutlined' }
];
```

---

## 目录结构

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── index.tsx
│   └── KnowledgeBase/
│       ├── StatCards.tsx
│       ├── KnowledgeTable.tsx
│       ├── TrendCharts.tsx
│       ├── RightPanel.tsx
│       └── index.tsx
├── pages/
│   └── KnowledgeBase/
│       └── index.tsx
├── types/
│   └── knowledgeBase.ts
├── data/
│   └── mockData.ts
├── styles/
│   └── variables.less
├── App.tsx
└── main.tsx
```

---

## 组件间距规范

**基础单位**: 8px

**页面级间距**:
- 主内容区内边距: 24px
- 页面标题与统计卡片区距: 24px
- 统计卡片与表格间距: 24px
- 表格与趋势图间距: 24px

**组件级间距**:
- 卡片内边距: 24px（统计卡片）、16px（趋势卡片、右侧面板卡片）
- 卡片间距: 16px
- 主内容区与右侧面板间距: 16px
- 表格行间距: 0（使用边框分隔）
- 表单项间距: 12px（筛选栏）

**元素级间距**:
- 图标与文字: 8px
- 标题与副标题: 8px
- 数值与趋势: 8px
- Tab 选项间距: 24px
- 操作链接间距: 8px

---

## 代码生成步骤

1. 先创建项目基础结构和样式变量
2. 创建 Layout 组件（Header + Sidebar）
3. 创建 StatCards 组件
4. 创建 KnowledgeTable 组件（含分页）
5. 创建 TrendCharts 组件（含 ECharts）
6. 创建 RightPanel 组件（含3个子卡片）
7. 创建主页面并整合所有组件
8. 添加模拟数据
9. 添加响应式适配

---

## 注意事项

1. **颜色精确匹配**: 所有颜色值严格按照设计规范，不可随意替换
2. **Ant Design 5.x**: 使用 CSS-in-JS (theme.token) 或 Less 变量，保持主题一致性
3. **ECharts 配置**: 使用 `echarts-for-react`，图表无坐标轴、无网格线、平滑曲线（Sparkline 风格）
4. **表格组件**: 使用 Ant Design Table，自定义列宽和对齐方式
5. **状态标签**: 使用 Tag 组件，自定义背景色、文字色和边框色
6. **分页组件**: 使用 Pagination，自定义样式匹配设计稿
7. **Hover 状态**: 所有交互元素（按钮、链接、卡片、菜单项）需有 hover 效果
8. **响应式设计**: 
   - 侧边栏可收起（宽度变为 80px，只显示图标）
   - 右侧面板在屏幕宽度 < 1400px 时隐藏
   - 统计卡片在屏幕宽度 < 1200px 时变为 2 列
   - 表格列在小屏幕时可横向滚动
9. **Header 背景分区**: 左侧 Logo 区深蓝，中间和右侧白色，注意边界处理
10. **圆角统一**: 按钮/输入框 4px，卡片 8px，头像/图标圆形 50%
11. **阴影层次**: 卡片默认阴影 `0 1px 2px rgba(0,0,0,0.03)`，悬停 `0 2px 8px rgba(0,0,0,0.08)`
12. **字体渲染**: 使用系统字体栈，确保跨平台一致性
13. **图标对应**: 
    - 统计卡片: 向量->立方体(BlockOutlined), 存储->饼图(PieChartOutlined)
    - 侧边栏: 向量管理->立方体(BlockOutlined)
