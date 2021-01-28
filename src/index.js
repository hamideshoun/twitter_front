import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
//store stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers"; //importing the default export from index inside reducers folder

//importing middlewares
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
