import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../api";
import { Link } from "react-router-dom";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  const load = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    load();
  };

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe._id} className="card">
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <Link to={`/edit/${recipe._id}`}>Edit</Link>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;
