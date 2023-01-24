import React, { useContext, useState } from "react";

import { Button, Input, Divider } from "@chakra-ui/react";

import {
  getNextPageSearchRecipeResults,
  getSearchRecipeResults,
} from "../../utils/recipe.utils";
import RecipeList from "../recipe-list/RecipeList";
import "./searchRecipe.scss";
import { Recipe, RecipeSearchResults } from "../../types/types";
import { UserDataContext } from "../../context/user-data.context";

const SearchRecipe: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>();
  const { bookmarkedRecipes, handleBookmarked } = useContext(UserDataContext);

  const handleChangeSearchResults = (result: RecipeSearchResults) => {
    const { nextPageUrl, recipes }: { recipes: Recipe[]; nextPageUrl: string } =
      result;
    setRecipes(recipes);
    setNextPageUrl(nextPageUrl);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: RecipeSearchResults = await getSearchRecipeResults(
      inputValue
    );
    handleChangeSearchResults(result);
  };

  const handleLoadMoreRecipes = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const result: RecipeSearchResults = await getNextPageSearchRecipeResults(
      nextPageUrl
    );
    handleChangeSearchResults(result);
  };

  return (
    <>
      <div className="search-recipe">
        <h3 className="search-recipe__title">Explore Recipes</h3>
        <form className="search-recipe__form" onSubmit={handleSubmit}>
          <Input
            className="search-recipe__input"
            size="lg"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for a meal"
            fontSize={'2rem'}
            padding='1.5rem'
            height='3rem'
          />
          <Button
            colorScheme="blue"
            size="lg"
            type="submit"
            className="btn btn-submit search-recipe__button"
            fontSize='1.5rem'
          >
            Search
          </Button>
        </form>
        <Divider width="90%" className="search-recipe__horizontal" />
      </div>
      {recipes && (
        <RecipeList
          recipeList={recipes}
          bookmarkedRecipes={bookmarkedRecipes}
          handleBookmarked={handleBookmarked}
        />
      )}
      {nextPageUrl && (
        <Button
          colorScheme="blue"
          size="lg"
          margin="0.2rem auto"
          marginTop="2rem"
          display="block"
          className="btn btn-next-page recipe-list__btn"
          onClick={handleLoadMoreRecipes}
        >
          Show more
        </Button>
      )}
    </>
  );
};

export default SearchRecipe;
