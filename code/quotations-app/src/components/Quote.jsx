import './Quote.css'

function Quote({ quote }) {
  return (
    <div className="quote-card">
      <blockquote className="quote-content">
        "{quote.content}"
      </blockquote>
      <div className="quote-author">
        — {quote.author}
      </div>
      {quote.tags && quote.tags.length > 0 && (
        <div className="quote-tags">
          {quote.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Quote