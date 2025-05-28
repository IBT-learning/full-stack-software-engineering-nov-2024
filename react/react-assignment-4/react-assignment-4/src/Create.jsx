import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import './Create.css';

const CreateRecipe = () => {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: ['']
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = value;
        setRecipe(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };

    const addIngredient = () => {
        setRecipe(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, '']
        }));
    };

    const removeIngredient = (index) => {
        if (recipe.ingredients.length > 1) {
            const newIngredients = [...recipe.ingredients];
            newIngredients.splice(index, 1);
            setRecipe(prev => ({
                ...prev,
                ingredients: newIngredients
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createRecipe();
        // Here you would typically make an API call to save the recipe
        // console.log('Recipe to create:', recipe);
        // navigate('/'); // Redirect after creation
    };


    const createRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:4000/posts/publish`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: recipe.title,
                    ingredients: recipe.ingredients,
                    description: recipe.description,
                })
            });

            const result =await response.json();
            console.log(result);
            // navigate(-1); // Go back after saving

        } catch (err) {
            // setError(err.message);
            console.error("Fetch error:", err.message);
        }

    };


    return (
        <div className="create-recipe-container">
            <header className="create-recipe-header">
                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                >
                    <IoMdArrowRoundBack size={24} />
                </button>
                <h1>Create New Recipe</h1>
            </header>

            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label htmlFor="title">Recipe Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={recipe.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter recipe title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={recipe.description}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe your recipe..."
                    />
                </div>

                <div className="form-group">
                    <label>Ingredients</label>
                    <div className="ingredients-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <div key={index} className="ingredient-item">
                                <input
                                    type="text"
                                    value={ingredient}
                                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                                    placeholder={`Ingredient ${index + 1}`}
                                    required
                                />
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => removeIngredient(index)}
                                    disabled={recipe.ingredients.length <= 1}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="add-btn"
                            onClick={addIngredient}
                        >
                            + Add Ingredient
                        </button>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                    <button type="submit" className="save-btn">
                        Create Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateRecipe;