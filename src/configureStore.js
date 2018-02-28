import { createStore, combineReducers, applyMiddleware } from "redux";
import { posts } from "./posts/reducer";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import logger from "redux-logger";

export const history = createHistory();

export const store = createStore(
  combineReducers({ router, posts }),
  applyMiddleware(routerMiddleware(history), logger)
);
