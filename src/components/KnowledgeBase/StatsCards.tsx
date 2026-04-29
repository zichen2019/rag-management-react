import React from 'react'
import { Card, Row, Col } from 'antd'
import {
  DatabaseOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  HddOutlined,
  CloudUploadOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FileMarkdownOutlined,
  GlobalOutlined,
  FileUnknownOutlined
} from '@ant-design/icons'
import './StatsCards.css'

const StatsCards: React.FC = () => {
  const stats = [
    { title: '知识库总数', value: '12', change: '+20%', icon: <DatabaseOutlined />, color: '#1890ff' },
    { title: '文档总数', value: '18,542', change: '+15.3%', icon: <FileTextOutlined />, color: '#52c41a' },
    { title: '向量总数', value: '235.6 万', change: '+18.7%', icon: <AppstoreOutlined />, color: '#faad14' },
    { title: '存储空间', value: '256.7 GB', change: '+12.1%', icon: <HddOutlined />, color: '#1890ff' }
  ]

  return (
    <Row gutter={[16, 16]} className="stats-row">
      {stats.map((stat, index) => (
        <Col span={6} key={index}>
          <Card className="stat-card" bordered={false}>
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change" style={{ color: stat.color === '#faad14' ? '#faad14' : '#52c41a' }}>
                较上月 ↑ {stat.change}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default StatsCards
