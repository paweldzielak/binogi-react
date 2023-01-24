import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  BookmarkActionKind,
  userDataReducer,
} from "../reducers/userDataReducer";
import { Recipe } from "../types/types";

export type RecipeContextState = {
  bookmarkedRecipes: Recipe[];
  handleBookmarked: (recipe: Recipe) => void;
};

export const contextDefaultValues: RecipeContextState = {
  bookmarkedRecipes: [],
  handleBookmarked: () => {},
};

export const UserDataContext =
  createContext<RecipeContextState>(contextDefaultValues);

export const UserDataProvider = ({children }: { children: JSX.Element | JSX.Element[]; }) => {
  const [bookmarkedRecipes, setBookmarkedRecipesIds] = useLocalStorage(
    "bookmarkedRecipes",
    contextDefaultValues.bookmarkedRecipes
  );

  const [currentBookmarkedRecipeIds, dispatch] = useReducer(
    userDataReducer,
    bookmarkedRecipes || []
  );

  const handleBookmarked = (recipe: Recipe) => {
    const type = bookmarkedRecipes?.includes(recipe)
      ? BookmarkActionKind.REMOVE_BOOKMARKED_RECIPE
      : BookmarkActionKind.ADD_BOOKMARKED_RECIPE;
    dispatch({ type, payload: recipe });
  };

  useEffect(() => {
    setBookmarkedRecipesIds(currentBookmarkedRecipeIds);
  }, [currentBookmarkedRecipeIds, setBookmarkedRecipesIds]);

  return (
    <UserDataContext.Provider
      value={{
        bookmarkedRecipes: bookmarkedRecipes || [],
        handleBookmarked: handleBookmarked,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
