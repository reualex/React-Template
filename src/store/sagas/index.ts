import { fork } from "redux-saga/effects";

import user from "./user";

export default function* (): Iterator<any> {
  yield fork(user);
}
