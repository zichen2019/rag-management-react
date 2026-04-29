# Layout 组件示例

## LayoutComponent.tsx
```tsx
import React from 'react'
import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import './Layout.css'

const { Sider, Content } = AntLayout

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <AntLayout className="main-layout">
        <Sider className="sidebar" width={220} collapsedWidth={0}>
          <Sidebar />
        </Sider>
        <Content className="main-content">
          <MainContent />
        </Content>
      </AntLayout>
    </div>
  )
}

export default Layout
```

## Layout.css
```css
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-layout {
  flex: 1;
  overflow: hidden;
}

.sidebar {
  background: #1a2332 !important;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-content {
  background: #f0f2f5;
  overflow-y: auto;
  padding: 24px;
}
```

## 注意事项
1. 使用 `Layout as AntLayout` 避免命名冲突
2. Sider 背景色使用 `!important` 覆盖 Ant Design 默认样式
3. 使用 flex 布局实现自适应高度
