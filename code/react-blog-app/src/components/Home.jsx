import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to <span className="highlight">Tech Blog</span></h1>
        <p>Your hub to read, share, and discuss the latest in tech.</p>
        <p>
          <Link to="/login" className="btn">Login</Link> or 
          <Link to="/register" className="btn">Register</Link> to get started.
        </p>
      </div>
    </div>
  );
}

export default Home;