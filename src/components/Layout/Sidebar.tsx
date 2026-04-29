import React from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import {
  DatabaseOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  TeamOutlined,
  SettingOutlined,
  FileSearchOutlined,
  QuestionCircleOutlined,
  AppstoreAddOutlined,
  SafetyOutlined,
  UnorderedListOutlined,
  DoubleLeftOutlined
} from '@ant-design/icons'
import './Sidebar.css'

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
  { key: '/knowledge-base', icon: <DatabaseOutlined />, label: <Link to="/knowledge-base">知识库管理</Link> },
  { key: '/data-source', icon: <DatabaseOutlined />, label: <Link to="/data-source">数据源管理</Link> },
  { key: '/document', icon: <FileTextOutlined />, label: <Link to="/document">文档管理</Link> },
  { key: '/vector', icon: <AppstoreOutlined />, label: <Link to="/vector">向量管理</Link> },
  { key: '/search-test', icon: <FileSearchOutlined />, label: <Link to="/search-test">检索测试</Link> },
  { key: '/qa-test', icon: <QuestionCircleOutlined />, label: <Link to="/qa-test">问答测试</Link> },
  { key: '/app-management', icon: <AppstoreAddOutlined />, label: <Link to="/app-management">应用管理</Link> },
  { key: '/permission', icon: <SafetyOutlined />, label: <Link to="/permission">权限管理</Link> },
  { key: '/system-settings', icon: <SettingOutlined />, label: <Link to="/system-settings">系统设置</Link> },
  { key: '/operation-log', icon: <UnorderedListOutlined />, label: <Link to="/operation-log">操作日志</Link> }
]

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    // Navigation is handled by Link, but we can add logic here if needed
  }

  return (
    <div className="sidebar-container">
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="sidebar-menu"
      />
      <div className="collapse-button" onClick={() => {}}>
        <DoubleLeftOutlined />
        <span>收起菜单</span>
      </div>
    </div>
  )
}

export default Sidebar
