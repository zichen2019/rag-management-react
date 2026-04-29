import React from 'react'
import { Layout, Menu, Badge } from 'antd'
import {
  HomeOutlined,
  BellOutlined,
  DownOutlined,
  UserOutlined,
  MenuFoldOutlined,
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
  SearchOutlined
} from '@ant-design/icons'
import './Header.css'

const { Header: AntHeader } = Layout

interface HeaderProps {
  onMenuToggle?: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <AntHeader className="header">
      <div className="header-left">
        <div className="logo-section">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z"/>
            </svg>
          </div>
          <span className="logo-text">RAG 知识库平台</span>
        </div>
        <MenuFoldOutlined className="menu-toggle" onClick={onMenuToggle} />
        <div className="breadcrumb">
          <HomeOutlined className="breadcrumb-icon" />
          <span className="breadcrumb-link">首页</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">检索测试</span>
        </div>
      </div>
      <div className="header-right">
        <div className="knowledge-base-selector">
          <span className="selector-label">知识库</span>
          <span className="selector-value">全部知识库</span>
          <DownOutlined className="selector-arrow" />
        </div>
        <Badge count={12} offset={[-5, 5]}>
          <BellOutlined className="notification-icon" />
        </Badge>
        <div className="user-info">
          <div className="user-avatar">AD</div>
          <span className="user-name">admin</span>
          <DownOutlined className="user-arrow" />
        </div>
      </div>
    </AntHeader>
  )
}

export default Header
