import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [recipe, setRecipe] = useState({});

  const {id: recipeId} = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try{
        const res = await fetch(`http://localhost:3005/recipes/find/${recipeId}`);
        if (!res.ok){
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const recipeDetails = await res.json();
        setRecipe(recipeDetails);
        console.log(recipe);s
      }catch(err){
        console.error('Failed to fetch recipe details ', err);
      }
    }

    fetchRecipeDetails();
  }, []);

  return <>
    <h2>{recipe.title}</h2>
    <h3 id="author">by {recipe.author}</h3>
    <div id="ingredients-wrapper">
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
    </div>
    <div id="instructions-wrapper">
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  </>
}

export default RecipeDetails;