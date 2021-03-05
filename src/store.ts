import { createStore, applyMiddleware } from "redux";
import reducers from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import root from "./store/sagas";

const saga = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(root);
