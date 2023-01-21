import React, { useState } from "react";
import {
  getSearchRecipeResults,
  RecipeSearchResults,
  Recipe
} from "../../utils/recipe.utils";
import RecipeList from "../recipe-list/RecipeList";
import "./searchRecipe.scss";

const SearchRecipe: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: RecipeSearchResults = await getSearchRecipeResults(inputValue);
    const {nextPageUrl, recipes} : {recipes: Recipe[], nextPageUrl:string} = result;
    console.log("recipes:", recipes);
    console.log("nextPageUrl:", nextPageUrl);

    setRecipes(recipes);
  };

  return (
    <>
      <div className="search-recipe">
        <form className="search-form" onSubmit={handleSubmit}>
          <label>Search for recipe</label>
          <input type="text" onChange={(e) => setInputValue(e.target.value)} />
          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </div>
      {recipes && <RecipeList {...{ recipeList: recipes }} />}
    </>
  );
};

export default SearchRecipe;
