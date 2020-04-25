import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/Auth";

function PrivateRoute({ component: Component, ...rest }) {
  
  const { authTokens } = useAuth();
  console.log(authTokens)

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;