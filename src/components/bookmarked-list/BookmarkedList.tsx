import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/user-data.context";
import { Recipe } from "../../types/types";
import { getBookmarkedRecipes } from "../../utils/recipe.utils";
import RecipeList from "../recipe-list/RecipeList";
import "./bookmarkedList.scss";

const BookmarkedList: React.FC = () => {
  const defaultBookmarkedRecipes: Recipe[] = [];

  const { bookmarkedRecipesIds, handleBookmarkedId } =
    useContext(UserDataContext);
  const [recipes, setRecipes] = useState(defaultBookmarkedRecipes);

  useEffect(() => {
    getBookmarkedRecipes(bookmarkedRecipesIds).then(
      ({ recipes, nextPageUrl }) => {
        setRecipes(recipes);
      }
    );
  }, [bookmarkedRecipesIds]);

  return (
    <div className="bookmarked-list">
      {recipes && (
        <RecipeList
          recipeList={recipes}
          bookmarkedRecipesIds={bookmarkedRecipesIds}
          handleBookmarkedId={handleBookmarkedId}
        />
      )}
    </div>
  );
};

export default BookmarkedList;
