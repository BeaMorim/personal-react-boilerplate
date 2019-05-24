import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

/**
 * Merges the router state with the dynamically injected reducers
 */
export default function createReducer(history) {
  return combineReducers({
    router: connectRouter(history),
  });
}
