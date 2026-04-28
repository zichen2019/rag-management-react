import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DatabaseOutlined,
  FolderOutlined,
  FileOutlined,
  BlockOutlined,
  SearchOutlined,
  MessageOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { menuItems } from '../../data/mockData';

const { Sider } = Layout;

const iconMap: Record<string, React.ReactNode> = {
  DatabaseOutlined: <DatabaseOutlined />,
  FolderOutlined: <FolderOutlined />,
  FileOutlined: <FileOutlined />,
  BlockOutlined: <BlockOutlined />,
  SearchOutlined: <SearchOutlined />,
  MessageOutlined: <MessageOutlined />,
  AppstoreOutlined: <AppstoreOutlined />,
  UserOutlined: <UserOutlined />,
  SettingOutlined: <SettingOutlined />,
  FileTextOutlined: <FileTextOutlined />
};

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      width={220}
      collapsedWidth={80}
      collapsed={collapsed}
      style={{
        background: '#001529',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
        transition: 'all 0.2s ease'
      }}
      trigger={null}
    >
      <div
        style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          background: '#001529'
        }}
      >
        {!collapsed && (
          <>
            <div
              style={{
                width: 24,
                height: 24,
                background: '#1890ff',
                borderRadius: 4,
                marginRight: 8
              }}
            />
            <span
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              RAG 管理平台
            </span>
          </>
        )}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={['knowledge']}
        items={menuItems.map(item => ({
          key: item.key,
          icon: iconMap[item.icon],
          label: item.label
        }))}
        style={{
          background: '#001529',
          borderRight: 0
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          padding: '12px 0',
          color: '#ffffffa6',
          fontSize: 12,
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => onCollapse(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 收起菜单
      </div>
    </Sider>
  );
};

export default Sidebar;
