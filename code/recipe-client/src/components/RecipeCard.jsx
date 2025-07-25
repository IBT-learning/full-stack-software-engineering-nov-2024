import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{recipe.title}</h2>
      <p style={styles.text}>
        {recipe.instructions.length > 100
          ? recipe.instructions.slice(0, 100) + "..."
          : recipe.instructions}
      </p>
      <Link to={`/recipe/${recipe._id}`} style={styles.button}>
        View Recipe
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  title: {
    margin: "0 0 0.5rem 0",
    fontSize: "1.2rem",
  },
  text: {
    color: "#444",
    fontSize: "0.95rem",
    marginBottom: "0.75rem",
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
