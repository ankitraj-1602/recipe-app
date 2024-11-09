import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "../recepiCard/RecepiCard";
import style from "./recepiApp.module.css";

const RecipeApp = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );

      if (response.data.meals) {
        setRecipes(response.data.meals);
        setError(null);
      } else {
        setRecipes([]);
        setError("No recipes found for that ingredient.");
      }
    } catch (err) {
      setError("There was an error fetching the recipes. Please try again.");
      setRecipes([]);
    }
  };

  const handleSearch = () => {
    if (!ingredient || ingredient.length < 2) {
      setError("Please enter at least 2 characters to search for recipes.");
      setRecipes([]);
    } else {
      fetchRecipes();
    }
  };

  return (
    <div className={style.appContainer}>
      <h1>Recipe App</h1>
      <div className={style.searchBar}>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Search ingredients..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className={style.errorMessage}>{error}</p>}

      <div className={style.recipeGrid}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecipeApp);
