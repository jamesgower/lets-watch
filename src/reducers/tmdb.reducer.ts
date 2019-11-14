/* eslint-disable @typescript-eslint/camelcase */
import {
  FETCH_TOP_MOVIES,
  FETCH_TOP_TV,
  FETCH_CURRENT_DATA,
  MovieActionTypes,
} from "../interfaces/tmdb.actions.i";
import { TMDBState } from "../interfaces/app.i";

const defaultState: TMDBState = {
  movies: null,
  tv: null,
  current: null,
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
    case FETCH_CURRENT_DATA: {
      const {
        title,
        tagline,
        genres,
        overview,
        vote_average,
        language,
        homepage,
        backdrop_path,
        poster_path,
        release_date,
      } = action.payload;
      return {
        ...state,
        current: {
          title,
          tagline,
          genres: genres.map(({ name }) => name),
          overview,
          rating: vote_average,
          language,
          homepage,
          backdrop: backdrop_path,
          poster: poster_path,
          releaseDate: release_date,
        },
      };
    }
    default:
      return state;
  }
};
