import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { authorization } from "./auth";
import { feeds } from "./feeds";
import { feed } from "./feed";
import { notifications } from "./notifications";

export default combineReducers({
  routing: routerReducer,
  authorization,
  feeds,
  feed,
  notifications
});
