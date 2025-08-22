import { useState } from 'react'
import './DynamicIngredients.css'

function DynamicIngredients({ ingredients, onChange }) {
  const [ingredientList, setIngredientList] = useState(
    ingredients.length > 0 ? ingredients : ['']
  )

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredientList]
    newIngredients[index] = value
    setIngredientList(newIngredients)
    
    // Filter out empty ingredients before passing to parent
    const filteredIngredients = newIngredients.filter(ing => ing.trim() !== '')
    onChange(filteredIngredients)
  }

  const addIngredient = () => {
    const newIngredients = [...ingredientList, '']
    setIngredientList(newIngredients)
  }

  const removeIngredient = (index) => {
    if (ingredientList.length > 1) {
      const newIngredients = ingredientList.filter((_, i) => i !== index)
      setIngredientList(newIngredients)
      
      const filteredIngredients = newIngredients.filter(ing => ing.trim() !== '')
      onChange(filteredIngredients)
    }
  }

  return (
    <div className="dynamic-ingredients">
      <label className="form-label">Ingredients:</label>
      {ingredientList.map((ingredient, index) => (
        <div key={index} className="ingredient-row">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Ingredient ${index + 1}`}
            className="ingredient-input"
          />
          {ingredientList.length > 1 && (
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="remove-ingredient"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addIngredient}
        className="add-ingredient"
      >
        + Add Ingredient
      </button>
    </div>
  )
}

export default DynamicIngredients