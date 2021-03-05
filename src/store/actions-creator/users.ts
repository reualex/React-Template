import { AnyAction } from "redux";
import * as actions from "../actions/users";

export const userSignIn = (payload: any): AnyAction => ({
  type: actions.USER_SIGN_IN,
  payload,
});

export const userSignInSuccess = (payload: any): AnyAction => ({
  type: actions.USER_SIGN_IN_SUCCESS,
  payload,
});
