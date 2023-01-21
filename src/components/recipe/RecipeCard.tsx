import React from "react"
import { Recipe } from "../../utils/recipe.utils"

interface props {
  recipe: Recipe
}

const RecipeCard: React.FC<props> = ({recipe}) => {
  return (
    <p className="test">{recipe.label}</p>
  );
}

export default RecipeCard;
