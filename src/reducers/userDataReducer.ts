import { Recipe } from "../types/types";

export enum BookmarkActionKind {
  ADD_BOOKMARKED_RECIPE = 'ADD_BOOKMARKED_RECIPE',
  REMOVE_BOOKMARKED_RECIPE = 'REMOVE_BOOKMARKED_RECIPE',
}

interface UserDataAction {
  type: BookmarkActionKind;
  payload: Recipe;
}

export function userDataReducer(state: Recipe[], action: UserDataAction): Recipe[] {
  const { type, payload} = action;
  switch (type) {
    case 'ADD_BOOKMARKED_RECIPE':
      return [...state, payload ]
    case 'REMOVE_BOOKMARKED_RECIPE':
      return state.filter((recipe:Recipe) => recipe.id !== payload.id);
    default:
      return state;
  }
}