import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { locationMiddleware, saveMiddleware } from "./middlewares";

const getStore = () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(saveMiddleware),
      applyMiddleware(locationMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

export default getStore;
