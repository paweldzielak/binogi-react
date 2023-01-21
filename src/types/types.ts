export type RecipeSearchResults = {
  nextPageUrl: string
  recipes: Recipe[]
}

export type Recipe = {
  imageUrl: string
  calories: number
  label: string
  totalTime: number
  mealType: string
  dietLabels: string[]
}
