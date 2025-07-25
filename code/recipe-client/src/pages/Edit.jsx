import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipe");
        return res.json();
      })
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setIngredients(data.ingredients.join(", "));
      })
      .catch((err) => console.error("Failed to fetch recipe for editing", err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const updated = {
      title,
      description,
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
    };

    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update recipe");
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  function handleDelete() {
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete recipe");
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
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
      <button type="submit">Save</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </form>
  );
}
