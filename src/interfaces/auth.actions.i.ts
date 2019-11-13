import { ProfileState } from "./app.i";

export const FETCH_USER = "fetch_user";
export const LOGOUT = "logout";
export const LOGIN = "login";

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: ProfileState;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = FetchUserAction | LogoutAction;
