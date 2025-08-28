const API_BASE = 'http://localhost:3000' // Backend server URL

export const api = {
  // Get all recipes
  getAllRecipes: async () => {
    const response = await fetch(`${API_BASE}/recipes`)
    if (!response.ok) throw new Error('Failed to fetch recipes')
    const result = await response.json()
    return result.data || []
  },

  // Get single recipe
  getRecipe: async (id) => {
    const response = await fetch(`${API_BASE}/recipes/${id}`)
    if (!response.ok) throw new Error('Failed to fetch recipe')
    const result = await response.json()
    return result.data || {}
  },

  // Create new recipe
  createRecipe: async (recipeData) => {
    const response = await fetch(`${API_BASE}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData)
    })
    if (!response.ok) throw new Error('Failed to create recipe')
    const result = await response.json()
    return result.data || {}
  },

  // Update recipe
  updateRecipe: async (id, recipeData) => {
    const response = await fetch(`${API_BASE}/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData)
    })
    if (!response.ok) throw new Error('Failed to update recipe')
    const result = await response.json()
    return result.data || {}
  },

  // Delete recipe
  deleteRecipe: async (id) => {
    const response = await fetch(`${API_BASE}/recipes/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete recipe')
    const result = await response.json()
    return result.data || {}
  }
}