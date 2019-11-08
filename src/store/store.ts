import { compose, createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../reducers/auth.reducer";

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default (): Store => {
  const store: Store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return store;
};
