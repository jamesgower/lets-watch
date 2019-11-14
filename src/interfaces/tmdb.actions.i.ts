import { APIResponse } from "./tmdb.actions.i";
export const FETCH_TOP_MOVIES = "fetch_top_movies";
export const FETCH_TOP_TV = "fetch_top_tv";
export const FETCH_CURRENT_DATA = "fetch_current_data";

export interface FetchTopMoviesAction {
  type: typeof FETCH_TOP_MOVIES;
  payload: APIResponse;
}

export interface FetchTopTVAction {
  type: typeof FETCH_TOP_TV;
  payload: APIResponse;
}

export interface FetchCurrentDataAction {
  type: typeof FETCH_CURRENT_DATA;
  payload: FetchCurrentDataResponse;
}

export interface APIResponse {
  results: FetchCurrentDataResponse;
}

export interface FetchCurrentDataResponse {
  title: string;
  tagline: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  overview: string;
  vote_average: number;
  language: string;
  homepage: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
}

export type MovieActionTypes =
  | FetchTopMoviesAction
  | FetchTopTVAction
  | FetchCurrentDataAction;
