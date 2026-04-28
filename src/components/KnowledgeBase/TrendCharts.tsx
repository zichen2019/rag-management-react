import React from 'react';
import { Row, Col } from 'antd';
import ReactECharts from 'echarts-for-react';
import type { TrendData } from '../../types/knowledgeBase';

interface TrendChartsProps {
  data: TrendData[];
}

const TrendCharts: React.FC<TrendChartsProps> = ({ data }) => {
  const getOption = (item: TrendData) => {
    return {
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      xAxis: {
        show: false,
        type: 'category',
        data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7']
      },
      yAxis: {
        show: false,
        type: 'value'
      },
      series: [
        {
          data: item.chartData,
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 2,
            color: item.color
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: item.color
                },
                {
                  offset: 1,
                  color: `${item.color}1a`
                }
              ]
            },
            opacity: 0.1
          }
        }
      ]
    };
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h2
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: '#262626',
          marginBottom: 16
        }}
      >
        知识库趋势（最近 7 天）
      </h2>

      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} md={12} xl={6} key={index}>
            <div
              style={{
                background: '#ffffff',
                borderRadius: 8,
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                padding: 16
              }}
            >
              <div style={{ fontSize: 14, color: '#8c8c8c', marginBottom: 4 }}>
                {item.name}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#262626',
                  lineHeight: 1.2,
                  marginBottom: 4
                }}
              >
                {item.value}
              </div>
              <div style={{ fontSize: 12, color: '#52c41a', marginBottom: 8 }}>
                ↑ {item.trend}%
              </div>
              <div style={{ borderTop: '1px solid #f0f0f0', margin: '8px 0' }} />
              <ReactECharts
                option={getOption(item)}
                style={{ height: 60 }}
                notMerge={true}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrendCharts;
