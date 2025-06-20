import React, { useState, useEffect } from "react";
import { getPosts, createPost } from "../api/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // form state
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    // Fetch posts only if logged in
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await getPosts();
      setPosts(res);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      setIsLoggedIn(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createPost(newTitle, newContent, newTags.split(",").map(t => t.trim()));
      setNewTitle('');
      setNewContent('');
      setNewTags('');
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="welcome-message">
        <h2>Welcome to Tech Blog</h2>
        <p>This is a platform where you can read and share the latest in the tech world.</p>
        <p><strong>To view or create posts, please login or register above.</strong></p>
      </div>
    );
  }

  return (
    <div className="posts-wrapper">
      <form onSubmit={handleSubmit} className="new-post-form">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={newTags}
          onChange={(e) => setNewTags(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>

      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>Author: {post.author?.username || "Unknown"}</span>
            <div className="tags">{post.tags?.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;