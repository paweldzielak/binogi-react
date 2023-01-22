import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserDataContext } from "../../context/user-data.context";

import BookmarkedList from "../bookmarked-list/BookmarkedList";
import SearchRecipe from "../search/SearchRecipe";

import "./mainContent.scss";

const MainContent: React.FC = () => {
  const { bookmarkedRecipesIds, dispatch } = useContext(UserDataContext);

  const handleBookmarkedId = (recipeId: string) => {
    const type = bookmarkedRecipesIds?.includes(recipeId)
      ? "REMOVE_FAVORITE_MOVIE"
      : "ADD_FAVORITE_MOVIE";
    dispatch({ type, recipeId });
  };

  // console.log("bookmarkedRecipesIds", bookmarkedRecipesIds);

  return (
    <main className="content">
      <Routes>
        <Route
          path="/search"
          element={
            <SearchRecipe
              bookmarkedRecipesIds={bookmarkedRecipesIds}
              handleBookmarkedId={handleBookmarkedId}
            />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkedList
              bookmarkedRecipesIds={bookmarkedRecipesIds}
              handleBookmarkedId={handleBookmarkedId}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default MainContent;
