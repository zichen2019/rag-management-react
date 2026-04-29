import React from 'react'
import { Tag } from 'antd'
import './ReferencePanel.css'

interface ReferenceItem {
  id: number
  title: string
  knowledgeBase: string
  similarity: number
  summary: string
  fileName: string
  segment: number
}

const mockReferences: ReferenceItem[] = [
  {
    id: 1,
    title: 'RAG 技术概述',
    knowledgeBase: '技术知识库',
    similarity: 0.92,
    summary: 'RAG（Retrieval-Augmented Generation）即检索增强生成，是一种结合了信息检索和文本生成的技术框架。其核心流程包括：问题理解、检索、增强和生成四个阶段...',
    fileName: 'rag技术概述.md',
    segment: 1
  },
  {
    id: 2,
    title: 'RAG 工作原理详解',
    knowledgeBase: '技术知识库',
    similarity: 0.89,
    summary: 'RAG 的工作流程通常包括以下步骤：1）接收用户问题；2）将问题向量化；3）在向量数据库中检索相关文档；4）将检索到的文档与问题一起构造提示；5）将提示输入大语言模型生成答案。',
    fileName: 'rag工作原理.md',
    segment: 2
  },
  {
    id: 3,
    title: '向量数据库在 RAG 中的作用',
    knowledgeBase: '技术知识库',
    similarity: 0.78,
    summary: '向量数据库用于存储和检索文档的向量表示。在 RAG 系统中，它能够快速找到与用户问题最相关的内容片段，为生成环节提供可靠的上下文支持。',
    fileName: '向量数据库指南.md',
    segment: 3
  },
  {
    id: 4,
    title: 'RAG 与传统问答系统的对比',
    knowledgeBase: '行业研究报告',
    similarity: 0.71,
    summary: '与传统问答系统相比，RAG 具有知识更新方便、可溯源、减少幻觉等优势，能够更好地适应动态变化的知识场景。',
    fileName: 'RAG行业应用分析.pdf',
    segment: 4
  },
  {
    id: 5,
    title: '构建 RAG 系统的关键技术',
    knowledgeBase: '技术知识库',
    similarity: 0.65,
    summary: '构建一个高效的 RAG 系统需要关注文本分块、向量化、检索算法、重排序、提示工程等多个关键技术点。',
    fileName: 'RAG系统构建.md',
    segment: 5
  }
]

const ReferencePanel: React.FC = () => {
  return (
    <div className="reference-panel">
      <div className="panel-tabs">
        <span className="tab active">引用来源</span>
        <span className="tab">对话历史</span>
      </div>
      <div className="panel-content">
        <div className="stats">本次回答引用了 {mockReferences.length} 条文档片段</div>
        <div className="reference-list">
          {mockReferences.map((item) => (
            <div key={item.id} className="reference-item">
              <div className="item-index">{item.id}</div>
              <div className="item-content">
                <div className="item-header">
                  <span className="item-title">{item.title}</span>
                  <Tag color={item.knowledgeBase === '技术知识库' ? 'green' : 'blue'} className="item-tag">
                    {item.knowledgeBase}
                  </Tag>
                  <span className="item-similarity">相似度 {item.similarity}</span>
                </div>
                <p className="item-summary">{item.summary}</p>
                <div className="item-footer">
                  <span>📄 {item.fileName} · 第 {item.segment} 段</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          查看更多来源 <span>⌄</span>
        </div>
      </div>
    </div>
  )
}

export default ReferencePanel
