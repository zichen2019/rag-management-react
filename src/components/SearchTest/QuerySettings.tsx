import React, { useState } from 'react'
import { Input, Select, Button, InputNumber } from 'antd'
import './QuerySettings.css'

const { TextArea } = Input

interface QuerySettingsProps {
  onSearch: (query: string) => void
  onReset: () => void
}

const QuerySettings: React.FC<QuerySettingsProps> = ({ onSearch, onReset }) => {
  const [query, setQuery] = useState('什么是RAG? 它的工作原理是什么?')
  const [knowledgeBase, setKnowledgeBase] = useState('all')
  const [searchMode, setSearchMode] = useState<'semantic' | 'keyword'>('semantic')
  const [topK, setTopK] = useState(5)

  const charCount = query.length
  const maxChars = 500

  const handleSearch = () => {
    onSearch(query)
  }

  const handleReset = () => {
    setQuery('')
    setKnowledgeBase('all')
    setSearchMode('semantic')
    setTopK(5)
    onReset()
  }

  return (
    <div className="query-settings">
      <div className="module-header">
        <h3 className="module-title">查询设置</h3>
      </div>
      <div className="query-input-section">
        <label className="input-label">输入查询内容</label>
        <div className="textarea-wrapper">
          <TextArea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength={maxChars}
            rows={3}
            className="query-textarea"
          />
          <div className="char-count">
            <span className="current-count">{charCount}</span>
            <span className="max-count"> / {maxChars}</span>
          </div>
        </div>
      </div>
      <div className="config-row">
        <div className="config-item">
          <label className="config-label">检索知识库</label>
          <Select
            value={knowledgeBase}
            onChange={setKnowledgeBase}
            className="config-select"
            options={[
              { value: 'all', label: '全部知识库' },
              { value: 'tech', label: '技术知识库' },
              { value: 'industry', label: '行业研究报告' }
            ]}
          />
        </div>
        <div className="config-item">
          <label className="config-label">检索模式</label>
          <div className="mode-buttons">
            <Button
              type={searchMode === 'semantic' ? 'primary' : 'default'}
              onClick={() => setSearchMode('semantic')}
              className={searchMode === 'semantic' ? 'mode-btn-active' : 'mode-btn'}
            >
              语义检索
            </Button>
            <Button
              type={searchMode === 'keyword' ? 'primary' : 'default'}
              onClick={() => setSearchMode('keyword')}
              className={searchMode === 'keyword' ? 'mode-btn-active' : 'mode-btn'}
            >
              关键词检索
            </Button>
          </div>
        </div>
        <div className="config-item">
          <label className="config-label">Top K</label>
          <div className="topk-control">
            <Button
              size="small"
              onClick={() => setTopK(Math.max(1, topK - 1))}
              className="topk-btn"
            >
              -
            </Button>
            <span className="topk-value">{topK}</span>
            <Button
              size="small"
              onClick={() => setTopK(Math.min(20, topK + 1))}
              className="topk-btn"
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div className="action-buttons">
        <Button type="primary" onClick={handleSearch} className="search-btn">
          检索
        </Button>
        <Button onClick={handleReset} className="reset-btn">
          重置
        </Button>
      </div>
    </div>
  )
}

export default QuerySettings
