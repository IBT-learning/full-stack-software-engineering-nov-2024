import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  const handleSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    }).then(() => navigate(`/recipe/${id}`));
  };

  const handleDelete = () => {
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSave}>
      <h1>Edit Recipe</h1>
      <input
        value={recipe.title}
        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
      />
      <input
        value={recipe.author}
        onChange={(e) => setRecipe({ ...recipe, author: e.target.value })}
      />
      <textarea
        value={recipe.instructions}
        onChange={(e) =>
          setRecipe({ ...recipe, instructions: e.target.value })
        }
      />
      <input
        value={recipe.ingredients.join(", ")}
        onChange={(e) =>
          setRecipe({
            ...recipe,
            ingredients: e.target.value.split(",").map((i) => i.trim()),
          })
        }
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleDelete}>
        Delete Recipe
      </button>
    </form>
  );
}
