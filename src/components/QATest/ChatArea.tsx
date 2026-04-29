import React, { useState } from 'react'
import { Input, Button, Switch, Select, Avatar, message } from 'antd'
import {
  SendOutlined,
  CopyOutlined,
  LikeOutlined,
  DislikeOutlined,
  ClockCircleOutlined,
  RobotOutlined,
  UserOutlined
} from '@ant-design/icons'
import './ChatArea.css'

const { TextArea } = Input

interface ChatAreaProps {
  onSend: (message: string) => void
}

const ChatArea: React.FC<ChatAreaProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('')
  const [isStreaming, setIsStreaming] = useState(true)
  const [maxRefs, setMaxRefs] = useState(5)

  const handleSend = () => {
    if (!inputValue.trim()) return
    onSend(inputValue)
    setInputValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestions = [
    'RAG 和传统生成模型有什么区别？',
    'RAG 中的检索阶段常用哪些方法？',
    '如何优化 RAG 的检索效果？',
    'RAG 在企业中的典型应用场景有哪些？'
  ]

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="header-left">
          <Select defaultValue="all" className="kb-select" options={[{ value: 'all', label: '全部知识库' }]} />
          <Button type="text" icon={<span>⚙️</span>}>对话配置</Button>
        </div>
        <div className="header-right">
          <Button type="text" icon={<span>🗑️</span>}>清空对话</Button>
          <Button type="text" icon={<span>⬇️</span>}>导出</Button>
        </div>
      </div>

      <div className="chat-messages">
        {/* User Message */}
        <div className="message user-message">
          <div className="message-content">
            RAG（检索增强生成）技术的核心流程是什么？
          </div>
          <div className="message-time">2024-05-10 14:35:21</div>
          <Avatar className="user-avatar" icon={<UserOutlined />} />
        </div>

        {/* AI Message */}
        <div className="message ai-message">
          <Avatar className="ai-avatar" icon={<RobotOutlined />} />
          <div className="message-content">
            <div className="ai-title">RAG（检索增强生成）技术的核心流程主要包括以下步骤：</div>
            <ol className="ai-list">
              <li><strong>问题理解</strong>：对用户输入的问题进行理解和改写，提取关键语义信息。</li>
              <li><strong>检索</strong>：在知识库中检索与问题相关的文档片段或信息。</li>
              <li><strong>增强</strong>：将检索到的相关信息与原始问题进行整合，构建增强后的提示（Prompt）。</li>
              <li><strong>生成</strong>：基于增强后的提示，调用大语言模型生成最终答案。</li>
            </ol>
            <p className="ai-desc">
              通过将外部知识检索与大语言模型生成能力相结合，RAG 能够在保证生成质量的同时，提升回答的准确性和时效性，并有效降低模型幻觉。
            </p>
          </div>
          <div className="message-actions">
            <span className="message-time">2024-05-10 14:35:23</span>
            <div className="action-icons">
              <CopyOutlined onClick={() => message.success('已复制')} />
              <LikeOutlined />
              <DislikeOutlined />
            </div>
          </div>
        </div>
      </div>

      <div className="suggestions">
        <div className="suggestions-title">
          <ClockCircleOutlined /> 追问建议
        </div>
        <div className="suggestions-list">
          {suggestions.map((text, index) => (
            <Button key={index} className="suggestion-btn" onClick={() => setInputValue(text)}>
              {text}
            </Button>
          ))}
        </div>
      </div>

      <div className="chat-input-area">
        <div className="input-wrapper">
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="请输入您的问题，Enter 发送，Shift+Enter 换行"
            maxLength={2000}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
          <div className="char-count">{inputValue.length} / 2000</div>
        </div>
        <div className="input-controls">
          <div className="control-left">
            <div className="control-item">
              <Switch checked={isStreaming} onChange={setIsStreaming} size="small" />
              <span>流式输出</span>
            </div>
            <div className="control-item">
              <span>最大引用数：</span>
              <Select
                value={maxRefs}
                onChange={setMaxRefs}
                size="small"
                style={{ width: 60 }}
                options={[{ value: 3, label: 3 }, { value: 5, label: 5 }, { value: 10, label: 10 }]}
              />
            </div>
          </div>
          <Button type="primary" icon={<SendOutlined />} onClick={handleSend} className="send-btn">
            发送
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatArea
