import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { Layout } from './components/Layout'
import KnowledgeBasePage from './pages/KnowledgeBasePage'
import SearchPage from './pages/SearchPage'
import QAPage from './pages/QAPage'
import './App.css'

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/knowledge-base" replace />} />
            <Route path="knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="search-test" element={<SearchPage />} />
            <Route path="qa-test" element={<QAPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
