export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  profile: ProfileState;
}

export interface ProfileState {
  _id: string;
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
}
