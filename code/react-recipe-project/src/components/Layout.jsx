import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="container">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/create">Create</Link>
    </nav>
    <hr />
    {children}
  </div>
);

export default Layout;
