import React from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../api";
import RecipeForm from "../components/RecipeForm";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createRecipe(data);
    navigate("/recipes");
  };

  return (
    <div className="main-container">
      <h2>Create Recipe</h2>
      <RecipeForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePage;
