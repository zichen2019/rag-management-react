import React from 'react'
import { ChatArea, ReferencePanel } from '../components/QATest'
import './QAPage.css'

const QAPage: React.FC = () => {
  const handleSend = (message: string) => {
    console.log('Sending message:', message)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">问答测试</h1>
        <p className="page-description">基于知识库进行智能问答，查看回答效果和引用来源</p>
      </div>
      <div className="content-wrapper">
        <div className="left-panel">
          <ChatArea onSend={handleSend} />
        </div>
        <div className="right-panel">
          <ReferencePanel />
        </div>
      </div>
    </div>
  )
}

export default QAPage
