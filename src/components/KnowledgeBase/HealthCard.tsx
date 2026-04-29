import React from 'react'
import { Card } from 'antd'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './StatsCards.css'

const data = [
  { name: '健康', value: 10, color: '#52c41a' },
  { name: '警告', value: 2, color: '#faad14' },
  { name: '异常', value: 0, color: '#ff4d4f' }
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const HealthCard: React.FC = () => {
  return (
    <Card className="info-card" title="知识库健康度" bordered={false} extra={<a href="#">查看详情 &gt;</a>}>
      <div className="health-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={50}
                paddingAngle={5}
                dataKey="value"
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center-text">
            <div className="score">85</div>
            <div className="status">良好</div>
          </div>
        </div>
        <div className="health-legend">
          {data.map((item) => (
            <div key={item.name} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: item.color }} />
              <span className="legend-name">{item.name}</span>
              <span className="legend-value">{item.value}</span>
              <span className="legend-percent">{((item.value / 12) * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">统计时间：2024-05-20 10:30:00</div>
    </Card>
  )
}

export default HealthCard
