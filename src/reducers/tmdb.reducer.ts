import {
  FETCH_TOP_MOVIES,
  FETCH_TOP_TV,
  MovieActionTypes,
} from "../interfaces/tmdb.actions.i";
import { TMDBState } from "../interfaces/app.i";

const defaultState: TMDBState = {
  movies: null,
  tv: null,
};

export default (state = defaultState, action: MovieActionTypes): TMDBState => {
  switch (action.type) {
    case FETCH_TOP_MOVIES:
      return {
        ...state,
        movies: action.payload || null,
      };
    case FETCH_TOP_TV:
      return {
        ...state,
        tv: action.payload || null,
      };
    default:
      return state;
  }
};
