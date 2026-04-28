import React from 'react';
import { Row, Col } from 'antd';
import {
  DatabaseOutlined,
  FileOutlined,
  BlockOutlined,
  PieChartOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import type { StatCard } from '../../types/knowledgeBase';

const iconMap: Record<string, React.ReactNode> = {
  DatabaseOutlined: <DatabaseOutlined />,
  FileOutlined: <FileOutlined />,
  BlockOutlined: <BlockOutlined />,
  PieChartOutlined: <PieChartOutlined />
};

interface StatCardsProps {
  cards: StatCard[];
}

const StatCards: React.FC<StatCardsProps> = ({ cards }) => {
  return (
    <Row
      gutter={0}
      style={{
        background: '#ffffff',
        borderRadius: 8,
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        marginBottom: 24
      }}
      className="stat-cards-row"
    >
      {cards.map((card, index) => (
        <Col
          xs={24}
          md={12}
          xl={6}
          key={index}
          style={{
            padding: 24,
            borderRight: index < cards.length - 1 ? '1px solid #f0f0f0' : 'none',
            transition: 'all 0.2s ease'
          }}
          className="stat-card-col"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: `${card.color}1a`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                color: card.color
              }}
            >
              {iconMap[card.icon]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: '#8c8c8c', marginBottom: 4 }}>
                {card.title}
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: '#262626',
                  lineHeight: 1.2,
                  marginBottom: 8
                }}
              >
                {card.value}
              </div>
              <div style={{ fontSize: 12, color: '#8c8c8c' }}>
                较上月{' '}
                <span style={{ color: '#52c41a' }}>
                  <ArrowUpOutlined /> {card.trend}%
                </span>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default StatCards;
