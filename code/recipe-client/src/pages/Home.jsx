import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'
import RecipeCard from '../components/RecipeCard'
import './Home.css'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {
      setLoading(true)
      const data = await api.getAllRecipes()
      setRecipes(data)
    } catch (err) {
      setError('Failed to load recipes. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading delicious recipes...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={fetchRecipes}>Try Again</button>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to RecipeBook</h1>
        <p>Discover and share amazing recipes from around the world</p>
        <Link to="/create" className="cta-button">
          Share Your Recipe
        </Link>
      </div>

      <div className="recipes-section">
        <h2>All Recipes ({recipes.length})</h2>
        
        {recipes.length === 0 ? (
          <div className="empty-state">
            <h3>No recipes yet!</h3>
            <p>Be the first to share a delicious recipe.</p>
            <Link to="/create" className="create-first">
              Create First Recipe
            </Link>
          </div>
        ) : (
          <div className="recipes-grid">
            {recipes.map(recipe => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home