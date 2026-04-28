import React, { useState } from 'react';
import { Table, Input, Select, Button, Tag, Pagination, Card } from 'antd';
import { SearchOutlined, ReloadOutlined, DatabaseOutlined } from '@ant-design/icons';
import type { KnowledgeBase } from '../../types/knowledgeBase';

const { Option } = Select;

interface KnowledgeTableProps {
  data: KnowledgeBase[];
}

const statusMap = {
  normal: { color: '#f6ffed', text: '#52c41a', border: '#b7eb8f', label: '正常' },
  warning: { color: '#fff7e6', text: '#fa8c16', border: '#ffd591', label: '警告' },
  disabled: { color: '#f5f5f5', text: '#8c8c8c', border: '#d9d9d9', label: '停用' }
};

const KnowledgeTable: React.FC<KnowledgeTableProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('all');

  const columns = [
    {
      title: '知识库名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      align: 'left' as const,
      render: (text: string, record: KnowledgeBase) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 4,
              background: `${record.iconColor}1a`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <DatabaseOutlined style={{ color: record.iconColor, fontSize: 14 }} />
          </div>
          <span style={{ color: '#262626' }}>{text}</span>
        </div>
      )
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: 250,
      align: 'left' as const,
      ellipsis: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      align: 'center' as const,
      render: (status: 'normal' | 'warning' | 'disabled') => {
        const config = statusMap[status];
        return (
          <Tag
            style={{
              background: config.color,
              color: config.text,
              border: `1px solid ${config.border}`,
              padding: '2px 8px',
              fontSize: 12,
              borderRadius: 4
            }}
          >
            {config.label}
          </Tag>
        );
      }
    },
    {
      title: '文档数',
      dataIndex: 'documentCount',
      key: 'documentCount',
      width: 100,
      align: 'right' as const,
      render: (count: number) => count.toLocaleString()
    },
    {
      title: '向量数',
      dataIndex: 'vectorCount',
      key: 'vectorCount',
      width: 100,
      align: 'right' as const,
      render: (count: number) => `${(count / 10000).toFixed(1)} 万`
    },
    {
      title: '存储大小',
      dataIndex: 'storageSize',
      key: 'storageSize',
      width: 100,
      align: 'right' as const
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 160,
      align: 'center' as const
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      align: 'right' as const,
      render: () => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <a style={{ color: '#1890ff' }}>查看</a>
          <a style={{ color: '#1890ff' }}>编辑</a>
          <a style={{ color: '#1890ff' }}>更多</a>
        </div>
      )
    }
  ];

  return (
    <Card
      style={{
        borderRadius: 8,
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
      styles={{ body: { padding: 20 } }}
    >
      <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
        {['all', 'created', 'shared'].map(tab => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontSize: 14,
              color: activeTab === tab ? '#262626' : '#8c8c8c',
              cursor: 'pointer',
              paddingBottom: 8,
              borderBottom: activeTab === tab ? '2px solid #1890ff' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            {tab === 'all' ? '全部知识库' : tab === 'created' ? '我创建的' : '共享给我的'}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Input
          placeholder="搜索知识库名称或描述"
          prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
          style={{ width: 240, borderRadius: 4 }}
        />
        <Select placeholder="全部状态" style={{ width: 120 }} allowClear>
          <Option value="normal">正常</Option>
          <Option value="warning">警告</Option>
          <Option value="disabled">停用</Option>
        </Select>
        <Select placeholder="全部标签" style={{ width: 120 }} allowClear />
        <Button
          icon={<ReloadOutlined />}
          style={{ width: 32, height: 32, borderRadius: '50%', marginLeft: 'auto' }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        size="small"
        pagination={false}
        style={{ background: '#ffffff' }}
        scroll={{ x: 'max-content' }}
      />

      <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination
          total={12}
          defaultCurrent={1}
          defaultPageSize={10}
          showSizeChanger
          showQuickJumper
          showTotal={total => `共 ${total} 条`}
        />
      </div>
    </Card>
  );
};

export default KnowledgeTable;
