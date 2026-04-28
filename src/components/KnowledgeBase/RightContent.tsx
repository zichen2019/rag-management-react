import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { HealthDetail, DataSourceType, RecentUpload } from '../../types/knowledgeBase';

const fileTypeConfig = {
  pdf: { bg: '#ff4d4f', letter: 'P' },
  word: { bg: '#1890ff', letter: 'W' },
  excel: { bg: '#52c41a', letter: 'X' },
  markdown: { bg: '#fa8c16', letter: 'M' }
};

interface RightContentProps {
  healthData: {
    score: number;
    level: string;
    details: HealthDetail[];
    updateTime: string;
  };
  dataSourceTypes: DataSourceType[];
  recentUploads: RecentUpload[];
}

const RightContent: React.FC<RightContentProps> = ({
  healthData,
  dataSourceTypes,
  recentUploads
}) => {
  const healthOption = {
    series: [
      {
        type: 'pie',
        radius: ['70%', '85%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          formatter: () => `{a|${healthData.score}}\n{b|${healthData.level}}`,
          rich: {
            a: {
              fontSize: 20,
              fontWeight: 600,
              color: '#262626',
              lineHeight: 24
            },
            b: {
              fontSize: 12,
              color: '#8c8c8c',
              lineHeight: 16
            }
          }
        },
        data: [
          { value: healthData.score, itemStyle: { color: '#52c41a' } },
          { value: 100 - healthData.score, itemStyle: { color: '#f0f0f0' } }
        ]
      }
    ]
  };

  const dataSourceOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['55%', '90%'],
        center: ['50%', '50%'],
        label: {
          show: false
        },
        data: dataSourceTypes.map(item => ({
          name: item.name,
          value: item.count,
          itemStyle: { color: item.color }
        }))
      }
    ]
  };

  return (
    <div
      style={{
        width: 320,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          padding: 16
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#262626',
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: '1px solid #f0f0f0'
          }}
        >
          知识库健康度
        </h3>

        <div style={{ display: 'flex', gap: 16 }}>
          <ReactECharts
            option={healthOption}
            style={{ width: 120, height: 120 }}
          />
          <div style={{ flex: 1, display: 'grid', padding: '10px 0' }}>
            {healthData.details.map((detail, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 8,
                  fontSize: 14,
                  color: '#595959'
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: detail.color
                  }}
                />
                <span>{detail.label}</span>
                <span style={{ marginLeft: '20px', marginRight: 'auto' }}>{detail.count}</span>
                <span>
                  {detail.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 12, color: '#8c8c8c', marginTop: 16 }}>
          统计时间：{healthData.updateTime}
        </div>
      </div>

      <div
        style={{
          background: '#ffffff',
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          padding: 16
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: '1px solid #f0f0f0'
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#262626',
              margin: 0
            }}
          >
            数据源类型分布
          </h3>
          <a style={{ color: '#1890ff', fontSize: 14 }}>查看详情 &gt;</a>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ position: 'relative' }}>
            <ReactECharts
              option={dataSourceOption}
              style={{ width: 130, height: 130 }}
            />
            <div
              style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                pointerEvents: 'none'
              }}
            >
              <div style={{ fontSize: 12, height: 14, color: '#8c8c8c' }}>总数</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#262626' }}>
                {dataSourceTypes.reduce((sum, item) => sum + item.count, 0)}
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {dataSourceTypes.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 8,
                  fontSize: 13,
                  color: '#595959'
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: item.color
                  }}
                />
                <span>{item.name}</span>
                <span style={{ marginLeft: 'auto' }}>
                  {item.count} ({item.percentage})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: '#ffffff',
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          padding: 16
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: '1px solid #f0f0f0'
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#262626',
              margin: 0
            }}
          >
            最近上传
          </h3>
          <a style={{ color: '#1890ff', fontSize: 14 }}>查看全部 &gt;</a>
        </div>

        {recentUploads.map((upload, index) => {
          const config = fileTypeConfig[upload.fileType];
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: index < recentUploads.length - 1 ? 12 : 0
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 4,
                  background: config.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 600,
                  flexShrink: 0
                }}
              >
                {config.letter}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 14,
                    color: '#262626',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {upload.fileName}
                </div>
                <div style={{ fontSize: 12, color: '#8c8c8c' }}>
                  {upload.knowledgeBase}
                </div>
              </div>
              <div style={{ fontSize: 12, color: '#8c8c8c', flexShrink: 0 }}>
                {upload.time}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightContent;
