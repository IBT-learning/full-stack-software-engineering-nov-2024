import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [formError, setFormError] = useState(null);

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
    setIngredients(e.target.value.split(",").map((value) => value.trim()));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title,
      instructions,
      ingredients,
    };

    // if (!title || !instructions || !ingredient) {
    //   setFormError("Please fill in all the fields correctly.");
    //   return;
    // }

    const response = await fetch("http://localhost:4000/api/recipes/" + id, {
      method: "PATCH",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setFormError(json.error);
    }

    if (response.ok) {
      setFormError(null);
      console.log("Recipe edited Successfully", json);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch("http://localhost:4000/api/recipes/" + id);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setTitle(json.title);
        setInstructions(json.instructions);
        setIngredients(json.ingredients);
        console.log(json._id);
      }

      if (!response.ok) {
        navigate("/", { replace: true });
      }
    };
    fetchRecipe();
  }, []);
  return (
    <>
      <Layout>
        <div className="page create">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="ingredient">Ingredients:</label>
            <input
              type="text"
              id="ingredient"
              value={ingredients.join(',')}
              onChange={handleIngredientChange}
            />

            {/* <p>Value: {JSON.stringify(ingredients)}</p> */}

            <label htmlFor="instructions">Instructions:</label>
            <input
              type="text"
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />

            <button>Edit Recipe</button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Edit;
