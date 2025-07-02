import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://quoteslate.vercel.app/api/tags')
      .then(res => res.json())
      .then(data => setTags(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}&count=3`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setQuotes(data);
          } else {
            setQuotes([]);
          }
        })
        .catch(err => {
          console.error('Error fetching quotes:', err);
          setQuotes([]);
        });
    }
  }, [selectedTag]);

  return (
    <div className="app-container">
      <h1>Random Quotes</h1>

      <label htmlFor="tag-select">Choose a tag:</label>
      <select id="tag-select" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="">--Select a tag--</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>

      <div className="quotes">
        {quotes.length > 0 ? (
          quotes.map((q, i) => (
            <div key={i} className="quote-card">
              <p>"{q.content || q.quote || 'No content available'}"</p>
              <p className="author">— {q.author || 'Unknown'}</p>
            </div>
          ))
        ) : (
          selectedTag && <p>No quotes found for this tag.</p>
        )}
      </div>
    </div>
  );
}

export default App;
