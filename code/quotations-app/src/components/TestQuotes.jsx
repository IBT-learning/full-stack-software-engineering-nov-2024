import './QuotesApp.css'

function TestQuotes() {
  return (
    <div className="quotes-app">
      <div className="quotes-container">
        <header className="quotes-header">
          <h1>Random Quotations</h1>
          <p>Testing basic component rendering</p>
        </header>
        
        <div className="instructions">
          <h3>Test Component Loaded Successfully!</h3>
          <p>If you can see this, the basic component structure is working.</p>
        </div>
      </div>
    </div>
  )
}

export default TestQuotes