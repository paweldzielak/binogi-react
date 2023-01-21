import axios from "axios"

import { Recipe, RecipeSearchResults } from '../types/types'

interface RecipeAPI {
  uri: string
  label: string
  image: string
  images: Images
  source: string
  url: string
  shareAs: string
  yield: number
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  ingredientLines: string[]
  ingredients: Ingredient[]
  calories: number
  totalWeight: number
  totalTime: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
  totalNutrients: TotalNutrients
  totalDaily: TotalDaily
  digest: Digest[]
}

interface Images {
  THUMBNAIL: SingleImage
  SMALL: SingleImage
  REGULAR: SingleImage
}

interface SingleImage {
  url: string
  width: number
  height: number
}

interface Ingredient {
  text: string
  quantity: number
  measure?: string
  food: string
  weight: number
  foodCategory: string
  foodId: string
  image: string
}

interface TotalNutrients {
  ENERC_KCAL: SingleSubstance
  FAT: SingleSubstance
  FASAT: SingleSubstance
  FATRN: SingleSubstance
  FAMS: SingleSubstance
  FAPU: SingleSubstance
  CHOCDF: SingleSubstance
  "CHOCDF.net": SingleSubstance
  FIBTG: SingleSubstance
  SUGAR: SingleSubstance
  "SUGAR.added": SingleSubstance
  PROCNT: SingleSubstance
  CHOLE: SingleSubstance
  NA: SingleSubstance
  CA: SingleSubstance
  MG: SingleSubstance
  K: SingleSubstance
  FE: SingleSubstance
  ZN: SingleSubstance
  P: SingleSubstance
  VITA_RAE: SingleSubstance
  VITC: SingleSubstance
  THIA: SingleSubstance
  RIBF: SingleSubstance
  NIA: SingleSubstance
  VITB6A: SingleSubstance
  FOLDFE: SingleSubstance
  FOLFD: SingleSubstance
  FOLAC: SingleSubstance
  VITB12: SingleSubstance
  VITD: SingleSubstance
  TOCPHA: SingleSubstance
  VITK1: SingleSubstance
  "Sugar.alcohol": SingleSubstance
  WATER: SingleSubstance
}

interface SingleSubstance {
  label: string
  quantity: number
  unit: string
}

interface TotalDaily {
  ENERC_KCAL: SingleSubstance
  FAT: SingleSubstance
  FASAT: SingleSubstance
  CHOCDF: SingleSubstance
  FIBTG: SingleSubstance
  PROCNT: SingleSubstance
  CHOLE: SingleSubstance
  NA: SingleSubstance
  CA: SingleSubstance
  MG: SingleSubstance
  K: SingleSubstance
  FE: SingleSubstance
  ZN: SingleSubstance
  P: SingleSubstance
  VITA_RAE: SingleSubstance
  VITC: SingleSubstance
  THIA: SingleSubstance
  RIBF: SingleSubstance
  NIA: SingleSubstance
  VITB6A: SingleSubstance
  FOLDFE: SingleSubstance
  VITB12: SingleSubstance
  VITD: SingleSubstance
  TOCPHA: SingleSubstance
  VITK1: SingleSubstance
}

interface Digest {
  label: string
  tag: string
  schemaOrgTag?: string
  total: number
  hasRDI: boolean
  daily: number
  unit: string
  sub?: Sub[]
}

interface Sub {
  label: string
  tag: string
  schemaOrgTag?: string
  total: number
  hasRDI: boolean
  daily: number
  unit: string
}

interface Links {
  self: Self
}

interface Self {
  title: string
  href: string
}

const getRecipeId = (directUrl: string): string => {
  return directUrl.split('/')[6].split('?')[0];
}

const getRecipesByUrl = async (url: string): Promise<RecipeSearchResults> => {
  let recipes: Recipe[] = [];
  try {
    const { data } = await axios.get(url)
    const nextPageUrl: string = data._links.next.href;

    recipes = data.hits.map(({ _links, recipe }: { _links: Links, recipe: RecipeAPI }) => {
      return {
        id: getRecipeId(_links.self.href),
        imageUrl: recipe.image,
        calories: Math.round(recipe.calories),
        label: recipe.label,
        totalTime: recipe.totalTime,
        mealType: recipe.mealType[0],
        dietLabels: recipe.dietLabels,
      }
    })

    return { nextPageUrl, recipes }
  } catch (error) {
    console.error(`Error: ${error}`)
    return { nextPageUrl: '', recipes: recipes }
  }
}

export const getSearchRecipeResults = async (query: string): Promise<RecipeSearchResults> => {
  const url = `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&type=public`
  const recipes: RecipeSearchResults = await getRecipesByUrl(url);
  return recipes
}