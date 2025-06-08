import React, { useState, useEffect } from "react";

const RecipeForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setIngredients(initialData.ingredients?.join(", ") || "");
      setInstructions(initialData.instructions || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" required />
      <textarea value={instructions} onChange={e => setInstructions(e.target.value)} placeholder="Instructions" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default RecipeForm;
