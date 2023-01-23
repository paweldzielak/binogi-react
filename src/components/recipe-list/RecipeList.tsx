import { Button } from "@chakra-ui/react";
import React from "react"
import { Recipe } from '../../types/types'
import RecipeCard from "../recipe/RecipeCard";

import "./recipeList.styles.scss";

interface props {
  recipeList: Recipe[]
}

const RecipeList: React.FC<props> = ({ recipeList }) => {

  return (
    <div className="recipe-list">
      {recipeList.map((recipe: Recipe, idx) => {
        return <RecipeCard key={recipe.label + idx} recipe={recipe} />
      })}
    </div>
  );
}


export default RecipeList;