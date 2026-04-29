import React, { useState } from 'react'
import { Switch, Tag } from 'antd'
import type { SearchResult, DocumentMetadata } from '../../types'
import './ResultDetail.css'

interface ResultDetailProps {
  result: SearchResult
  metadata: DocumentMetadata
}

const ResultDetail: React.FC<ResultDetailProps> = ({ result, metadata }) => {
  const [expandOriginal, setExpandOriginal] = useState(false)

  const originalText = `RAG（Retrieval-Augmented Generation，检索增强生成）是一种结合了信息检索和文本生成的技术框架。它通过从外部知识库中检索相关信息来增强大语言模型的生成能力，从而提高回答的准确性和时效性。

RAG 的核心思想是：在生成答案之前，先从大量文档中检索出与问题相关的内容片段，然后将这些片段作为上下文提供给大语言模型，使其基于更充分的事实信息生成回答。

RAG 的主要优势包括：
• 减少模型幻觉，提高答案准确性
• 支持知识的实时更新
• 提供答案溯源，增强可解释性
• 降低大模型对超大上下文的依赖
...`

  return (
    <div className="result-detail">
      <div className="detail-header">
        <h3 className="detail-title">结果详情</h3>
        <div className="expand-toggle">
          <span className="expand-label">展开原始文本</span>
          <Switch checked={expandOriginal} onChange={setExpandOriginal} size="small" />
        </div>
      </div>

      <div className="detail-document-header">
        <span className="document-title">{result.title}</span>
        <Tag color="green" className="document-tag">
          {result.knowledgeBase}
        </Tag>
      </div>

      <div className="detail-metadata">
        <div className="metadata-row">
          <span className="metadata-label">文件名称</span>
          <span className="metadata-value">{metadata.fileName}</span>
          <span className="metadata-label">相似度</span>
          <span className="metadata-value">{metadata.similarity}</span>
        </div>
        <div className="metadata-row">
          <span className="metadata-label">所属知识库</span>
          <span className="metadata-value">{metadata.knowledgeBase}</span>
          <span className="metadata-label">更新日期</span>
          <span className="metadata-value">{metadata.updateTime}</span>
        </div>
        <div className="metadata-row">
          <span className="metadata-label">位置</span>
          <span className="metadata-value">第 {metadata.segment} 段</span>
        </div>
      </div>

      <div className="detail-text-fragment">
        <h4 className="fragment-title">文本片段</h4>
        <div className="fragment-content">
          <div className="fragment-decoration" />
          <p className="fragment-text">{result.summary}</p>
        </div>
      </div>

      <div className="detail-original-text">
        <h4 className="original-title">原始文本（节选）</h4>
        <div className="original-content">
          {originalText.split('\n\n').map((paragraph, index) => (
            <p key={index} className="original-paragraph">
              {paragraph.split('\n').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line.startsWith('•') ? (
                    <span className="original-list-item">{line}</span>
                  ) : (
                    line
                  )}
                  {lineIndex < paragraph.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="detail-related-metadata">
        <h4 className="related-title">相关元数据</h4>
        <div className="related-content">
          <div className="related-row">
            <span className="related-label">文档类型</span>
            <span className="related-value">{metadata.documentType}</span>
            <span className="related-label">标签</span>
            <div className="related-tags">
              {metadata.tags.map((tag) => (
                <Tag key={tag} className="related-tag">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <div className="related-row">
            <span className="related-label">文档大小</span>
            <span className="related-value">{metadata.documentSize}</span>
            <span className="related-label">自定义字段</span>
            <span className="related-value">-</span>
          </div>
          <div className="related-row">
            <span className="related-label">字符数</span>
            <span className="related-value">{metadata.charCount.toLocaleString()}</span>
          </div>
          <div className="related-row">
            <span className="related-label">分段数量</span>
            <span className="related-value">{metadata.segmentCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultDetail
