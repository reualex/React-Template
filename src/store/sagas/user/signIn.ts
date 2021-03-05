import { call, put } from "redux-saga/effects";
import requester from "../../../utils/requester";
import { userSignInSuccess } from "../../actions-creator";

export default function* (action: any): Iterator<any> {
  try {
    const response = yield call([requester, "request"], {
      data: action.payload,
      method: "POST",
      url: "/users/sign_in",
    });
    const res: any = response;
    const user: IUserData = res.data;
    const authorization: string = res.headers["authorization"];

    yield put(userSignInSuccess(user));
    localStorage.setItem("authorization", authorization);
  } catch (error) {
    console.log("error: ", error);
    // Add action to add handle error and notification
  }
}
