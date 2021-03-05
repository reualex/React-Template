import * as actions from "../../actions";
import { takeEvery } from "redux-saga/effects";

import signIn from "./signIn";

export default function* (): Iterator<any> {
  yield takeEvery(actions.USER_SIGN_IN, signIn);
}
