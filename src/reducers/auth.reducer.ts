import { FETCH_USER, LOGOUT, AuthActionTypes } from "../interfaces/actions.i";
import { AuthState } from "../interfaces/app.i";

const defaultState: AuthState = {
  profile: null,
};

export default (state = defaultState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case FETCH_USER:
      return {
        profile: action.payload || null,
      };
    case LOGOUT:
      return {
        profile: null,
      };
    default:
      return state;
  }
};
