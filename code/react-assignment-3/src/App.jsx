import { useEffect, useState } from "react";
import "./assets/css/style.css";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [quote, setQuote] = useState(null);

  // Fetch tags on mount
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  // Fetch quote when tag changes
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
        .then((res) => res.json())
        .then((data) => setQuote(data));
    }
  }, [selectedTag]);

  return (
    <>
      <div className="app">
        <h1>Random Quote Generator</h1>

        <select
          onChange={(e) => setSelectedTag(e.target.value)}
          value={selectedTag}
        >
          <option value="">-- Select a Tag --</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {quote && (
          <div className="quote-box">
            <p className="quote">"{quote.quote}"</p>
            <span>- {quote.author}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
