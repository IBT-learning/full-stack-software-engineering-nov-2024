import { useState } from 'react'
import './QuotesApp.css'

function QuotesAppSimple() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGetQuote = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('https://quoteslate.vercel.app/api/quotes/random?limit=1')
      const data = await response.json()
      setQuotes(Array.isArray(data) ? data : [data])
    } catch (err) {
      setError('Failed to fetch quote: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="quotes-app">
      <div className="quotes-container">
        <header className="quotes-header">
          <h1>Random Quotations</h1>
          <p>Simplified version to test functionality</p>
        </header>

        <div className="controls-section">
          <button onClick={handleGetQuote} className="clear-button">
            Get Random Quote
          </button>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading quote...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        <div className="quotes-display">
          {quotes.length > 0 && !loading && (
            <div className="quotes-grid">
              {quotes.map((quote, index) => (
                <div key={index} className="quote-card">
                  <blockquote className="quote-content">
                    "{quote.content}"
                  </blockquote>
                  <div className="quote-author">
                    — {quote.author}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {quotes.length === 0 && !loading && !error && (
          <div className="instructions">
            <h3>Click the button above to get a random quote!</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuotesAppSimple