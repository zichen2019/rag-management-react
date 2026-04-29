import React from 'react'
import { Card, List, Avatar } from 'antd'
import { FilePdfOutlined, FileWordOutlined, FileExcelOutlined, FileMarkdownOutlined } from '@ant-design/icons'
import './StatsCards.css'

const mockUploads = [
  { name: '产品使用手册 v2.1.pdf', kb: '公司产品文档', time: '2024-05-20 10:20', type: 'pdf' },
  { name: '技术方案设计文档.docx', kb: '技术知识库', time: '2024-05-20 09:15', type: 'word' },
  { name: '市场数据分析.xlsx', kb: '行业研究报告', time: '2024-05-19 16:45', type: 'excel' },
  { name: 'FAQ 常见问题.md', kb: '客户服务知识库', time: '2024-05-19 14:30', type: 'md' },
  { name: '行业研究报告 2024.pdf', kb: '行业研究报告', time: '2024-05-19 11:20', type: 'pdf' }
]

const getIcon = (type: string) => {
  switch (type) {
    case 'pdf': return <FilePdfOutlined style={{ color: '#ff4d4f', fontSize: 24 }} />
    case 'word': return <FileWordOutlined style={{ color: '#1890ff', fontSize: 24 }} />
    case 'excel': return <FileExcelOutlined style={{ color: '#52c41a', fontSize: 24 }} />
    case 'md': return <FileMarkdownOutlined style={{ color: '#faad14', fontSize: 24 }} />
    default: return <FilePdfOutlined style={{ color: '#8c8c8c', fontSize: 24 }} />
  }
}

const RecentUploadsCard: React.FC = () => {
  return (
    <Card className="info-card" title="最近上传" bordered={false} extra={<a href="#">查看全部 &gt;</a>}>
      <List
        itemLayout="horizontal"
        dataSource={mockUploads}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={getIcon(item.type)} size={32} style={{ background: 'transparent' }} />}
              title={<span className="upload-name">{item.name}</span>}
              description={
                <div className="upload-meta">
                  <span>知识库：{item.kb}</span>
                  <span className="upload-time">{item.time}</span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default RecentUploadsCard
