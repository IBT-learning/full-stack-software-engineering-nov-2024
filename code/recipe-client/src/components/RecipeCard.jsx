import { Link } from 'react-router-dom'
import './RecipeCard.css'

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3>{recipe.title}</h3>
        <div className="recipe-meta">
          <span className="prep-time">⏱️ {recipe.prepTime || 30} min</span>
          <span className="servings">👥 {recipe.servings || 4} servings</span>
        </div>
      </div>
      
      <div className="recipe-description">
        <p>{recipe.description || 'A delicious recipe waiting to be discovered!'}</p>
      </div>
      
      <div className="recipe-ingredients">
        <strong>Ingredients:</strong>
        <p>{recipe.ingredients?.slice(0, 3).join(', ')}
          {recipe.ingredients?.length > 3 && '...'}</p>
      </div>
      
      <Link to={`/recipe/${recipe._id}`} className="view-recipe">
        View Full Recipe →
      </Link>
    </div>
  )
}

export default RecipeCard