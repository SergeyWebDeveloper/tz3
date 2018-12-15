import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";

import App from "./components/App";
import reducers from "./reducers";
import { rootSaga } from "./sagas";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middlewareRouter = routerMiddleware(history);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, middlewareRouter))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
