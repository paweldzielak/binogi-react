import React, { useContext } from "react";
import { TimeIcon } from "@chakra-ui/icons";

import "./recipe.styles.scss";
import { Recipe } from "../../types/types";
import RecipeCardFavouriteButton from "./recipe-card-favourite-button/RecipeCardFavouriteButton";

interface props {
  recipe: Recipe;
  bookmarkedRecipesIds: string[] | null;
  handleBookmarkedId: (id: string) => void;
}

function getPreparationTimeElement(preparationTime: number) {
  if (preparationTime <= 0) return null;
  return (
    <>
      <TimeIcon boxSize="2rem" />
      <p className="recipe-card__footer--time">{preparationTime}</p>
    </>
  );
}

const RecipeCard: React.FC<props> = ({
  recipe,
  handleBookmarkedId,
  bookmarkedRecipesIds,
}) => {
  const getIsFavourite = (id: string): boolean => {
    return bookmarkedRecipesIds !== null && bookmarkedRecipesIds.includes(id);
  };

  return (
    <div className="recipe-container">
      <img className="recipe-container__image" src={recipe.imageUrl} alt="" />
      <div className="recipe-card">
        <div className="recipe-card__content">
          <p className="recipe-card__content--meal-type">{recipe.mealType}</p>
          <p className="recipe-card__content--title">
            {recipe.label}
            <RecipeCardFavouriteButton
              handleFavourite={handleBookmarkedId}
              recipeId={recipe.id}
              isFavourite={getIsFavourite(recipe.id)}
            />
          </p>
          <p className="recipe-card__content--diet-container">
            {recipe.dietLabels.map((dietLabel: string) => {
              return (
                <span key={recipe.label + dietLabel} className="diet">
                  {` ${dietLabel}`}
                </span>
              );
            })}
          </p>
        </div>
        <div className="recipe-card__footer">
          {getPreparationTimeElement(recipe.totalTime)}
          <p className="recipe-card__footer--calories">{recipe.calories}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
