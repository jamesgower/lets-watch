import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_USER,
  LOGOUT,
  BROWSE_AS_GUEST,
  BrowseAsGuestAction,
} from "../interfaces/auth.redux.i";

export const fetchUser = (): ((dispatch: Dispatch) => Promise<void>) => async (
  dispatch,
): Promise<void> => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logout = (): ((dispatch: Dispatch) => void) => async (
  dispatch,
): Promise<void> => {
  await axios.get("/api/logout");
  dispatch({ type: LOGOUT });
};

export const browseAsGuest = (): BrowseAsGuestAction => ({
  type: BROWSE_AS_GUEST,
});

export const addTVShowToUser = (id: number): ((dispatch: Dispatch) => void) => async (
  dispatch,
): Promise<void> => {
  const res = await axios.post("/api/add_tv_show", id);
};
