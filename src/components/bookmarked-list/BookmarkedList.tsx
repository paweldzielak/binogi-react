import React from "react";
import "./bookmarkedList.scss";

interface props {
  handleBookmarkedId: Function
  bookmarkedRecipesIds: string[] | null
}

const BookmarkedList:React.FC<props> = ({bookmarkedRecipesIds, handleBookmarkedId}) => {
  return (
    <div className="bookmarked-list">
      <h1>Bookmarked TEST</h1>
    </div>
  );
};

export default BookmarkedList;
