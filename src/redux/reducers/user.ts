import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from './../../types/actions';
import { UserProfile } from './../../types/User';
import { AppActions } from 'types/actions';

export interface UserState {
  users: UserProfile[];
  loading: boolean;
  error: null | Error;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
