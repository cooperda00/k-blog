//Modules
import React from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from "react-https-redirect";
//Components
import AppRouter from "./Routes/AppRouter";
//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";
//Normalize and base styles
import "../node_modules/normalize.css/normalize.css";
import "./base.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(thunk)))
);

const app = (
  <Provider store={store}>
    <HttpsRedirect>
      <AppRouter />
    </HttpsRedirect>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
