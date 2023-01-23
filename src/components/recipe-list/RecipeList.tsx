import React, { useContext } from "react"
import { UserDataContext } from "../../context/user-data.context";
import { Recipe } from '../../types/types'
import RecipeCard from "../recipe-card/RecipeCard";

import "./recipeList.styles.scss";

interface props {
  recipeList: Recipe[]
}

const RecipeList: React.FC<props> = ({ recipeList }) => {

  const { bookmarkedRecipesIds, handleBookmarkedId } = useContext(UserDataContext);

  return (
    <div className="recipe-list">
      {recipeList.map((recipe: Recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} bookmarkedRecipesIds={bookmarkedRecipesIds} handleBookmarkedId={handleBookmarkedId} />
      })}
    </div>
  );
}


export default RecipeList;