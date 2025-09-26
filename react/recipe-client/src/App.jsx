import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/create">Create Recipe</Link>
      </nav>
      <Outlet />
    </div>
  );
}

