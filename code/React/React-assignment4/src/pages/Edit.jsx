import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ingredients: '',
    instructions: ''
  });

  // const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { id: recipeId } = useParams();
  const navigate = useNavigate();

 useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:3005/recipes/find/${recipeId}`);
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const recipe = await res.json();
        
        // Convert ingredients array back to comma-separated string for editing
        const ingredientsString = recipe.ingredients.join(', ');
        
        setFormData({
          title: recipe.title,
          author: recipe.author,
          ingredients: ingredientsString,
          instructions: recipe.instructions
        });
        
      } catch (err) {
        console.error('Failed to fetch recipe for editing:', err);
        setError('Failed to load recipe for editing');
      }
    };

    fetchRecipe();
  }, [recipeId]);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Convert comma-separated ingredients string to array
      const ingredientsArray = formData.ingredients
        .split(',')
        .map(ingredient => ingredient.trim())
        .filter(ingredient => ingredient.length > 0);

      const requestBody = {
        title: formData.title,
        author: formData.author,
        ingredients: ingredientsArray,
        instructions: formData.instructions
      };

      const response = await fetch(`http://localhost:3005/recipes/update/${recipeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.Error || 'Failed to update recipe');
      }

      console.log('Recipe updated successfully');
      
      // Navigate back to the recipe detail page
      navigate(`/${recipeId}`);
      
    } catch (err) {
      console.error('Error updating recipe:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this recipe? This action cannot be undone.'
    );
    
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3005/recipes/delete/${recipeId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.Error || 'Failed to delete recipe');
      }

      console.log('Recipe deleted successfully');
      
      // Navigate back to home page after successful deletion
      navigate('/');
      
    } catch (err) {
      console.error('Error deleting recipe:', err);
      setError(err.message);
    }
  };

  return <>
   <div className="create-wrapper">
    <h2>Edit Recipe</h2>

    {error ? (
      <div className="error-message">
        Error: {error}
      </div>
    ): null}

    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            minLength={3}
            maxLength={100}
          />
      </section>

      <section>
        <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
            minLength={2}
            maxLength={60}
          />
      </section>

      <section>
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            placeholder="flour, sugar, eggs, butter..."
            required
            rows={4}
          />
          <p>* Enter ingredients separated by commas</p>
      </section>

      <section>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            required
            rows={6}
            placeholder="Describe the cooking steps..."
          />
      </section>

      <div className="btn-group">
        <button type="submit" className="btn" disabled={isSubmitting}>
          Update Recipe
        </button>

        <button type="button" className="cancel-btn" onClick={() => navigate(`/${recipeId}`)}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete} className="delete-btn">
          Delete Recipe
        </button>
      </div>
    </form>
   </div>
  </>
}

export default Edit;