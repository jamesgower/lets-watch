import { compose, createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../reducers/auth.reducer";
import tmdbReducer from "../reducers/tmdb.reducer";
import { AppState } from "../interfaces/app.i";

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default (): Store => {
  const store: Store<AppState> = createStore(
    combineReducers({
      auth: authReducer,
      tmdb: tmdbReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return store;
};
