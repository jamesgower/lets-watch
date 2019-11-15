import {
  FETCH_USER,
  LOGOUT,
  AuthActionTypes,
  BROWSE_AS_GUEST,
} from "../interfaces/auth.redux.i";
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
    case BROWSE_AS_GUEST:
      return {
        profile: {
          _id: null,
          userID: null,
          firstName: "Guest",
          lastName: null,
          email: null,
        },
      };
    default:
      return state;
  }
};
