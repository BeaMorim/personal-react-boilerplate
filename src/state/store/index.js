/* eslint-disable */

import { createStore, compose, applyMiddleware } from "redux";
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
  Create the store with reduxPackMiddleware: Makes redux-pack work
  */
  const middlewares = [reduxPackMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  /* Make reducers hot reloadable */
  if (module.hot) {
    module.hot.accept("../reducer", () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}
