import { createReducer } from "redux-create-reducer";
import { AnyAction } from "redux";
import { Reducer } from "../reducers";
import * as actions from "../actions";

declare global {
  interface IUserState {
    user: IUserData[];
  }

  interface IUserData {
    id: number | null;
    name: string;
  }
}

export const initialUserData: IUserData = {
  id: null,
  name: "",
};

export const initialUserState: IUserState = {
  user: [],
};

const saveReceivedUserData: Reducer<IUserState, AnyAction> = (
  state,
  action
) => {
  return {
    ...state,
    user: action.payload,
  };
};

export default createReducer(initialUserState, {
  [actions.USER_SIGN_IN_SUCCESS]: saveReceivedUserData,
});
