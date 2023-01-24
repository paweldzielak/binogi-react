import { Divider } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserDataContext } from "../../context/user-data.context";
import RecipeList from "../recipe-list/RecipeList";
import "./bookmarkedList.scss";

const BookmarkedList: React.FC = () => {
  const { bookmarkedRecipes, handleBookmarked } = useContext(UserDataContext);

  return (
    <div className="bookmarked__list">
    <h3 className="bookmarked__list__title">Your favourite recipes ({bookmarkedRecipes.length})</h3>
    <Divider width="90%" className="bookmarked__list__horizontal" />
      {bookmarkedRecipes && (
        <RecipeList
          recipeList={bookmarkedRecipes}
          bookmarkedRecipes={bookmarkedRecipes}
          handleBookmarked={handleBookmarked}
        />
      )}
    </div>
  );
};

export default BookmarkedList;
