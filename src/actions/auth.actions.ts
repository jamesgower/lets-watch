import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_USER, LOGOUT } from "../interfaces/actions.i";

export const fetchUser = (): ((dispatch: Dispatch) => Promise<void>) => async (
  dispatch,
): Promise<void> => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logout = (): ((dispatch: Dispatch) => void) => (dispatch): void => {
  dispatch({ type: LOGOUT });
};
