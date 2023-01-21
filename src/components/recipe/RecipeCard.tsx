import React from "react";
import { Recipe } from "../../utils/recipe.utils";
import { TimeIcon } from "@chakra-ui/icons";

import "./recipe.styles.scss";

interface props {
  recipe: Recipe;
}

function getPreparationTimeElement(preparationTime: number) {
  if (preparationTime > 0) {
    return (
      <>
        <TimeIcon boxSize="2rem" />
        <p className="recipe-card__footer--time">{preparationTime}</p>
      </>
    );
  } else return null;
}

const RecipeCard: React.FC<props> = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <img className="recipe-container__image" src={recipe.imageUrl} alt="" />
      <div className="recipe-card">
        <div className="recipe-card__content">
          <p className="recipe-card__content--meal-type">{recipe.mealType}</p>
          <p className="recipe-card__content--title">{recipe.label}</p>
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
