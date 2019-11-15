import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

export default ({ component: Component, auth, ...rest }): JSX.Element => {
  return (
    <Route
      {...rest}
      component={(props): JSX.Element =>
        auth ? (
          <>
            <NavBar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
