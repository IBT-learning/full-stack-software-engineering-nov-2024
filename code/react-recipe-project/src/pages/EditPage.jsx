import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById, updateRecipe } from "../api";
import RecipeForm from "../components/RecipeForm";

const EditPage = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById(id).then(setInitialData);
  }, [id]);

  const handleUpdate = async (data) => {
    await updateRecipe(id, data);
    navigate("/recipes");
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      {initialData && <RecipeForm onSubmit={handleUpdate} initialData={initialData} />}
    </div>
  );
};

export default EditPage;
