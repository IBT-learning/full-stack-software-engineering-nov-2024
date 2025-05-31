import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [formError, setFormError] = useState(null);

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
    setIngredients(e.target.value.split(',').map((value) => value.trim()));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title,
      instructions,
      ingredients,
    };

    if (!title || !instructions || !ingredient) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const response = await fetch("http://localhost:4000/api/recipes", {
      method: "POST",
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
      navigate("/");
      console.log("New Recipe added", json);
    }

    // navigate("/");
  };
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
              value={ingredient}
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

            <button>Create Recipe</button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Create;
