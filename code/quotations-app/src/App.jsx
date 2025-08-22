import { useState } from 'react'
import QuotesApp from './components/QuotesApp'
import './App.css'

function App() {
  const [showFullApp, setShowFullApp] = useState(false)
  const [error, setError] = useState('')

  if (!showFullApp) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1>💫 HenryOgun's Random Quotations</h1>
          <div style={{
            background: 'white',
            color: '#333',
            padding: '30px',
            borderRadius: '15px',
            marginTop: '30px'
          }}>
            <h2>App Loading Test</h2>
            <p>If you can see this, React is working correctly!</p>
            
            <div style={{ margin: '20px 0' }}>
              <button 
                onClick={() => {
                  try {
                    setShowFullApp(true)
                  } catch (err) {
                    setError(err.message)
                  }
                }}
                style={{
                  background: '#007bff',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Load Full Quotations App
              </button>
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              marginTop: '20px'
            }}>
              <strong>✨ Features to expect:</strong>
              <ul style={{ textAlign: 'left', margin: '10px 0' }}>
                <li>Search quotes by tags or authors</li>
                <li>Beautiful HenryOgun branding</li>
                <li>Mobile responsive design</li>
                <li>Professional footer attribution</li>
              </ul>
            </div>

            {error && (
              <div style={{
                background: '#ffebee',
                color: '#c62828',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '20px'
              }}>
                <strong>Error:</strong> {error}
              </div>
            )}
          </div>

          <footer style={{ marginTop: '40px', fontSize: '14px' }}>
            <p>✨ Crafted with passion by @henryogun | © 2025</p>
          </footer>
        </div>
      </div>
    )
  }

  // Load the full-featured quotations app
  return <QuotesApp />
}

export default App
