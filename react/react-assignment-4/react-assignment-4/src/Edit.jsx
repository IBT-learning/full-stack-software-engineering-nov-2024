import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";
import './Edit.css';

const Edit = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: ['']
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (state?.recipe) {
            setRecipe({
                title: state.recipe.title || '',
                description: state.recipe.description || '',
                ingredients: state.recipe.ingredients?.length > 0
                    ? [...state.recipe.ingredients]
                    : ['']
            });
        }
        setLoading(false);
    }, [state]);

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
        try {
            // Add your API call to save the recipe here
            console.log('Recipe to save:', recipe);
            if (recipe.ingredients.length <= 4) {
                alert("Ingredient too short, but proceeding with saving item")
            } else if (recipe.description.length <= 20) {
                alert("Ingredient too short, but proceeding with saving item")
            }
           await updateRecipe()
        } catch (err) {
            setError(err.message);
            console.error("Save error:", err.message);
        }
    };


        const updateRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:4000/posts/${state.article._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        titles: recipe.title,
                        ingredientItems: recipe.ingredients,
                        descriptions: recipe.description,
                    })
                });

                const result =await response.json();
                // console.log(result);
            navigate("/"); // Go back after saving

            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err.message);
            }

        };


    const deleteRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:4000/posts/${state.article._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result =await response.json();

            alert(result.message);
            navigate("/"); // Go back after saving

        } catch (err) {
            setError(err.message);
            console.error("Fetch error:", err.message);
        }

    };


    if (loading) {
        return (
            <div className="edit-recipe-container">
                <div className="loading-spinner">Loading recipe...</div>
            </div>
        );
    }

    return (
        <div className="edit-recipe-container">
            <header className="edit-recipe-header">
                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                >
                    <IoMdArrowRoundBack size={24} />
                </button>
                <h1>{state?.recipe ? 'Edit Recipe' : 'Create New Recipe'}</h1>
            </header>

            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={recipe.title}
                        onChange={handleChange}
                        required
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

                {error && <div className="error-message">{error}</div>}

                <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={deleteRecipe}>
                        Delete
                    </button>
                    <button type="submit" className="save-btn">
                        Save Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;