import { LOG_IN, LOG_OUT, LOG_ERROR } from '../../types/actions';
import { UserProfile } from '../../types/User';
import { AppActions } from 'types/actions';

export interface authState {
  userId: null | string;
  error: null | Error | string;
}

const initialState: authState = {
  userId: null,
  error: null,
};

export const authReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userId: action.payload,
        error: null,
      };
    case LOG_OUT:
      return {
        ...state,
        userId: null,
        error: null,
      };
    case LOG_ERROR:
      return {
        ...state,
        userId: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
