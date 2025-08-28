import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import DynamicIngredients from '../components/DynamicIngredients'
import './RecipeForm.css'

function Create() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [],
    instructions: '',
    prepTime: '',
    servings: '',
    difficulty: 'Medium'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleIngredientsChange = (ingredients) => {
    setFormData(prev => ({
      ...prev,
      ingredients
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || formData.ingredients.length === 0 || !formData.instructions.trim()) {
      alert('Please fill in all required fields (Title, Ingredients, Instructions)')
      return
    }

    try {
      setLoading(true)
      const newRecipe = await api.createRecipe({
        ...formData,
        prepTime: parseInt(formData.prepTime) || 30,
        servings: parseInt(formData.servings) || 4
      })
      navigate(`/recipe/${newRecipe._id}`)
    } catch (err) {
      alert('Failed to create recipe. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="recipe-form">
      <h1>Create New Recipe</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter recipe title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Brief description of your recipe"
            rows="3"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="prepTime">Prep Time (minutes)</label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleInputChange}
              placeholder="30"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleInputChange}
              placeholder="4"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <DynamicIngredients 
          ingredients={formData.ingredients}
          onChange={handleIngredientsChange}
        />

        <div className="form-group">
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            placeholder="Step-by-step cooking instructions..."
            rows="8"
            required
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate('/')}
            className="cancel-button"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Creating...' : 'Create Recipe'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create