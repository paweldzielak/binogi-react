import React, { useState } from "react";

import { Button, Input, Divider } from '@chakra-ui/react'

import {
  getSearchRecipeResults,
} from "../../utils/recipe.utils";
import RecipeList from "../recipe-list/RecipeList";
import "./searchRecipe.scss";
import { Recipe, RecipeSearchResults } from "../../types/types";


interface props {
  handleBookmarkedId: Function
  bookmarkedRecipesIds: string[] | null
}

const SearchRecipe: React.FC<props> = ({bookmarkedRecipesIds, handleBookmarkedId}) => {
  // console.log('searchRecipe', handleBookmarkedId);

  const [inputValue, setInputValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: RecipeSearchResults = await getSearchRecipeResults(
      inputValue
    );
    const { nextPageUrl, recipes }: { recipes: Recipe[]; nextPageUrl: string } =
      result;

    setRecipes(recipes);
    setNextPageUrl(nextPageUrl);
  };

  return (
    <>
      <div className="search-recipe">
        <h3 className="search-recipe__title">Explore Recipes</h3>
        <form className="search-recipe__form" onSubmit={handleSubmit}>
          <Input
            className="search-recipe__input" size='lg'
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for a meal"
          />
          <Button colorScheme='blue' size='lg'
            className="btn btn-submit search-recipe__button"
            type="submit"
          >
            Search
          </Button>
        </form>
        <Divider width='90%' className="search-recipe__horizontal"/>
      </div>
      {recipes && <RecipeList {...{ recipeList: recipes, nextPageUrl: nextPageUrl }} />}
    </>
  );
};

export default SearchRecipe;
