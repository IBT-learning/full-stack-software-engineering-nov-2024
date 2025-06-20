import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li>
            <button onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer>© 2025 My Blog</footer>
    </div>
  );
}

export default Layout;