import React from "react"
import { Recipe } from '../../types/types'
import RecipeCard from "../recipe-card/RecipeCard";

import "./recipeList.styles.scss";

interface props {
  recipeList: Recipe[]
}

const RecipeList: React.FC<props> = ({ recipeList }) => {

  return (
    <div className="recipe-list">
      {recipeList.map((recipe: Recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })}
    </div>
  );
}


export default RecipeList;