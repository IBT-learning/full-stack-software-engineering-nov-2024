import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r._id}>
            <Link to={`/recipe/${r._id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
