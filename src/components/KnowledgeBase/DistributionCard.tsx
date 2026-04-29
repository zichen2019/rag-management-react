import React from 'react'
import { Card } from 'antd'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './StatsCards.css'

const data = [
  { name: 'PDF', value: 18, color: '#1890ff' },
  { name: 'Word', value: 10, color: '#2b7de9' },
  { name: 'Excel', value: 5, color: '#52c41a' },
  { name: 'Markdown', value: 6, color: '#faad14' },
  { name: '网页', value: 4, color: '#722ed1' },
  { name: '其他', value: 2, color: '#13c2c2' }
]

const COLORS = data.map(d => d.color)

const DistributionCard: React.FC = () => {
  return (
    <Card className="info-card" title="数据源类型分布" bordered={false} extra={<a href="#">查看详情 &gt;</a>}>
      <div className="distribution-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center-text">
            <div className="score">45</div>
            <div className="status">总数</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DistributionCard
