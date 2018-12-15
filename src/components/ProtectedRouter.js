import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRouter = ({ component: Component, authorization, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authorization.auth ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = ({ authorization }) => ({
  authorization
});

export default connect(
  mapStateToProps,
  null
)(ProtectedRouter);
