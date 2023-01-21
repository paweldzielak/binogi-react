import React from "react";
import { Route, Routes } from "react-router-dom";

import BookmarkedList from "../bookmarked-list/BookmarkedList.component";
import SearchRecipe from "../search/SearchRecipe.component";

import "./mainContent.scss";

const MainContent:React.FC = () => {
  return (
    <main className="content">
        <Routes>
          <Route path="/search" element={<SearchRecipe />} />
          <Route path="/bookmarked" element={<BookmarkedList />} />
        </Routes>
    </main>
  );
};

export default MainContent;
