import { createStore, combineReducers, applyMiddleware } from "redux";
import { posts } from "./posts/reducer";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import logger from "redux-logger";

export const history = createHistory();

let prevPosts = {};

try {
  prevPosts = JSON.parse(localStorage.getItem("posts_json"));
} catch (err) {}

export const store = createStore(
  combineReducers({ router, posts }),
  { posts: prevPosts },
  applyMiddleware(routerMiddleware(history), logger)
);

store.subscribe(() => {
  const { posts } = store.getState();
  localStorage.setItem("posts_json", JSON.stringify(posts));
});
