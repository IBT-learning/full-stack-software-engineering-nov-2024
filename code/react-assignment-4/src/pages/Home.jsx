import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:4000/api/recipes");
      const json = await response.json();

      if (response.ok) {
        setRecipes(json);
        console.log(json);
      }

      if (!response.ok) {
        setFetchError(json.error);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <>
      <Layout>
        <div className="page home">
          {fetchError && <p>{fetchError}</p>}
          {recipes && (
            <div className="recipes">
              <div className="recipe-grid">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    // onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
