# 约束文件 - 从设计稿到前端项目生成过程中的问题与解决方案

## 1. 文件命名冲突问题

### 问题描述
在创建 Layout 组件时，使用了 `index.tsx` 作为组件文件，同时又创建了 `index.ts` 作为导出文件，导致循环引用错误：
```
Error: Detected cycle while resolving import "default"
```

### 解决方案
- **组件文件命名规范**：组件文件使用具体名称，如 `LayoutComponent.tsx`、`Header.tsx`，避免使用 `index.tsx`
- **导出文件命名**：`index.ts` 仅用于导出，不包含组件实现
- **文件结构**：
  ```
  components/Layout/
  ├── LayoutComponent.tsx  # 主组件实现
  ├── Header.tsx           # 子组件
  ├── Sidebar.tsx          # 子组件
  ├── MainContent.tsx      # 子组件
  ├── Layout.css           # 主组件样式
  ├── Header.css           # 子组件样式
  └── index.ts             # 统一导出
  ```

## 2. CSS 文件导入路径问题

### 问题描述
MainContent.tsx 导入了 `./MainContent.css`，但该文件不存在，导致构建错误：
```
Failed to resolve import "./MainContent.css" from "src/components/Layout/MainContent.tsx"
```

### 解决方案
- **CSS 文件与组件同名**：每个 `.tsx` 组件文件都应有对应的 `.css` 样式文件
- **创建组件时的检查清单**：
  1. 创建 `ComponentName.tsx`
  2. 同时创建 `ComponentName.css`
  3. 在 tsx 中导入对应的 css 文件
- **文件创建顺序**：先创建 css 文件，再创建 tsx 文件引用

## 3. Ant Design 组件导入问题

### 问题描述
使用 Ant Design 的 Layout 组件时，组件名与文件目录名冲突：
```tsx
import { Layout } from 'antd'  // 与目录名 Layout 冲突
```

### 解决方案
- **使用别名导入**：`import { Layout as AntLayout } from 'antd'`
- **或者使用子组件**：`import Layout from 'antd/lib/layout'`
- **推荐做法**：使用别名避免命名冲突

## 4. 项目结构初始化问题

### 问题描述
从零开始创建项目时，需要手动创建大量配置文件。

### 解决方案
- **标准化项目模板**：创建标准的项目初始化脚本
- **必需文件清单**：
  1. `package.json` - 依赖配置
  2. `tsconfig.json` - TypeScript 配置
  3. `vite.config.ts` - Vite 配置
  4. `index.html` - 入口 HTML
  5. `src/main.tsx` - React 入口
  6. `src/App.tsx` - 根组件
  7. `src/index.css` - 全局样式

## 5. 样式覆盖优先级问题

### 问题描述
Ant Design 组件的默认样式优先级较高，自定义样式无法覆盖。

### 解决方案
- **使用 `!important`**：在需要覆盖的样式属性后添加 `!important`
- **提高选择器优先级**：使用更具体的选择器
- **CSS Modules**：考虑使用 CSS Modules 避免样式冲突
- **推荐做法**：对于关键样式（如背景色、选中状态），使用 `!important` 确保覆盖

## 6. 响应式布局问题

### 问题描述
设计稿是固定尺寸，但实际需要在不同屏幕尺寸下正常显示。

### 解决方案
- **使用 Flexbox 布局**：主内容区使用 `flex: 1` 自适应
- **设置最大宽度**：内容容器设置 `max-width` 限制
- **最小宽度保护**：使用 `min-width: 0` 防止 flex 子项溢出
- **推荐断点**：
  - 桌面端：> 1200px
  - 平板端：768px - 1200px
  - 移动端：< 768px

## 7. 组件间通信问题

### 问题描述
多个组件需要共享状态（如选中的搜索结果），直接传递 props 导致层级过深。

### 解决方案
- **状态提升**：将共享状态提升到最近的共同父组件
- **使用 Context**：对于深层嵌套的组件，使用 React Context
- **推荐模式**：
  ```tsx
  // MainContent 管理状态
  const [selectedResultId, setSelectedResultId] = useState(1)
  
  // 传递给子组件
  <SearchResult selectedId={selectedResultId} onResultClick={setSelectedResultId} />
  <ResultDetail result={results.find(r => r.id === selectedResultId)} />
  ```

## 8. Mock 数据管理问题

### 问题描述
硬编码的 mock 数据分散在各个组件中，难以维护。

### 解决方案
- **集中管理 Mock 数据**：创建 `src/data/mockData.ts` 统一管理
- **定义 TypeScript 类型**：在 `src/types/index.ts` 定义数据结构
- **推荐结构**：
  ```
  src/
  ├── types/
  │   └── index.ts          # 类型定义
  └── data/
      └── mockData.ts       # Mock 数据
  ```

## 9. 开发服务器超时问题

### 问题描述
Vite 开发服务器启动后，bash 命令超时但服务器仍在运行。

### 解决方案
- **增加超时时间**：设置更长的 timeout 值（如 60000ms）
- **后台运行**：使用 `&` 后台运行，或检测特定输出判断启动成功
- **检测启动成功**：等待输出包含 "ready in" 或 "Local:" 关键词

## 10. 循环依赖检测问题

### 问题描述
Vite 在扫描依赖时检测到循环导入，但实际代码逻辑是正确的。

### 解决方案
- **检查 index.ts 导出**：确保 `index.ts` 没有循环引用
- **使用具名导出**：避免默认导出导致的循环引用
- **拆分文件**：将大组件拆分为多个小组件

## 11. 缺少 .gitignore 文件问题

### 问题描述
生成的项目中可能缺少 `.gitignore` 文件，导致 `node_modules`、构建产物等被提交到版本控制系统。

### 解决方案
- **检查机制**：在生成项目代码前，检查根目录是否存在 `.gitignore`。
- **自动生成**：如果不存在，则创建标准的 `.gitignore` 文件。
- **推荐内容**：
  ```gitignore
  # 依赖目录
  node_modules/
  .pnp
  .pnp.js

  # 构建产物
  dist/
  build/

  # 测试覆盖率
  coverage/

  # 编辑器配置
  .idea/
  .vscode/
  *.swp
  *.swo

  # 系统文件
  .DS_Store
  Thumbs.db

  # 环境变量
  .env.local
  .env.development.local
  .env.test.local
  .env.production.local
  ```

## 12. 已有项目的路由与菜单交互问题

### 问题描述
在已有项目基础上开发新页面时，可能未配置路由系统，导致无法通过菜单跳转到新页面。

### 解决方案
- **路由机制检查**：生成代码前检查 `package.json`。若未安装 `react-router-dom`，则执行 `npm install react-router-dom`。
- **根组件配置**：在 `App.tsx` 中引入 `BrowserRouter`，并配置 `<Routes>` 和 `<Route>`。
- **菜单联动**：
  - 检查侧边栏菜单组件（如 `Sidebar`）。
  - 若菜单项为纯文本或按钮，需修改为 `<Link>` 组件或绑定 `onClick` 事件调用 `navigate()`。
  - 确保当前路由（`useLocation`）与菜单选中状态同步。
