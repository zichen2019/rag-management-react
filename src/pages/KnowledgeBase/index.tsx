import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Sidebar, Header } from '../../components/Layout';
import { StatCards, KnowledgeTable, TrendCharts, RightContent } from '../../components/KnowledgeBase';
import { statCards, knowledgeBases, trendData, healthData, dataSourceTypes, recentUploads } from '../../data/mockData';

const { Content } = Layout;

const KnowledgeBasePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <Layout style={{ transition: 'margin-left 0.2s ease' }}>
        <Header collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
        
        <Content
          style={{
            marginTop: 56,
            marginLeft: collapsed ? 80 : 220,
            padding: 24,
            background: '#f0f2f5',
            minHeight: 'calc(100vh - 56px)',
            overflowY: 'auto'
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h1
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#262626',
                    margin: 0,
                    marginBottom: 8
                  }}
                >
                  知识库管理
                </h1>
                <p style={{ fontSize: 14, color: '#8c8c8c', margin: 0 }}>
                  管理您的知识库，支持知识库的创建、配置和监控
                </p>
              </div>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ borderRadius: 4 }}
              >
                创建知识库
              </Button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <StatCards cards={statCards} />
              <KnowledgeTable data={knowledgeBases} />
              <TrendCharts data={trendData} />
            </div>
            
            <RightContent
              healthData={healthData}
              dataSourceTypes={dataSourceTypes}
              recentUploads={recentUploads}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default KnowledgeBasePage;
