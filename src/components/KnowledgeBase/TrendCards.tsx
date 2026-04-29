import React from 'react'
import { Card, Row, Col } from 'antd'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import './StatsCards.css'

const mockData = [
  { value: 200 }, { value: 400 }, { value: 300 }, { value: 500 }, { value: 450 }, { value: 600 }, { value: 700 }
]

const TrendCards: React.FC = () => {
  const trends = [
    { title: '知识库趋势', value: '+1,250', change: '+12.5%', color: '#1890ff', label: '文档数量' },
    { title: '向量数量', value: '+85,420', change: '+15.3%', color: '#52c41a', label: '较上周' },
    { title: '检索次数', value: '+12,560', change: '+18.7%', color: '#722ed1', label: '较上周' },
    { title: '问答次数', value: '+8,460', change: '+11.2%', color: '#faad14', label: '较上周' }
  ]

  return (
    <Row gutter={[16, 16]} className="trend-row">
      {trends.map((trend, index) => (
        <Col span={6} key={index}>
          <Card className="trend-card" title={trend.title} bordered={false}>
            <div className="trend-header">
              <div className="trend-value">{trend.value}</div>
              <div className="trend-change" style={{ color: trend.color }}>较上周 ↑ {trend.change}</div>
            </div>
            <div className="trend-chart">
              <ResponsiveContainer width="100%" height={60}>
                <AreaChart data={mockData}>
                  <defs>
                    <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={trend.color} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={trend.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke={trend.color} fill={`url(#color${index})`} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default TrendCards
