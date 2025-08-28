import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import DynamicIngredients from '../components/DynamicIngredients'
import './RecipeForm.css'

function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [],
    instructions: '',
    prepTime: '',
    servings: '',
    difficulty: 'Medium'
  })

  useEffect(() => {
    fetchRecipe()
  }, [id])

  const fetchRecipe = async () => {
    try {
      const recipe = await api.getRecipe(id)
      setFormData({
        title: recipe.title || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients || [],
        instructions: recipe.instructions || '',
        prepTime: recipe.prepTime?.toString() || '',
        servings: recipe.servings?.toString() || '',
        difficulty: recipe.difficulty || 'Medium'
      })
    } catch (err) {
      alert('Failed to load recipe')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

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
      alert('Please fill in all required fields')
      return
    }

    try {
      setSaving(true)
      await api.updateRecipe(id, {
        ...formData,
        prepTime: parseInt(formData.prepTime) || 30,
        servings: parseInt(formData.servings) || 4
      })
      navigate(`/recipe/${id}`)
    } catch (err) {
      alert('Failed to update recipe. Please try again.')
    } finally {
      setSaving(false)
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

  return (
    <div className="recipe-form">
      <h1>Edit Recipe</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
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
            rows="8"
            required
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate(`/recipe/${id}`)}
            className="cancel-button"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={handleDelete}
            className="delete-button"
          >
            Delete Recipe
          </button>
          <button 
            type="submit" 
            disabled={saving}
            className="submit-button"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit