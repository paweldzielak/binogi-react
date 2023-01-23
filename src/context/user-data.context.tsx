import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  BookmarkActionKind,
  userDataReducer,
} from "../reducers/userDataReducer";

export type RecipeContextState = {
  bookmarkedRecipesIds: string[];
  handleBookmarkedId: (id: string) => void;
};

export const contextDefaultValues: RecipeContextState = {
  bookmarkedRecipesIds: [],
  handleBookmarkedId: () => {},
};

export const UserDataContext =
  createContext<RecipeContextState>(contextDefaultValues);

export const UserDataProvider = ({children }: { children: JSX.Element | JSX.Element[]; }) => {
  const [bookmarkedRecipesIds, setBookmarkedRecipesIds] = useLocalStorage(
    "bookmarkedRecipesIds",
    contextDefaultValues.bookmarkedRecipesIds
  );

  const [currentBookmarkedRecipeIds, dispatch] = useReducer(
    userDataReducer,
    bookmarkedRecipesIds || []
  );

  const handleBookmarkedId = (recipeId: string) => {
    const type = bookmarkedRecipesIds?.includes(recipeId)
      ? BookmarkActionKind.REMOVE_BOOKMARKED_RECIPE
      : BookmarkActionKind.ADD_BOOKMARKED_RECIPE;
    dispatch({ type, payload: recipeId });
  };

  useEffect(() => {
    setBookmarkedRecipesIds(currentBookmarkedRecipeIds);
  }, [currentBookmarkedRecipeIds, setBookmarkedRecipesIds]);

  return (
    <UserDataContext.Provider
      value={{
        bookmarkedRecipesIds: currentBookmarkedRecipeIds,
        handleBookmarkedId: handleBookmarkedId,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
