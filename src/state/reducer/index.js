import { combineReducers } from "redux";
import { fooReducer as foo } from '../ducks/home/reducer';

/**
 * Merges the router state with the dynamically injected reducers
 */
export default function createReducer() {
  return combineReducers({
    foo,
  });
}
