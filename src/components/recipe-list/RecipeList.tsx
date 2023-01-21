import React from "react"
import { Recipe } from "../../utils/recipe.utils";
import RecipeCard from "../recipe/RecipeCard";

interface props {
  recipeList: Recipe[]
}


const RecipeList: React.FC<props> = ({recipeList}) => {

  return (
    <div className="recipe-list">

    {recipeList.map((recipe:Recipe, idx) => {
        return <RecipeCard key={recipe.label + idx} recipe={recipe} />
      })}
    </div>
  );
}


export default RecipeList;