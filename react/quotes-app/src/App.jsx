import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [quote, setQuote] = useState(null);

  // Fetch available tags when app loads
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((err) => console.error("Error fetching tags:", err));
  }, []);

  // Fetch a random quote when selectedTag changes
  useEffect(() => {
    if (!selectedTag) return;

    fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error("Error fetching quote:", err));
  }, [selectedTag]);

  return (
    <div className="app-container">
      <h1>Random Quote Generator</h1>

      {/* Dropdown */}
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">-- Choose a topic --</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Quote Section */}
      {quote ? (
        <div className="quote-box">
          <p className="quote-text">"{quote.quote}"</p>
          <p className="quote-author">— {quote.author}</p>
        </div>
      ) : (
        <p className="placeholder">Select a topic to see a quote!</p>
      )}
    </div>
  );
}

export default App;

