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
                        ♡
                    </button>
                </div>
            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <p>{recipe.release_date}</p>
                <p>{recipe.author}</p>
            </div>
        </div>
    )
}

export default RecipeCard;