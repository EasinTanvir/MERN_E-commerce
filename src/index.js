import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/bootstrap.min.css";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
