import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipes from '../constants/recipes.json';
import '../css/RecipeDetail.css';

function RecipeDetail() {
    const { title } = useParams();
    const navigate = useNavigate();
    const recipe = recipes.find(r => r.title === decodeURIComponent(title));

    if (!recipe) {
        return <div className="recipe-not-found">Recipe not found!</div>;
    }

    // This helper function handles the two different structures for ingredients in your JSON data.
    const renderIngredients = () => {
        // If ingredients is a simple array of strings
        if (Array.isArray(recipe.ingredients)) {
            return (
                <ul>
                    {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                </ul>
            );
        }
        // If ingredients is an object with categories (like "batter", "frosting")
        return Object.entries(recipe.ingredients).map(([category, items]) => (
            <div key={category} className="ingredient-category">
                {/* Capitalize the category title */}
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        ));
    };

    return (
        <div className="recipe-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Back to Recipes
            </button>

             <h1 className="recipe-detail-title">{recipe.title}</h1>
            <img src={import.meta.env.BASE_URL + recipe.image} alt={`A photo of ${recipe.title}`} className="recipe-detail-image" />
            
            <div className="recipe-content">
                <div className="ingredients-section">
                    <h2>Ingredients</h2>
                    {renderIngredients()}
                </div>
                <div className="instructions-section">
                    <h2>Instructions</h2>
                    <ol>
                        {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
                    </ol>
                </div>
            </div>

            <div className="recipe-footer">
                <p><strong>Source:</strong> {recipe.source}</p>
                <p><strong>Last Updated:</strong> {recipe.updated}</p>
            </div>
        </div>
    );
}

export default RecipeDetail;