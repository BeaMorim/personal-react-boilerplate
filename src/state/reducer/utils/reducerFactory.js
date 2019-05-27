import { handle } from "redux-pack";
import defaultInitialState from "./defaultInitialState";

const reducerFactory = (
  requestAction,
  clearAction,
  initialState = defaultInitialState()
) => {
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case requestAction:
        return handle(state, action, {
          start: prevState => {
            return {
              ...prevState,
              isLoading: true,
              error: null
            };
          },
          finish: prevState => ({ ...prevState, isLoading: false }),
          failure: prevState => ({ ...prevState, error: payload }),
          success: prevState => ({ ...prevState, data: payload })
        });
      case clearAction:
        return initialState;
      default:
        return state;
    }
  };

  return reducer;
};

export default reducerFactory;
