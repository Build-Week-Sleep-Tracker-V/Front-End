import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
      <Route
        {...rest}
        render={() => {
          if (!token) {
            return <Component />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  //Remove ! from token when testing system for proper operation
  export default PrivateRoute;