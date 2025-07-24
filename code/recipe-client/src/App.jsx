import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import './index.css'
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}