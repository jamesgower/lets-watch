export const FETCH_TOP_MOVIES = "fetch_top_movies";
export const FETCH_TOP_TV = "fetch_top_tv";

export interface FetchTopMoviesAction {
  type: typeof FETCH_TOP_MOVIES;
  payload: APIResponse;
}

export interface FetchTopTVAction {
  type: typeof FETCH_TOP_TV;
  payload: APIResponse;
}

export interface APIResponse {
  results: any;
}

export type MovieActionTypes = FetchTopMoviesAction | FetchTopTVAction;
