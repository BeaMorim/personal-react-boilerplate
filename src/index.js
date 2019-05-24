import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import configureStore from "./state/store";
import { createBrowserHistory } from "history";
import ptBR from "antd/lib/locale-provider/pt_BR";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const initialState = {};

const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ptBR}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
