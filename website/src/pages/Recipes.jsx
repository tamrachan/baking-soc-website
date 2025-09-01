import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Recipes.css";
import recipes from "../constants/recipes.json";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div id="recipes" className="recipes-section">
            <h2 className="recipes-title">Our Recipe Collection</h2>
            <p className="recipes-subtitle">Find your next favorite bake. Search for recipes below.</p>

            <form onSubmit={e => e.preventDefault()} className="search-form">
                <input
                    type="text"
                    placeholder="e.g., Chocolate Cake, Sourdough..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>

            <div className="recipes-grid">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.title} className="recipe-card">
                            
                            <img src={recipe.image} alt={`A photo of ${recipe.title}`} className="recipe-card-image" />
                            <div className="recipe-card-content">
                                <h3>{recipe.title}</h3>
                                <div className="recipe-details">
                                    <p><strong>Time: </strong>{recipe.time}</p>
                                    <p><strong>Allergens: </strong>{recipe.allergens}</p>
                                </div>
                                <Link to={`/recipe/${encodeURIComponent(recipe.title)}`} className="view-recipe-button">
                                    View Recipe
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results-message">No recipes found. Try a different search!</p>
                )}
            </div>
        </div>
    );
}

export default Recipes;
