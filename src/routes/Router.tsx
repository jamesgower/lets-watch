import React, { FC, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import Home from "../components/landing/Home";
import NotFoundPage from "../components/NotFoundPage";
import Login from "../components/landing/Login";
import { AppState, AuthState } from "../interfaces/app.i";
import * as actions from "../actions/auth.actions";

export const history = createBrowserHistory();

const AppRouter: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(actions.fetchUser());
  }, []);
  const { profile } = useSelector((state: AppState): AuthState => state.auth);
  const isAuthenticated = profile !== null;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={isAuthenticated ? Home : Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
