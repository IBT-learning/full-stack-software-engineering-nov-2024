import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try{
        const res = await fetch('http://localhost:3005/recipes');
        if(!res.ok){
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const recipeList = await res.json();
        setRecipes(recipeList);
      }catch(err){
        console.error('Failed to fetch recipes: ', err);
      }
    }

    fetchRecipes();
  }, []);

  return <>
    <div id="recipe-wrapper">
      {recipes.map((recipe) => {
        return <Link to={recipe._id} key={recipe._id}>
          <section className="recipe">
            <h3>{recipe.title}</h3>
            <h4> by {recipe.author}</h4>
          </section>
        </Link>
      })}
    </div>
  </>
}

export default Home;