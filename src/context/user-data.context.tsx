import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { Recipe } from "../types/types";


export type RecipeContextState = {
  bookmarkedRecipes: Recipe[] | null;
  setBookmarkedRecipes: (value: Recipe[] | null) => void;
};

export const contextDefaultValues: RecipeContextState = {
  bookmarkedRecipes: [],
  setBookmarkedRecipes: () => {},
};

export const UserDataContext = createContext<RecipeContextState>(contextDefaultValues);

export const UserDataProvider = ({ children } : { children: JSX.Element | JSX.Element[] }) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useLocalStorage('bookmarkedRecipes', contextDefaultValues.bookmarkedRecipes)

  useEffect(() => {
    setBookmarkedRecipes(bookmarkedRecipes);
  }, [bookmarkedRecipes, setBookmarkedRecipes]);

  return (
    <UserDataContext.Provider value={{ bookmarkedRecipes, setBookmarkedRecipes }}>
      {children}
    </UserDataContext.Provider>
  );
};  