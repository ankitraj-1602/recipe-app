import React from "react";
import cardStyle from "../recepiCard/recepiCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={cardStyle.recipeCard}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className={cardStyle.recipeImage}
      />
      <h3 className={cardStyle.recipeTitle}>{recipe.strMeal}</h3>
      <a
        href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cardStyle.recipeLink}
      >
        View Recipe
      </a>
    </div>
  );
};

export default React.memo(RecipeCard);
