import React from 'react';
import { Layout, Input, Badge, Avatar, Breadcrumb, Dropdown } from 'antd';
import { SearchOutlined, BellOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({ collapsed, onToggleCollapse }) => {
  const userMenuItems = [
    { key: 'profile', label: '个人资料' },
    { key: 'settings', label: '账户设置' },
    { type: 'divider' as const },
    { key: 'logout', label: '退出登录' }
  ];

  return (
    <AntHeader
      style={{
        height: 56,
        lineHeight: '56px',
        background: '#ffffff',
        padding: '0 24px',
        position: 'fixed',
        left: collapsed ? 80 : 220,
        right: 0,
        top: 0,
        zIndex: 99,
        borderBottom: '1px solid #f0f0f0',
        transition: 'left 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MenuOutlined
          style={{
            fontSize: 16,
            color: '#595959',
            cursor: 'pointer',
            marginRight: 16
          }}
          onClick={onToggleCollapse}
        />
        <Breadcrumb
          items={[
            { title: '首页' },
            { title: '知识库管理' }
          ]}
          style={{ fontSize: 14 }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          placeholder="搜索知识库、数据源或文档"
          prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
          style={{
            width: 300,
            background: '#ffffff',
            border: '1px solid #d9d9d9',
            borderRadius: 4
          }}
          variant="borderless"
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginLeft: 48
          }}
        >
          <Badge
            count={22}
            offset={[0, 0]}
            styles={{
              indicator: {
                fontSize: 9,
                minWidth: 16,
                height: 16,
                padding: '0 4px',
                background: '#ff4d4f'
              }
            }}
          >
            <BellOutlined
              style={{
                fontSize: 18,
                color: '#595959',
                cursor: 'pointer'
              }}
            />
          </Badge>

          <Dropdown menu={{ items: userMenuItems }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 8 }}>
              <Avatar
                size={32}
                style={{ background: '#1890ff' }}
              >
                AD
              </Avatar>
              <span style={{ color: '#595959', fontSize: 14 }}>admin</span>
              <DownOutlined style={{ color: '#595959', fontSize: 12 }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
