import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { FC } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import AppRouter from "./routes/Router";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./scss/styles.scss";
import "animate.css/animate.min.css";

const store = configureStore();

const App: FC = (): JSX.Element => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
