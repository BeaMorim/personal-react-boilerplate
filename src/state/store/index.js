/* eslint-disable */

import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { middleware as reduxPackMiddleware } from "redux-pack";
import createReducer from "../reducer";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  /* If Redux Dev Tools is installed, enable it */
  if (typeof window === "object" && process.env.NODE_ENV !== "production") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  /*
  Create the store with two middlewares
  1. reduxPackMiddleware: Makes redux-pack work
  2. routerMiddleware: Syncs the location/URL path to the state
  */
  const middlewares = [reduxPackMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(history),
    initialState,
    composeEnhancers(...enhancers)
  );

  /* Make reducers hot reloadable */
  if (module.hot) {
    module.hot.accept("../reducer", () => {
      store.replaceReducer(createReducer(history));
    });
  }

  return store;
}
