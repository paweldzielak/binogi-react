import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Recipe } from "../../../types/types";

type Props = {
  handleFavourite: (recipe: Recipe) => void;
  recipe: Recipe;
  isFavourite: boolean;
};

const RecipeCardFavouriteButton = (props: Props) => {
  const { handleFavourite, recipe, isFavourite } = props;

  return (
    <IconButton
      title={isFavourite ? "Remove from your favourites" : "Add to favourites"}
      bg="transparent"
      fontSize="2rem"
      color={isFavourite ? "#dfa137" : "#3c3c3c"}
      opacity="0.7"
      _hover={{
        background: "transparent",
        opacity: "1",
      }}
      stroke='3c3c3c'
      
      marginLeft="0.75rem"
      marginTop="-0.75rem"
      onClick={() => handleFavourite(recipe)}
      aria-label="Search database"
      size="lg"
      icon={<StarIcon />}
    />
  );
};

export default RecipeCardFavouriteButton;
