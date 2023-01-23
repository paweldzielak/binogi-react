import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserDataContext } from "../../context/user-data.context";

import BookmarkedList from "../bookmarked-list/BookmarkedList";
import SearchRecipe from "../search/SearchRecipe";

import "./mainContent.scss";

const MainContent: React.FC = () => {
  return (
    <main className="content">
      <Routes>
        <Route
          path="/search"
          element={
            <SearchRecipe />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkedList />
          }
        />
      </Routes>
    </main>
  );
};

export default MainContent;
