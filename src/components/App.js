import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Switch } from "react-router-dom";
import { Routing } from "../components/Routing";
import { Notification } from "./Notification";
import { deleteNotification } from "../actions/errors";

class App extends Component {
  componentDidMount() {
    const _onInit = auth2 => auth2;
    const _onError = err => err;
    window.gapi.load("auth2", function() {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        })
        .then(_onInit, _onError);
    });
  }

  render() {
    const { notifications } = this.props;
    const lastErrorInfo = notifications[notifications.length - 1];
    return (
      <React.Fragment>
        <Switch>
          <Routing />
        </Switch>
        {notifications.length > 0 && (
          <Notification
            type={lastErrorInfo.type}
            message={lastErrorInfo.message}
            onDeleteErrors={this.props.deleteNotification}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ notifications }) => ({
  notifications
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      deleteNotification
    }
  )(App)
);
