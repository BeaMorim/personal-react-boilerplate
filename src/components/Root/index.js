import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import { createBrowserHistory } from "history";
import ptBR from "antd/lib/locale-provider/pt_BR";
import configureStore from "../../state/store";

const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory();
  const store = configureStore(initialState, history);

  return (
    <Provider store={store}>
      <LocaleProvider locale={ptBR}>{children}</LocaleProvider>
    </Provider>
  );
};

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array
  ]),
  initialState: PropTypes.object
};

export default Root;
