import { useState } from "react";
import "../css/Recipes.css";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");

    const recipes = [
        {id: 1, title: "Matcha Brownies", time: "30 mins", allergens: "gluten-free, nut-free", updated: "27/08/2025", source: "Anonymous"},
        {id: 2, title: "Chocolate Brownies", time: "45 mins", allergens: "gluten-free, nut-free", updated: "27/08/2025", source: "Baking Soc"},
        {id: 3, title: "Butter Cookies", time: "30 mins", allergens: "gluten-free, egg-free, dairy-free", updated: "27/08/2025", source: "Baking Soc"},
        {id: 4, title: "Baking Soc Cupcakes", time: "1hr 30 mins", allergens: "gluten-free, lactose-free, dairy-free", updated: "27/08/2025", source: "Baking Soc"}
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