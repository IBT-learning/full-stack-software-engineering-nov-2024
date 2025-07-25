import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipe");
        return res.json();
      })
      .then(setRecipe)
      .catch((err) => console.error("Failed to fetch recipe", err));
  }, [id]);

  function handleDelete() {
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <Link to={`/edit/${recipe._id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

