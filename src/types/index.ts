export interface MenuItem {
  key: string
  label: string
  icon: React.ReactNode
}

export interface SearchResult {
  id: number
  title: string
  knowledgeBase: string
  knowledgeBaseColor: 'green' | 'blue'
  similarity: number
  summary: string
  fileName: string
  fileType: 'md' | 'pdf'
  segment: number
  updateTime: string
}

export interface DocumentMetadata {
  fileName: string
  knowledgeBase: string
  segment: number
  similarity: number
  updateTime: string
  documentType: string
  documentSize: string
  charCount: number
  segmentCount: number
  tags: string[]
}
