import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/landing/Header";
import { AppState, AuthState } from "../interfaces/app.i";

export default ({ component: Component, ...rest }): JSX.Element => {
  const { profile } = useSelector((state: AppState): AuthState => state.auth);
  const isAuthenticated = !!profile._id;
  return (
    <Route
      {...rest}
      component={(props): JSX.Element =>
        isAuthenticated ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
