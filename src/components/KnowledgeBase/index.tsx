import React from 'react'
import { Button } from 'antd'
import StatsCards from './StatsCards'
import HealthCard from './HealthCard'
import DistributionCard from './DistributionCard'
import RecentUploadsCard from './RecentUploadsCard'
import TableSection from './TableSection'
import TrendCards from './TrendCards'
import './StatsCards.css'

const KnowledgeBaseContent: React.FC = () => {
  return (
    <div className="knowledge-base-page">
      <div className="page-header">
        <div className="header-left">
          <h1 className="page-title">知识库管理</h1>
          <p className="page-desc">管理您的知识库，支持知识库的创建、配置和监控</p>
        </div>
        <div className="header-right">
          <Button type="primary">+ 创建知识库</Button>
        </div>
      </div>


      <div className="main-layout">
        <div className="left-panel">
          <StatsCards />
          <TableSection />
          <TrendCards />
        </div>
        <div className="right-panel">
          <HealthCard />
          <DistributionCard />
          <RecentUploadsCard />
        </div>
      </div>
    </div>
  )
}

export default KnowledgeBaseContent
