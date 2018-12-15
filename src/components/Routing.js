import React from "react";
import { Route, Switch } from "react-router-dom";

import Feeds from "../pages/Feeds";
import Feed from "../pages/Feed";
import ProtectedRouter from "./ProtectedRouter";
import { Layout } from "./layout";
import Edit from "../pages/edit";

export class Routing extends React.Component {
  render() {
    return (
      <Layout>
        <Route exact={true} path="/" component={Feeds} />
        <Switch>
          <Route exact={true} path="/news/:id" component={Feed} />
          <ProtectedRouter
            exact={true}
            path="/news/:id/edit"
            component={Edit}
          />
        </Switch>
      </Layout>
    );
  }
}
