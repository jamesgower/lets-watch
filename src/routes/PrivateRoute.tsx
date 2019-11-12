import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/landing/Header";

export default ({ component: Component, auth, ...rest }): JSX.Element => {
  return (
    <Route
      {...rest}
      component={(props): JSX.Element =>
        auth ? (
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
