import { Button } from "@chakra-ui/react";
import React from "react"
import { Recipe } from '../../types/types'
import RecipeCard from "../recipe/RecipeCard";

import "./recipeList.styles.scss";

interface props {
  recipeList: Recipe[]
  nextPageUrl: string
}

const RecipeList: React.FC<props> = ({ recipeList, nextPageUrl }) => {

  const handleLoadMoreRecipes = () => {
    console.log('handleLoadMoreRecipes', nextPageUrl);
  }

  return (
    <div className="recipe-list">
      {recipeList.map((recipe: Recipe, idx) => {
        return <RecipeCard key={recipe.label + idx} recipe={recipe} />
      })}
      {nextPageUrl && <Button colorScheme='blue' size='lg' margin='0.2rem auto' marginTop='2rem' display='block'
      className="btn btn-next-page recipe-list__btn" onClick={handleLoadMoreRecipes}>
        Show more 
      </Button>}
    </div>
  );
}


export default RecipeList;