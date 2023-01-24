import React from "react";
import { Recipe } from "../../types/types";
import RecipeCard from "../recipe-card/RecipeCard";

import "./recipeList.styles.scss";

interface props {
  recipeList: Recipe[];
  bookmarkedRecipes: Recipe[] | null;
  handleBookmarked: (recipe: Recipe) => void;
}

const RecipeList: React.FC<props> = ({
  recipeList,
  bookmarkedRecipes,
  handleBookmarked,
}) => {
  return (
    <div className="recipe-list">
      {recipeList.map((recipe: Recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            bookmarkedRecipes={bookmarkedRecipes}
            handleBookmarked={handleBookmarked}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
