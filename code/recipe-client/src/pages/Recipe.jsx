import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import './Recipe.css'

function Recipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchRecipe()
  }, [id])

  const fetchRecipe = async () => {
    try {
      setLoading(true)
      const data = await api.getRecipe(id)
      setRecipe(data)
    } catch (err) {
      setError('Recipe not found.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recipe? This action cannot be undone.')) {
      try {
        await api.deleteRecipe(id)
        navigate('/', { replace: true })
      } catch (err) {
        alert('Failed to delete recipe. Please try again.')
      }
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading recipe...</p>
      </div>
    )
  }

  if (error || !recipe) {
    return (
      <div className="error">
        <p>{error}</p>
        <Link to="/">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <Link to="/" className="back-link">← Back to All Recipes</Link>
        <div className="recipe-actions">
          <Link to={`/edit/${id}`} className="edit-button">
            ✏️ Edit Recipe
          </Link>
          <button onClick={handleDelete} className="delete-button">
            🗑️ Delete Recipe
          </button>
        </div>
      </div>

      <div className="recipe-content">
        <h1>{recipe.title}</h1>
        
        <div className="recipe-meta">
          <div className="meta-item">
            <strong>Prep Time:</strong> {recipe.prepTime || 30} minutes
          </div>
          <div className="meta-item">
            <strong>Servings:</strong> {recipe.servings || 4}
          </div>
          <div className="meta-item">
            <strong>Difficulty:</strong> {recipe.difficulty || 'Medium'}
          </div>
        </div>

        {recipe.description && (
          <div className="recipe-description">
            <h2>Description</h2>
            <p>{recipe.description}</p>
          </div>
        )}

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-instructions">
          <h2>Instructions</h2>
          <div className="instructions-text">
            {recipe.instructions?.split('\n').map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe