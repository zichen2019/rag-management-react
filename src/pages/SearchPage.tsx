import React, { useState } from 'react'
import QuerySettings from '../components/SearchTest/QuerySettings'
import SearchResult from '../components/SearchTest/SearchResult'
import ResultDetail from '../components/SearchTest/ResultDetail'
import { mockSearchResults, mockDocumentMetadata } from '../data/mockData'
import type { SearchResult as SearchResultType } from '../types'
import './SearchPage.css'

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>(mockSearchResults)
  const [selectedResultId, setSelectedResultId] = useState<number>(1)

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
  }

  const handleReset = () => {
    console.log('Reset search')
  }

  const handleResultClick = (id: number) => {
    setSelectedResultId(id)
  }

  const selectedResult = searchResults.find(r => r.id === selectedResultId) || searchResults[0]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">检索测试</h1>
        <p className="page-description">在此测试知识库的检索效果，查看匹配的文本片段和来源</p>
      </div>
      <div className="content-wrapper">
        <div className="left-panel">
          <QuerySettings onSearch={handleSearch} onReset={handleReset} />
          <SearchResult
            results={searchResults}
            selectedId={selectedResultId}
            onResultClick={handleResultClick}
          />
        </div>
        <div className="right-panel">
          <ResultDetail result={selectedResult} metadata={mockDocumentMetadata} />
        </div>
      </div>
    </div>
  )
}

export default SearchPage
