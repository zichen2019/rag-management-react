# 组件结构规范

## 项目结构

```
src/
├── main.tsx              # React 入口文件
├── App.tsx               # 根组件
├── App.css               # 根组件样式
├── index.css             # 全局样式
├── types/
│   └── index.ts          # TypeScript 类型定义
├── data/
│   └── mockData.ts       # Mock 数据
└── components/
    ├── Layout/           # 布局组件
    │   ├── LayoutComponent.tsx
    │   ├── Layout.css
    │   ├── Header.tsx
    │   ├── Header.css
    │   ├── Sidebar.tsx
    │   ├── Sidebar.css
    │   ├── MainContent.tsx
    │   ├── MainContent.css
    │   └── index.ts
    └── [ModuleName]/     # 功能模块组件
        ├── ComponentA.tsx
        ├── ComponentA.css
        ├── ComponentB.tsx
        ├── ComponentB.css
        └── index.ts
```

## 组件命名规范

### 文件命名
- 组件文件：`PascalCase.tsx`（如 `Header.tsx`）
- 样式文件：与组件同名（如 `Header.css`）
- 导出文件：`index.ts`

### 组件命名
- 使用 `PascalCase`
- 名称应描述组件功能
- 避免使用通用名称（如 `Component`、`Widget`）

## 组件编写规范

### 基本结构
```tsx
import React from 'react'
import './ComponentName.css'

interface ComponentNameProps {
  // Props 定义
}

const ComponentName: React.FC<ComponentNameProps> = (props) => {
  // 组件逻辑
  
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

### 样式文件规范
```css
.component-name {
  /* 组件容器样式 */
}

.component-name__element {
  /* 子元素样式 */
}

.component-name--modifier {
  /* 修饰符样式 */
}
```

## 导入导出规范

### index.ts 导出
```ts
export { default as ComponentName } from './ComponentName'
export { default as AnotherComponent } from './AnotherComponent'
```

### 组件内导入
```tsx
import React from 'react'
import { Button, Input } from 'antd'
import { SomeType } from '../../types'
import './ComponentName.css'
```

## 注意事项

1. **避免循环引用**：不要使用 `index.tsx` 作为组件文件名
2. **CSS 文件配套**：每个组件都应有对应的 CSS 文件
3. **类型定义集中**：所有类型定义放在 `types/index.ts`
4. **Mock 数据集中**：所有 Mock 数据放在 `data/mockData.ts`
