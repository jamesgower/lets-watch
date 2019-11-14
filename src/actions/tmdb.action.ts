import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_TOP_MOVIES,
  FETCH_TOP_TV,
  FETCH_CURRENT_DATA,
} from "../interfaces/tmdb.actions.i";

export const fetchTopMovies = (): ((dispatch: Dispatch) => Promise<void>) => async (
  dispatch,
): Promise<void> => {
  const res = await axios.get(
    `${process.env.TMDB_URL}/movie/popular${process.env.TMDB_API_KEY}`,
  );
  dispatch({
    type: FETCH_TOP_MOVIES,
    payload: res.data.results,
  });
};

export const fetchTopTV = (): ((dispatch: Dispatch) => Promise<void>) => async (
  dispatch,
): Promise<void> => {
  const res = await axios.get(
    `${process.env.TMDB_URL}/tv/popular${process.env.TMDB_API_KEY}`,
  );
  dispatch({
    type: FETCH_TOP_TV,
    payload: res.data.results,
  });
};

export const fetchCurrentData = (
  id: number,
  type: string,
): ((dispatch: Dispatch) => Promise<void>) => async (dispatch): Promise<void> => {
  const res = await axios.get(
    `${process.env.TMDB_URL}/${type}/${id}${process.env.TMDB_API_KEY}`,
  );
  dispatch({
    type: FETCH_CURRENT_DATA,
    payload: res.data,
  });
};
