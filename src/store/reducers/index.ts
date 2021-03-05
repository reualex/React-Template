import { combineReducers } from "redux";
import userReducer from "./user";

export type Reducer<S, A> = (state: S, action: A) => S;

const reducers = combineReducers({
  userReducer,
});

export default reducers;
