import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
      <p>Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
    </div>
  );
}

export default RecipeCard;
