import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalVariables.jsx";
import "./App.css";

function App() {
  const [allTags, setAllTags] = useState([]);
  const [quote, setQuote] = useState("");
  const [itemTag, setItemTag] = useState("");
  const [loading, setLoading] = useState(false);
  const { setPreloader, preloader } = useContext(GlobalContext);

  useEffect(() => {
    async function getTags() {
      try {
        setLoading(true);
        const response = await fetch("https://quoteslate.vercel.app/api/tags");
        if (response.ok) {
          const res = await response.json();
          setAllTags(res);
        }
      } catch (err) {
        console.error("Error fetching tags:", err);
      } finally {
        setLoading(false);
      }
    }
    getTags();
  }, []);

  useEffect(() => {
    if (!itemTag) return;

    async function getQuote() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://quoteslate.vercel.app/api/quotes/random?tags=${itemTag}`,
        );
        if (response.ok) {
          const res = await response.json();
          setQuote(res.quote);
        }
      } catch (err) {
        console.error("Error fetching quote:", err);
      } finally {
        setLoading(false);
      }
    }
    getQuote();
  }, [itemTag]);

  return (
    <div className="app-container">
      <div className="quote-box">
        <h1 className="app-title">Inspirational Quotes</h1>

        <select
          value={itemTag}
          onChange={(e) => setItemTag(e.target.value)}
          className="tag-selector"
          disabled={loading}
        >
          <option value="">Select a Tag</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <div className="quote-display">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : quote ? (
            <blockquote>"{quote}"</blockquote>
          ) : (
            <p>Select a tag to see a quote</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
