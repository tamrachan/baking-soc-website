import "../css/RecipeCard.css";

function RecipeCard({recipe}) {

    function onFavClick({recipe}) {
        alert("clicked");
    }

    return (
        <div className="recipe-card">
            <div className="recipe-poster">
                <img src={moveBy.url} alt={recipe.title}/>
                <div className="recipe-overlay">
                    <button className="fav-btn" onClick={onFavClick}>
                        View recipe
                    </button>
                </div>
            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <h4>{recipe.time}</h4>
                <h4>{recipe.allegens}</h4>
                <p>{recipe.updated}</p>
                <p>{recipe.source}</p>
            </div>
        </div>
    )
}

export default RecipeCard;