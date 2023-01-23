import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  handleFavourite: (recipeId: string) => void;
  recipeId: string;
  isFavourite: boolean;
};

const RecipeCardFavouriteButton = (props: Props) => {
  const { handleFavourite, recipeId, isFavourite } = props;

  return (
    <IconButton
      title="Accept requested meeting."
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
      onClick={() => handleFavourite(recipeId)}
      aria-label="Search database"
      size="lg"
      icon={<StarIcon />}
    />
  );
};

export default RecipeCardFavouriteButton;
