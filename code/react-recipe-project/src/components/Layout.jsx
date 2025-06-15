// import React from "react";
// import { Link } from "react-router-dom";

// const Layout = ({ children }) => (
//   <div className="container">
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/recipes">Recipes</Link>
//       <Link to="/create">Create</Link>
//     </nav>
//     <hr />
//     {children}
//   </div>
// );

// export default Layout;


import React from "react";
import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/recipes">Recipes</Link> | <Link to="/create">Create</Link>
      </nav>
      {/* Outlet renders whatever route is defined in App.jsx */}
      <hr />
      <Outlet />
    </div>
  )
}

export default AppLayout;


