import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const recipe = {
      title,
      description,
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
    };

    fetch("http://localhost:4000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create recipe");
        return res.json();
      })
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}
