import { useState } from "react";
import "../css/Recipes.css";
import RecipeCard from "../components/RecipeCard";
import recipes from "../recipes/recipes.json";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for recipes..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="recipes-grid">
                {recipes.map(recipe => (
                    recipe.title.toLowerCase().startsWith(searchQuery) && (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    )
                ))}
            </div>
        </div>
    );
}

export default Recipes;
