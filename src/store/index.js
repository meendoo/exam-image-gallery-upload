import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";

// Adds Redux Devtools
const composeEnhancers =
  typeof window === "object" &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

// Thunk for async dispatches
// loadingBarMiddleware to handle state management for the loading bar
const middleWares = [thunk, loadingBarMiddleware()];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);
