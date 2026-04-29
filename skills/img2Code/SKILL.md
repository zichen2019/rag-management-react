---
name: img2code
description: 将设计稿图片转换为完整的 React 前端项目
---

# 从设计稿到前端项目生成 Skill

## 概述
本 Skill 用于将设计稿（PNG/JPG 图片）转换为完整的前端 React 项目。

## 输入要求
- 设计稿图片文件（PNG/JPG 格式）
- 存放位置：`skills/img2Code/assets/image.png`

## 输出产物
- 设计稿分析文档：`result/references/analysis.md`
- 开发提示词文档：`result/references/prompt.md`
- 完整的前端项目代码：项目根目录下

## 流程概览

```
┌─────────────────┐
│  1. 读取设计稿  │
────────┬────────┘
         │
┌────────▼────────┐
│ 2. 生成分析文档 │
────────┬────────┘
         │
────────▼────────┐
│ 3. 生成提示词   │
└────────┬────────┘
         │
┌────────▼────────┐
│ 4. 评价与优化   │◄──┐
────────┬────────┘   │
         │            │ 连续3次"高"
────────▼────────┐   │
│ 5. 项目生成     │───┘
└────────┬────────┘
         │
┌────────▼────────┐
│ 6. 依赖安装验证 │
└─────────────────┘
```

## 详细步骤

### 步骤 1：读取并分析设计稿
1. 读取 `skills/img2Code/assets/image.png`
2. 识别页面布局结构
3. 识别所有功能模块
4. **交互细节分析**：详细记录每个模块的交互状态（如 Hover、Focus、Active、Loading、Empty 等）。若设计稿未明确展示，需根据通用 UX 规范进行补全（例如按钮悬停变色、输入框聚焦高亮）。
5. 记录每个模块的详细内容

**参考文件**：`references/analysis-template.md`

### 步骤 2：生成分析文档
- 输出到 `result/references/analysis.md`
- 包含：布局、模块、样式、间距等所有细节
- 使用结构化格式（表格、列表）

### 步骤 3：生成开发提示词
- 基于 analysis.md 生成
- 输出到 `result/references/prompt.md`
- 包含：技术栈、组件、样式规范等

**参考文件**：`references/prompt-template.md`

### 步骤 4：评价与优化循环
```
循环 6 次：
  1. 评价 analysis.md 和 prompt.md
  2. 根据评价优化文档
  3. 如果连续 3 次评价为"高"，则通过

如果 3 轮循环仍未通过，则停止
```

**评价标准**：
- **高**：覆盖所有细节，可直接用于代码生成
- **中**：覆盖大部分细节，需要补充
- **低**：遗漏重要细节，需要大量补充

### 步骤 5：生成前端项目
1. 检查现有项目结构
2. 处理冲突（如有）
3. **路由与菜单逻辑（若项目已存在）**：
   - 检查 `package.json` 是否包含 `react-router-dom`。若无，则添加依赖。
   - 在根组件中配置 `BrowserRouter`。
   - 若设计稿包含左侧菜单，且当前项目未实现路由跳转，则实现菜单点击触发路由切换的逻辑（使用 `useNavigate` 或 `<Link>`），并确保菜单选中状态与当前路由同步。
4. 生成项目文件

**项目结构**：参考 `references/component-structure.md`

### 步骤 6：安装依赖并验证
1. 运行 `npm install`
2. 运行 `npm run dev`
3. 验证项目启动成功

## 技术栈选择

### 默认技术栈
- **框架**：React 18
- **语言**：TypeScript
- **构建工具**：Vite
- **路由管理**：react-router-dom v6
- **UI 库**：Ant Design 5
- **图标库**：@ant-design/icons

### 项目配置文件
- `package.json` - 依赖配置
- `tsconfig.json` - TypeScript 配置
- `vite.config.ts` - Vite 配置
- `index.html` - 入口 HTML

## 常见问题与约束

**参考文件**：`references/constraints.md`

### 关键约束
1. **文件命名**：组件文件避免使用 `index.tsx`，使用具体名称
2. **CSS 配套**：每个组件都应有对应的 CSS 文件
3. **命名冲突**：使用别名导入避免与目录名冲突
4. **样式覆盖**：使用 `!important` 确保关键样式覆盖

## 参考文件清单

| 文件 | 用途 |
|------|------|
| `references/constraints.md` | 开发约束和常见问题 |
| `references/analysis-template.md` | 设计稿分析模板 |
| `references/prompt-template.md` | 开发提示词模板 |
| `references/component-structure.md` | 组件结构规范 |
| `references/css-patterns.md` | CSS 样式模式 |
| `references/layout-example.md` | Layout 组件示例 |
