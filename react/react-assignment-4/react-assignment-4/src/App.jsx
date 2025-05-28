import "./App.css";
import { useEffect, useState } from "react";
import {Outlet, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch("http://localhost:4000/posts/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setPosts(data);
        // console.log(data.length)
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err.message);
      }
      finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
      <div className="app-container">
        <header className="app-header">

          <h1>Articulate</h1>
          <div className="header-info">
          <p className="app-subtitle">Discover interesting Recipes</p>
            <button
                onClick={() => {
                  navigate("/create")
                }}
                className="btn">Create New Recipe</button>
          </div>
        </header>

        <main className="posts-container">
          {loading ? (
              <div className="loading-spinner">Loading posts...</div>
          ) : error ? (
              <div className="error-message">Error: {error}</div>
          ) : posts.length > 0 ? (
              <div className="posts-grid">
                {posts.map((post, index) => (
                    <article key={index.toString()} className="post-card">
                      <h2 className="post-title">{post.title}</h2>
                      <button className="read-more-btn" onClick={() => {
                        navigate("article", {state: {iD: post._id}});
                        console.log(post.title);
                      }}>Read More</button>
                    </article>
                ))}
              </div>
          ) : (
              <p className="no-posts">No posts found.</p>
          )}
        </main>
        <Outlet/>
      </div>
  );
}

export default App;