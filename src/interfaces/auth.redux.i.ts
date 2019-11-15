import { ProfileState } from "./app.i";

export const FETCH_USER = "fetch_user";
export const LOGOUT = "logout";
export const LOGIN = "login";
export const BROWSE_AS_GUEST = "browse_as_guest";

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: ProfileState;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface BrowseAsGuestAction {
  type: typeof BROWSE_AS_GUEST;
}

export type AuthActionTypes = FetchUserAction | LogoutAction | BrowseAsGuestAction;
