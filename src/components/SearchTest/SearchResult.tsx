import React from 'react'
import { Tag } from 'antd'
import type { SearchResult as SearchResultType } from '../../types'
import './SearchResult.css'

interface SearchResultProps {
  results: SearchResultType[]
  selectedId: number
  onResultClick: (id: number) => void
}

const SearchResult: React.FC<SearchResultProps> = ({ results, selectedId, onResultClick }) => {
  const getTimeCost = () => {
    return '236 ms'
  }

  return (
    <div className="search-result">
      <div className="result-header">
        <h3 className="result-title">检索结果</h3>
        <span className="result-stats">
          共找到 {results.length} 条结果（耗时 {getTimeCost()}）
        </span>
      </div>
      <div className="result-list">
        {results.map((result) => (
          <div
            key={result.id}
            className={`result-item ${result.id === selectedId ? 'result-item-selected' : ''}`}
            onClick={() => onResultClick(result.id)}
          >
            <div className="result-index">{result.id}</div>
            <div className="result-content">
              <div className="result-main">
                <div className="result-title-row">
                  <span className="result-file-icon">
                    {result.fileType === 'md' ? '📄' : ''}
                  </span>
                  <span className="result-name">{result.title}</span>
                  <Tag
                    color={result.knowledgeBaseColor === 'green' ? 'green' : 'blue'}
                    className="result-tag"
                  >
                    {result.knowledgeBase}
                  </Tag>
                  <span className="result-similarity">相似度 {result.similarity}</span>
                </div>
                <p className="result-summary">{result.summary}</p>
              </div>
              <div className="result-footer">
                <span className="result-file-icon-small">
                  {result.fileType === 'md' ? '📄' : '📕'}
                </span>
                <span className="result-file-info">
                  {result.fileName} · 第 {result.segment} 段 · {result.updateTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
