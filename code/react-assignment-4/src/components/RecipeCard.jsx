import { Link } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <p>{recipe.instructions}</p>
        {/* <div>{recipe.ingredients}</div> */}
        <ul>
            {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div className="buttons">
          <Link className="button" to={"/" + recipe._id}>
            view
          </Link>
          <Link className="button" to={"/edit/" + recipe._id}>
            edit
          </Link>
          {/* <i  className="button">delete</i> */}
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
