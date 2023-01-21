import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { userDataReducer } from "../reducers/userDataReducer";

export type RecipeContextState = {
  bookmarkedRecipesIds: string[] | null;
  dispatch: React.Dispatch<any>;
};

export const contextDefaultValues: RecipeContextState = {
  bookmarkedRecipesIds: [],
  dispatch: () => {},
};

export const UserDataContext = createContext<RecipeContextState>(contextDefaultValues);

export const UserDataProvider = ({ children } : { children: JSX.Element | JSX.Element[] }) => {
  const [bookmarkedRecipesIds, setBookmarkedRecipesIds] = useLocalStorage('bookmarkedRecipesIds', contextDefaultValues.bookmarkedRecipesIds)

  const [currentBookmarkedRecipeIds, dispatch] = useReducer(
    userDataReducer, [], () => []
  );


  useEffect(() => {
    setBookmarkedRecipesIds(currentBookmarkedRecipeIds);
  }, [currentBookmarkedRecipeIds, setBookmarkedRecipesIds]);

  return (
    <UserDataContext.Provider value={{ bookmarkedRecipesIds: currentBookmarkedRecipeIds, 
    dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};  