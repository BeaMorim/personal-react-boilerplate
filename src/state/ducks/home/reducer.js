import { handle } from "redux-pack";
import { LOAD_FOO } from "./types";

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export function fooReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO:
      return handle(state, action, {
        start: prevState => {
          return {
            ...prevState,
            isLoading: true,
            fooError: null
          };
        },
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, fooError: payload }),
        success: prevState => ({ ...prevState, foo: payload })
      });
    default:
      return state;
  }
}
