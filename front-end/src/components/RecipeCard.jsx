import "../css/RecipeCard.css";

function RecipeCard({ recipe }) {

    function showRecipe() {
        alert(JSON.stringify(recipe, null, 2)); 
        // `null, 2` makes it pretty-printed
    }

    return (
        <div className="recipe-card">
            <div className="recipe-poster">
                <img 
                    src={recipe.image || "https://via.placeholder.com/300x200?text=Recipe"} 
                    alt={recipe.title}
                />
                <div className="recipe-overlay">
                    <button className="fav-btn" onClick={showRecipe}>
                        View recipe
                    </button>
                </div>
            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <h4>{recipe.time}</h4>
                <h4>{recipe.allergens}</h4>
                <p><strong>Last updated:</strong> {recipe.updated}</p>
                <p><strong>Source:</strong> {recipe.source}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
