import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create(){
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ingredients: '',
    instructions: ''
  });

  const [isSubmitting, setIsSubmiting] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

    const handleSubmit = async (event) => {
      event.preventDefault(); // prevents the default form submission to avoid page reload
      setIsSubmiting(true);
      setError('');

      try{
        // converting the comma separated list to an array
        const ingredientsArray = formData.ingredients.split(',').map((ingredient) => ingredient.trim()).filter((ingredient) => ingredient.length > 0);

        const reqBody = {
          title: formData.title,
          author: formData.author,
          ingredients: ingredientsArray,
          instructions: formData.instructions
        }

        const res = await fetch('http://localhost:3005/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqBody)
        })
        if (!res.ok){
          throw new Error(`HTTP error status: ${res.status}`);
        }

        const newRecipe = await res.json();
        console.log('Recipe created: ', newRecipe);

        navigate(`/${newRecipe._id}`);

      }catch(err){
        console.error('Error creating recipe: ', err);
        setError(err.message);
      }finally{
        setIsSubmiting(false);
      }
    }

  return <>
    <div className="create-wrapper">
      <h2>Create Recipe</h2>

      {error ? (
        <div className="error-message">
          Error: {error}
        </div>
      ): null}

    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="title">Recipe Title </label>
        <input 
          type="text"
          id="title"
          name="title"
          value={formData.title} // 2 way binding
          onChange={handleInputChange}
          required
          minLength={3}
          maxLength={100}
        />
      </section>

      <section>
        <label htmlFor="author">Author </label>
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
        <label htmlFor="ingredients">Ingredients (comma-separated)</label>
        <textarea 
          name="ingredients" 
          id="ingredients" 
          value={formData.ingredients}
          onChange={handleInputChange}
          placeholder="ingredient 1, ingredient 2, ingredient 3..."
          required
          rows={4}
        />
        <p>* Enter ingredients separated by commas</p>
      </section>

      <section>
        <label htmlFor="instructions">Instructions</label>
        <textarea 
          name="instructions" 
          id="instructions" 
          value={formData.instructions}
          onChange={handleInputChange}
          placeholder="Describe the cooking steps..."
          required
          rows={4}
        />
      </section>

      <button type="submit" className="btn" disabled={isSubmitting}>
        Create Recipe
      </button>
     
    </form>
    </div>
  </>
}

export default Create;