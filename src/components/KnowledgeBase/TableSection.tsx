import React from 'react'
import { Table, Tag, Space, Button, Input, Select, Tabs } from 'antd'
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons'
import './StatsCards.css'

const { Option } = Select

const mockData = [
  { key: '1', name: '公司产品文档', desc: '公司产品相关文档和使用手册', status: '正常', docs: '2,350', vectors: '28.6 万', size: '32.4 GB', time: '2024-05-20 10:20' },
  { key: '2', name: '技术知识库', desc: '技术文档、方案和最佳实践', status: '正常', docs: '5,620', vectors: '68.3 万', size: '58.7 GB', time: '2024-05-20 09:15' },
  { key: '3', name: '行业研究报告', desc: '行业分析和市场研究', status: '警告', docs: '1,230', vectors: '15.2 万', size: '18.6 GB', time: '2024-05-19 16:45' },
  { key: '4', name: '客户服务知识库', desc: '常见问题和解决方案', status: '正常', docs: '3,125', vectors: '35.6 万', size: '28.9 GB', time: '2024-05-19 14:30' },
  { key: '5', name: '法律法规库', desc: '法律法规和政策文件', status: '正常', docs: '1,856', vectors: '22.1 万', size: '22.3 GB', time: '2024-05-18 11:20' },
  { key: '6', name: '内部培训资料', desc: '员工培训和学习资料', status: '停用', docs: '950', vectors: '9.8 万', size: '12.1 GB', time: '2024-05-17 16:10' },
  { key: '7', name: '竞品分析库', desc: '竞争对手分析资料', status: '正常', docs: '1,411', vectors: '16.7 万', size: '16.8 GB', time: '2024-05-17 10:05' },
  { key: '8', name: '市场营销资料', desc: '市场营销策略和素材', status: '警告', docs: '2,000', vectors: '24.3 万', size: '24.5 GB', time: '2024-05-16 15:30' }
]

const TableSection: React.FC = () => {
  const columns = [
    { title: '知识库名称', dataIndex: 'name', key: 'name', render: (text: string) => <a>{text}</a> },
    { title: '描述', dataIndex: 'desc', key: 'desc', ellipsis: true },
    {
      title: '状态', dataIndex: 'status', key: 'status',
      render: (status: string) => {
        let color = 'success'
        if (status === '警告') color = 'warning'
        if (status === '停用') color = 'default'
        return <Tag color={color}>{status}</Tag>
      }
    },
    { title: '文档数', dataIndex: 'docs', key: 'docs' },
    { title: '向量数', dataIndex: 'vectors', key: 'vectors' },
    { title: '存储大小', dataIndex: 'size', key: 'size' },
    { title: '更新时间', dataIndex: 'time', key: 'time' },
    {
      title: '操作', key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>查看</a>
          <a>编辑</a>
          <a>更多</a>
        </Space>
      )
    }
  ]

  return (
    <div className="table-section">
      <div className="table-toolbar">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="全部知识库" key="1" />
          <Tabs.TabPane tab="我创建的" key="2" />
          <Tabs.TabPane tab="共享给我的" key="3" />
        </Tabs>
        <div className="toolbar-actions">
          <Input placeholder="搜索知识库名称或描述" prefix={<SearchOutlined />} style={{ width: 200 }} />
          <Select defaultValue="all" style={{ width: 120 }}>
            <Option value="all">全部状态</Option>
            <Option value="normal">正常</Option>
            <Option value="warning">警告</Option>
            <Option value="disabled">停用</Option>
          </Select>
          <Select defaultValue="all" style={{ width: 120 }}>
            <Option value="all">全部标签</Option>
          </Select>
          <Button icon={<ReloadOutlined />} />
        </div>
      </div>
      <Table columns={columns} dataSource={mockData} pagination={{ pageSize: 10 }} />
    </div>
  )
}

export default TableSection
