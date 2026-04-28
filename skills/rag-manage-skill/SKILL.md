---
name: rag-management-platform-generator
description: 基于设计稿生成 RAG 管理平台 React 前端代码的 Skill。使用 React 18 + Ant Design 5.x + ECharts，严格遵循一比一复刻原则。
---

# RAG 管理平台生成器

##  核心指令 (Core Instructions)

你是一名资深前端架构师。你的任务是**像素级一比一复刻** RAG 管理平台的"知识库管理"页面。

### ️ 工作流 (Workflow)
1. **加载上下文**: 首先读取 `assets/image.png` (视觉基准) 和 `references/prompt.md` (详细规范)。
2. **提取参数**: 在生成任何组件前，必须从 `prompt.md` 中提取对应的颜色、尺寸、间距值。
3. **分层生成**: 按 `Layout` → `StatCards` → `KnowledgeTable` → `TrendCharts` → `RightPanel` 顺序生成。
4. **视觉校验**: 对照下方"验收清单"进行代码自查。

---

## 🚫 关键约束 (Critical Constraints)

### 1. 布局陷阱 (Layout Pitfalls)
* **Header 背景**: 仅右侧内容区为白色 `#ffffff`。左侧 Logo 区必须与 Sidebar 同为深蓝 `#001529`。
* **Sidebar 高度**: 必须全高 `100vh`，包含 Logo 区域。
* **Right Panel**: 宽度固定 `320px`，与主内容区 Flex 布局，间距 `16px`。
* **滚动策略**: `Header` 和 `Sidebar` 固定，`Content` 区域独立滚动。

### 2. 图标映射 (Icon Mapping)
| 场景 | 组件名 | 正确图标 | 常见错误 |
|------|--------|----------|----------|
| 统计卡片 - 向量总数 | StatCards | `BlockOutlined` (立方体) | `ApiOutlined` |
| 统计卡片 - 存储空间 | StatCards | `PieChartOutlined` (饼图) | `ClockCircleOutlined` |
| 侧边栏 - 向量管理 | Sidebar | `BlockOutlined` | `ApiOutlined` |
| 最近上传 - 文件图标 | RightPanel | 单字母 (P, W, X, M) | 完整单词 (PDF, Word) |

### 3. 视觉精度速查 (Visual Precision Scale)
* **字体规范**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  * H1 (页面标题): 20px / 600
  * H2 (卡片标题): 16px / 600
  * Body (正文/表格): 14px / 400
  * Small (辅助/趋势): 12px / 400
  * 数值大字: 28px / 600
* **间距系统**: 基础单位 8px。卡片内边距 24px (统计卡) / 16px (趋势/右侧卡)。组件间距 16px/24px。
* **圆角与阴影**: 卡片圆角 8px，按钮/输入框 4px。阴影 `0 1px 2px rgba(0,0,0,0.03)` → 悬停 `0 2px 8px rgba(0,0,0,0.08)`。
* **交互态**: 所有可交互元素需添加 `transition: all 0.2s ease`。

---

## 🔗 动态布局规范 (Dynamic Layout Specs)

* **状态提升 (State Lifting)**: `Sidebar` 的收起/展开状态 (`collapsed`) **不能**在组件内部维护。必须由父级 `Layout` 管理，并通过 Props (`collapsed`, `onCollapse`) 下发。
* **联动计算 (Responsive Calculation)**: 
  * `Header` 的 `left` 样式必须绑定 `collapsed`：`collapsed ? 80 : 220`。
  * `Layout` 右侧容器的 `marginLeft` 必须绑定 `collapsed`：`collapsed ? 80 : 220`。
  * 所有宽度变化需添加 `transition: margin-left 0.2s ease, left 0.2s ease`。
* **Sider 集成**: 使用 Ant Design `Sider` 组件时，设置 `trigger={null}` 以隐藏默认触发器，使用自定义按钮控制 `onCollapse`。

---

## 🎨 Ant Design 5 最佳实践 (Ant Design 5 Best Practices)

* **Input**: 无边框输入框使用 `variant="borderless"`，禁止使用 `style={{ border: 'none' }}`。
* **Icon Position**: 搜索框图标通常位于右侧 (`suffix`)，禁止同时使用 `prefix` 和 `suffix` 导致图标重复。
* **Card**: 圆角通过 `ConfigProvider` 的 `components.Card.borderRadiusLG` 全局控制，组件内部禁止重复定义 `borderRadius`。
* **Table**: 
  * 紧凑表格使用 `size="small"`。
  * **必须配置 `scroll={{ x: 'max-content' }}`**，防止固定列宽撑破容器。当列宽总和超过父容器时，自动开启横向滚动。
* **Header Right Area (Grouping Strategy)**: 
  * **不要将所有元素平铺**。应将"通知"和"头像"包裹在一个**用户操作组** (`div`) 中。
  * **搜索框**与**用户操作组**之间需保留较大间距（建议 `marginLeft: 48px`）。
  * **操作组内部**必须使用 `gap: 16` 控制间距，禁止使用 `margin`，防止 Flex 计算偏差导致重叠。

---

## ⚠️ Ant Design 默认样式覆写 (Default Style Overrides)

**设计稿基于 Ant Design 定制，但修改了部分默认尺寸。生成代码时必须强制覆写以下属性，否则会导致布局崩坏：**

| 组件 | Ant Design 默认值 | **设计稿强制值** | 修复原因 |
| :--- | :--- | :--- | :--- |
| **Layout.Header** | `height: 64px`, `line-height: 64px` | `height: 56`, `lineHeight: '56px'` | 默认高度过高，导致内部元素（如 Avatar）垂直不居中或空间浪费。 |
| **Avatar** | `size: 40` | `size: 32` | 默认头像在 56px 高的 Header 中显得过大，视觉拥挤。 |
| **Table** | `size: 'middle'` (Row height ~54px) | `size: 'small'` (Row height ~36px) | 设计稿表格非常紧凑，需使用 small 尺寸。 |
| **Layout.Sider** | `collapsedWidth: 80` | `collapsedWidth: 80` | 确保收起宽度一致，避免内容溢出。 |
| **Tag** | 默认蓝/绿/红 | 自定义颜色 (`#f6ffed` 等) | 设计稿使用了特定的浅色背景 Tag，需自定义样式。 |

### 🛡️ 布局防错指南
1. **Header 高度**: 必须同时设置 `height` 和 `lineHeight` 为 `56px`，否则 Flex 居中可能失效。
2. **Avatar 尺寸**: 在紧凑 Header 中，Avatar 必须显式设置 `size={32}`。
3. **Table 滚动**: 只要表格列数超过 5 列，必须添加 `scroll={{ x: 'max-content' }}`。

---

## ⚠️ Ant Design 默认样式覆写 (Default Style Overrides)

设计稿基于 Ant Design 定制，**必须**覆写以下默认尺寸，否则会导致布局崩坏：

| 组件 | 默认值 | **强制覆写值** | 原因 |
| :--- | :--- | :--- | :--- |
| **Layout.Header** | Height: 64px, LineHeight: 64px | `height: 56`, `lineHeight: '56px'` | 设计稿 Header 高度为 56px，未覆写会导致内容垂直不居中。 |
| **Avatar** | Size: 40px | `size={32}` | 默认头像过大，在 56px 头部中显拥挤，设计稿为 32px。 |
| **Sider** | CollapsedWidth: 80px (Default) | `width={220}`, `collapsedWidth={80}` | 确保展开/收起宽度精确匹配设计稿。 |
| **Table** | Size: middle | `size="small"` | 设计稿表格更紧凑，需使用 small 尺寸。 |
| **Tag** | Border/Background | 自定义颜色 (`#f6ffed`, `#fff7e6`) | AntD 默认 Tag 颜色不符合设计稿的特定状态色。 |

---

## 📐 页面级布局规范 (Page Level Layout)

* **主内容区左右分栏**: 
  * 必须使用 Flex 布局实现：`display: flex; gap: 16px; width: 100%;`。
  * **左侧内容区**: `flex: 1; minWidth: 0;` (必须设置 minWidth: 0 防止内容溢出挤压右侧)。
  * **右侧面板**: `width: 320px; flexShrink: 0;` (固定宽度，禁止收缩)。
* **对齐方式**: 左右栏顶部对齐 `alignItems: 'flex-start'`。

---

## 🏗 架构与主题配置 (Architecture & Theme)

* **必须使用 `ConfigProvider`**: 在 `App.tsx` 根节点包裹，通过 `theme.token` 锁定设计系统变量。
* **关键 Token 映射**:
  * `colorPrimary`: `#1890ff`
  * `borderRadius`: `4` (按钮/输入框), `borderRadiusLG`: `8` (卡片)
  * `Table`: `headerBg: '#fafafa'`, `rowHoverBg: '#f5f5f5'`
* **布局滚动策略**: 
  * `Header` 固定 (`position: fixed`)。
  * `Sidebar` 固定 (`position: fixed`)。
  * `Content` 必须设置 `margin-top: 56px`，并允许自然滚动或设置 `overflow-y: auto`。

---

##  组件生成指南 (Component Specs)

### Level 1: Layout (布局框架)
* **结构**: `Layout.Sider` (220px, 固定) + `Layout` (包含 Header 和 Content)。
* **Header**: Flex 布局，Space Between。左侧面包屑，右侧搜索 + 通知 + 用户。
* **Content**: Flex 布局，Row Gap `16px`。左侧 Main Content (Flex 1)，右侧 Right Panel (320px)。

### Level 2: StatCards (统计卡片)
* **布局**: 4 列 Grid 或 Flex，Gap `16px`。
* **样式**: 白底，圆角 8px，内边距 **24px**。
* **内容**: 左侧 48px 图标 (背景色透明度 10%)，右侧信息 (标题灰，数值黑粗，趋势绿)。
* **数据**: 参见 `references/prompt.md` 中的 StatCards 部分。

### Level 3: KnowledgeTable (知识库表格)
* **筛选栏**: 搜索框 (240px) + 状态下拉 (120px) + 标签下拉 (120px) + 刷新按钮。
* **表格列**: 名称 (200px, 左), 描述 (250px), 状态 (80px, 中), 文档数 (100px, 右), 向量数 (100px, 右), 存储 (100px, 右), 时间 (160px, 中), 操作 (150px, 右)。
* **状态标签**: 正常 (绿), 警告 (橙), 停用 (灰)。背景色需带透明度。
* **分页**: 严格匹配设计稿样式，包含总数、页码、页尺寸选择器、跳转输入框。

### Level 4: TrendCharts (趋势图)
* **技术**: 使用 `echarts-for-react`。
* **配置**: 
  * `grid`: `{ top: 0, bottom: 0, left: 0, right: 0 }` (无边距)
  * `xAxis/yAxis`: `{ show: false }` (隐藏坐标轴)
  * `smooth: true` (平滑曲线)
  * `areaStyle`: `{ opacity: 0.1 }` (渐变填充)
* **高度**: 60px。

### Level 5: RightPanel (右侧面板)
* **健康度**: 环形图 (85%, 绿色)，中心文字"85"+"良好"。
* **数据源**: 环形图，右侧图例。
* **最近上传**: 列表项包含文件图标 (32x32px, 圆角 4px)。背景色：PDF红, Word蓝, Excel绿, Markdown橙。

---

## 📦 数据契约 (Data Contract)

* **接口定义**: 严格遵循 `references/prompt.md` 中的 TypeScript 接口 (`KnowledgeBase`, `StatCard`, `TrendData` 等)。
* **Mock 数据**: 组件 Props 必须与 Mock 数据结构完全匹配。禁止隐式字段转换。
* **数据流**: `mockData.ts` → Context/Store → Components。保持单向数据流。

---

## ✅ 验收清单 (Verification Checklist)

生成代码后，请逐项检查：
- [ ] Sidebar 是否深蓝色且全高？Header 左侧是否深蓝，右侧是否白色？
- [ ] 向量/存储图标是否为 `BlockOutlined` / `PieChartOutlined`？
- [ ] 表格表头是否为浅灰 (`#fafafa`)？列宽与对齐是否精确？
- [ ] 趋势图是否无坐标轴、平滑曲线、高度 60px？
- [ ] 右侧面板宽度是否为 320px？文件图标是否为单字母配色？
- [ ] 所有交互元素是否有 0.2s 过渡动画？悬停态是否正确？
- [ ] 字体大小/粗细是否严格匹配速查表？
- [ ] 是否使用了 `ConfigProvider` 统一管理主题？

---

## 📚 参考索引 (References)

* **视觉基准**: `assets/image.png`
* **详细规范**: `references/prompt.md` (颜色值、间距、完整数据结构)
* **设计分析**: `references/analysis.md` (模块说明)
