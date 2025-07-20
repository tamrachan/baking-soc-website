import { useState } from "react";
import "../css/Recipes.css";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");

    const recipes = [
        {id: 1, title: "Matcha Brownies", description: "Step 1:...", release_date: "2020", author: "bob"},
        {id: 2, title: "Chocolate cake", description: "Step 1:...", release_date: "2020", author: "bob"},
        {id: 3, title: "Fudge", description: "Step 1:...", release_date: "2020", author: "bob"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);

        // // Set state after search
        // setSearchQuery("---------");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for recipes..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="recipes-grid">
            {recipes.map(recipe => (
                // search query
                recipe.title.toLowerCase().startsWith(searchQuery) && (<RecipeCard recipe={recipe} key={recipe.id} />
        )))}
        </div>
    </div>
}

export default Recipes;