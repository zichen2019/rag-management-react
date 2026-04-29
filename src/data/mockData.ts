import { SearchResult, DocumentMetadata } from '../types'

export const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    title: 'RAG（检索增强生成）技术概述',
    knowledgeBase: '技术知识库',
    knowledgeBaseColor: 'green',
    similarity: 0.92,
    summary: 'RAG（Retrieval-Augmented Generation，检索增强生成）是一种结合了信息检索和文本生成的技术框架。它通过从外部知识库中检索相关信息来增强大语言模型的生成能力，从而提高回答的准确性和时效性。',
    fileName: 'rag技术概述.md',
    fileType: 'md',
    segment: 1,
    updateTime: '2024-05-10 14:32:21'
  },
  {
    id: 2,
    title: 'RAG 的工作原理详解',
    knowledgeBase: '技术知识库',
    knowledgeBaseColor: 'green',
    similarity: 0.89,
    summary: 'RAG 的工作流程通常包括以下步骤：1）接收用户问题；2）将问题向量化；3）在向量数据库中检索相关文档；4）将检索到的文档与问题一起构造提示；5）将提示输入大语言模型生成答案。',
    fileName: 'rag工作原理.md',
    fileType: 'md',
    segment: 2,
    updateTime: '2024-05-08 10:15:43'
  },
  {
    id: 3,
    title: '向量数据库在 RAG 中的作用',
    knowledgeBase: '技术知识库',
    knowledgeBaseColor: 'green',
    similarity: 0.78,
    summary: '向量数据库用于存储和检索文档的向量表示。在 RAG 系统中，它能够快速找到与用户问题最相关的内容片段，为生成环节提供可靠的上下文支持。',
    fileName: '向量数据库指南.md',
    fileType: 'md',
    segment: 3,
    updateTime: '2024-05-06 09:47:11'
  },
  {
    id: 4,
    title: 'RAG 与传统问答系统的对比',
    knowledgeBase: '行业研究报告',
    knowledgeBaseColor: 'blue',
    similarity: 0.71,
    summary: '与传统问答系统相比，RAG 具有知识更新方便、可溯源、减少幻觉等优势，能够更好地适应动态变化的知识场景。',
    fileName: 'RAG行业应用分析.pdf',
    fileType: 'pdf',
    segment: 4,
    updateTime: '2024-05-05 16:20:18'
  },
  {
    id: 5,
    title: '构建 RAG 系统的关键技术',
    knowledgeBase: '技术知识库',
    knowledgeBaseColor: 'green',
    similarity: 0.65,
    summary: '构建一个高效的 RAG 系统需要关注文本分块、向量化、检索算法、重排序、提示工程等多个关键技术点。',
    fileName: 'RAG系统构建.md',
    fileType: 'md',
    segment: 5,
    updateTime: '2024-05-03 11:02:33'
  }
]

export const mockDocumentMetadata: DocumentMetadata = {
  fileName: 'rag技术概述.md',
  knowledgeBase: '技术知识库',
  segment: 1,
  similarity: 0.92,
  updateTime: '2024-05-10 14:32:21',
  documentType: 'Markdown',
  documentSize: '12.5 KB',
  charCount: 5842,
  segmentCount: 18,
  tags: ['RAG', '检索增强', '大语言模型', '知识库']
}
