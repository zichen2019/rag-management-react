import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import KnowledgeBasePage from './pages/KnowledgeBase';

const App: React.FC = () => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 4,
          borderRadiusLG: 8,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        },
        components: {
          Table: {
            headerBg: '#fafafa',
            rowHoverBg: '#f5f5f5'
          },
          Layout: {
            headerHeight: 56,
            headerPadding: '0 24px',
            headerBg: '#ffffff'
          }
        }
      }}
    >
      <KnowledgeBasePage />
    </ConfigProvider>
  );
};

export default App;
