import React, { useState } from "react";

import { Button, Input, Divider } from '@chakra-ui/react'

import {
  getNextPageSearchRecipeResults,
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

  const [inputValue, setInputValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>();

  const handleChangeSearchResults = (result: RecipeSearchResults) => {
    const { nextPageUrl, recipes }: { recipes: Recipe[]; nextPageUrl: string } =
      result;
    setRecipes(recipes);
    setNextPageUrl(nextPageUrl);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: RecipeSearchResults = await getSearchRecipeResults(
      inputValue
    );
    handleChangeSearchResults(result);
  };

  const handleLoadMoreRecipes = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const result: RecipeSearchResults = await getNextPageSearchRecipeResults(
      nextPageUrl
    );
    handleChangeSearchResults(result);
  }


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
      {recipes && <RecipeList recipeList={recipes} />}
      {nextPageUrl && <Button colorScheme='blue' size='lg' margin='0.2rem auto' marginTop='2rem' display='block'
      className="btn btn-next-page recipe-list__btn" onClick={handleLoadMoreRecipes}>
        Show more 
      </Button>}
    </>
  );
};

export default SearchRecipe;
