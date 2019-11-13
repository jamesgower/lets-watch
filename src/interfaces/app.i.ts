export interface AppState {
  auth?: AuthState;
  tmdb?: TMDBState;
}

export interface AuthState {
  profile: ProfileState;
}

export interface TMDBState {
  movies: any;
  tv: any;
}

export interface ProfileState {
  _id: string;
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
}
