import React from 'react'
import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
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
          <Outlet />
        </Content>
      </AntLayout>
    </div>
  )
}

export default Layout
