import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      }catch(err){
        console.error('Failed to fetch recipe details ', err);
      }
    }

    fetchRecipeDetails();
  }, [recipeId]);

  return <>
    <div className="recipe-wrapper">
      <h2>{recipe.title}</h2>
      <h3 id="author">by {recipe.author}</h3>
      <div id="ingredients-wrapper">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients ? recipe.ingredients.map((ingredient, i) => (
           <li key={i}>
            {ingredient}
           </li>)
          ) : null }
        </ul>
      </div>
      <div id="instructions-wrapper">
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
      <Link to={`/${recipeId}/edit`} className="edit-link">
        <button className="edit-btn">
          Edit Recipe
        </button>
      </Link>
    </div>
    
  </>
}

export default RecipeDetails;