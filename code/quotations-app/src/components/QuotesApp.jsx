import { useState, useEffect } from 'react'
import Quote from './Quote'
import './QuotesApp.css'

const API_BASE = 'https://quoteslate.vercel.app/api'

function QuotesApp() {
  // State variables
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [numQuotes, setNumQuotes] = useState(1)
  const [searchMode, setSearchMode] = useState('tags') // 'tags' or 'author'
  const [authors, setAuthors] = useState([])
  const [selectedAuthor, setSelectedAuthor] = useState('')
  const [authorSearch, setAuthorSearch] = useState('')

  // Fetch available tags on component mount
  useEffect(() => {
    fetchTags()
    fetchAuthors()
  }, [])

  // Fetch quotes when tags, author, or numQuotes change
  useEffect(() => {
    if (searchMode === 'tags' && selectedTags.length > 0) {
      fetchQuotesByTags()
    } else if (searchMode === 'author' && selectedAuthor) {
      fetchQuotesByAuthor()
    }
  }, [selectedTags, selectedAuthor, numQuotes, searchMode])

  const fetchTags = async () => {
    try {
      const response = await fetch(`${API_BASE}/tags`)
      const data = await response.json()
      setTags(data)
    } catch (err) {
      setError('Failed to fetch tags')
    }
  }

  const fetchAuthors = async () => {
    try {
      const response = await fetch(`${API_BASE}/authors`)
      const data = await response.json()
      setAuthors(data)
    } catch (err) {
      setError('Failed to fetch authors')
    }
  }

  const fetchQuotesByTags = async () => {
    if (selectedTags.length === 0) return
    
    setLoading(true)
    setError('')
    
    try {
      const tagsParam = selectedTags.join(',')
      const response = await fetch(
        `${API_BASE}/quotes/random?tags=${tagsParam}&limit=${numQuotes}`
      )
      const data = await response.json()
      
      if (data.length === 0) {
        setError('No quotes found for the selected tags combination.')
        setQuotes([])
      } else {
        setQuotes(Array.isArray(data) ? data : [data])
      }
    } catch (err) {
      setError('Failed to fetch quotes')
      setQuotes([])
    } finally {
      setLoading(false)
    }
  }

  const fetchQuotesByAuthor = async () => {
    if (!selectedAuthor) return
    
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `${API_BASE}/quotes/random?author=${encodeURIComponent(selectedAuthor)}&limit=${numQuotes}`
      )
      const data = await response.json()
      
      if (data.length === 0) {
        setError('No quotes found for this author.')
        setQuotes([])
      } else {
        setQuotes(Array.isArray(data) ? data : [data])
      }
    } catch (err) {
      setError('Failed to fetch quotes')
      setQuotes([])
    } finally {
      setLoading(false)
    }
  }

  const handleTagsChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value)
    setSelectedTags(selected)
  }

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author)
    setAuthorSearch('')
  }

  const filteredAuthors = authors.filter(author =>
    author.toLowerCase().includes(authorSearch.toLowerCase())
  )

  const clearSelection = () => {
    setSelectedTags([])
    setSelectedAuthor('')
    setQuotes([])
    setError('')
  }

  return (
    <div className="quotes-app">
      <div className="quotes-container">
        <header className="quotes-header">
          <h1>💫 HenryOgun's Random Quotations</h1>
          <p>Discover inspiring quotes by topic or author</p>
          <div className="creator-badge">
            <span className="creator-text">✨ Crafted with passion by @henryogun</span>
          </div>
        </header>

        <div className="controls-section">
          {/* Search Mode Toggle */}
          <div className="search-mode">
            <label>Search by:</label>
            <div className="mode-buttons">
              <button 
                className={searchMode === 'tags' ? 'active' : ''}
                onClick={() => {
                  setSearchMode('tags')
                  clearSelection()
                }}
              >
                Tags
              </button>
              <button 
                className={searchMode === 'author' ? 'active' : ''}
                onClick={() => {
                  setSearchMode('author')
                  clearSelection()
                }}
              >
                Author
              </button>
            </div>
          </div>

          {/* Tags Selection */}
          {searchMode === 'tags' && (
            <div className="control-group">
              <label htmlFor="tags-select">Select Tags:</label>
              <select 
                id="tags-select"
                multiple 
                value={selectedTags}
                onChange={handleTagsChange}
                className="tags-select"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <small>Hold Ctrl/Cmd to select multiple tags</small>
            </div>
          )}

          {/* Author Search */}
          {searchMode === 'author' && (
            <div className="control-group">
              <label htmlFor="author-search">Search Authors:</label>
              <input
                id="author-search"
                type="text"
                value={authorSearch}
                onChange={(e) => setAuthorSearch(e.target.value)}
                placeholder="Type author name..."
                className="author-search"
              />
              {authorSearch && filteredAuthors.length > 0 && (
                <div className="author-suggestions">
                  {filteredAuthors.slice(0, 10).map(author => (
                    <button
                      key={author}
                      onClick={() => handleAuthorSelect(author)}
                      className="author-suggestion"
                    >
                      {author}
                    </button>
                  ))}
                </div>
              )}
              {selectedAuthor && (
                <div className="selected-author">
                  Selected: <strong>{selectedAuthor}</strong>
                  <button onClick={() => setSelectedAuthor('')}>×</button>
                </div>
              )}
            </div>
          )}

          {/* Number of Quotes */}
          <div className="control-group">
            <label htmlFor="num-quotes">Number of quotes:</label>
            <select 
              id="num-quotes"
              value={numQuotes}
              onChange={(e) => setNumQuotes(Number(e.target.value))}
              className="num-select"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Clear Button */}
          <button onClick={clearSelection} className="clear-button">
            Clear Selection
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading quotes...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {/* Quotes Display */}
        <div className="quotes-display">
          {quotes.length > 0 && !loading && (
            <>
              <div className="quotes-header-info">
                <h2>
                  {quotes.length} Quote{quotes.length > 1 ? 's' : ''} 
                  {searchMode === 'tags' && selectedTags.length > 0 && 
                    ` about ${selectedTags.join(', ')}`
                  }
                  {searchMode === 'author' && selectedAuthor && 
                    ` by ${selectedAuthor}`
                  }
                </h2>
              </div>
              <div className="quotes-grid">
                {quotes.map((quote, index) => (
                  <Quote key={`${quote.id || index}-${quote.content}`} quote={quote} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Instructions */}
        {quotes.length === 0 && !loading && !error && (
          <div className="instructions">
            <h3>How to use:</h3>
            <ul>
              <li>Choose between searching by <strong>Tags</strong> or <strong>Author</strong></li>
              <li>For tags: Select one or more topics from the dropdown</li>
              <li>For authors: Type to search and select an author</li>
              <li>Choose how many quotes you'd like to see</li>
              <li>Quotes will appear automatically!</li>
            </ul>
          </div>
        )}

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-content">
            <p className="footer-brand">
              <span className="footer-logo">🎯</span>
              <strong>HenryOgun Quotations</strong>
            </p>
            <p className="footer-description">
              A modern React application for discovering inspirational quotes
            </p>
            <div className="footer-links">
              <span className="footer-link">Built with ❤️ by Henry Ogun</span>
              <span className="footer-separator">•</span>
              <span className="footer-link">React & Vite</span>
              <span className="footer-separator">•</span>
              <span className="footer-link">© 2025</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default QuotesApp