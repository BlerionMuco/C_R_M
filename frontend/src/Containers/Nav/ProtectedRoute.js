import React, { Fragment } from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const checkValidToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      {checkValidToken() ? (
        <Route
          {...rest}
          render={(props) => <Component {...rest} {...props} />}
        />
      ) : (
        <Navigate to="/" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
