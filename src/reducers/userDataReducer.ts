export enum BookmarkActionKind {
  ADD_BOOKMARKED_RECIPE = 'ADD_BOOKMARKED_RECIPE',
  REMOVE_BOOKMARKED_RECIPE = 'REMOVE_BOOKMARKED_RECIPE',
}

interface UserDataAction {
  type: BookmarkActionKind;
  payload: string;
}

export function userDataReducer(state: string[], action: UserDataAction): string[] {
  const { type, payload} = action;
  switch (type) {
    case 'ADD_BOOKMARKED_RECIPE':
      return [...state, payload ]
    case 'REMOVE_BOOKMARKED_RECIPE':
      return state.filter((id:string) => id !== payload);
    default:
      return state;
  }
}