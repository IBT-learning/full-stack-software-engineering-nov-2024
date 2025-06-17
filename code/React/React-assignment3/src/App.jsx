import { use, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [availableTags, setAvailableTags] = useState([]); // to save the fetched tags
  const [selectedTag, setSelectedTag] = useState(''); // the currently selected tag
  const [quote, setQuote] = useState(''); // fetched quote

  // run once when App mounts (pre-fetch the available tags)
  useEffect(() => {
    const fetchTags = async () => {
      try{
        const res = await fetch('https://quoteslate.vercel.app/api/tags');
        if(!res.ok){
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const tags = await res.json();
        setAvailableTags(tags);
        console.log(tags);
      }catch(err){
        console.error('Failed to fetch tags: ', err);
      }
    }

    fetchTags();
  }, []);

  // Fetch quote when selected tag changes
  useEffect(() => {
    if (!selectedTag){
      return;
    }
    const fetchQuote = async() => {
      try{
        const res = await fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`);
        if (!res.ok){
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const data = await res.json();
        setQuote(data.quote);
      }catch(err) {
        console.error('Failed to fetch quote: ', err);
      }
    }

    fetchQuote();
  },[selectedTag]);

  return (
    <section className='container'>
      <h1>Random Quote Generator</h1>
      <select 
        name="tag" 
        id=""
        value={selectedTag}
        onChange={(e) => {setSelectedTag(e.target.value)}}
        >
          <option value='' hidden>Select a tag</option>
          {availableTags.map((tag) => {
            return <option key={tag} value={tag}>{tag}</option>
          })}
      </select>
      <div>
        <p className='quote'>{quote} </p>
      </div>
    </section>
  );
}

export default App;
