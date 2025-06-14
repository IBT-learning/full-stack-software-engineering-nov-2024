import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/recipes/" + id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      console.log("Recipe Deleted Successfully", json);
      navigate("/", { replace: true });
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
        <div className="page detail">
          <h1>{title}</h1>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{instructions}</p>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Recipe;
