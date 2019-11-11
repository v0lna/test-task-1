import { OneNews } from './OneNews';
import { UserProfile } from './User';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_ERROR = 'NEWS_ERROR';

export interface UserRequestAction {
  type: typeof USER_REQUEST;
}
export interface UserSuccessAction {
  type: typeof USER_SUCCESS;
  payload: UserProfile[];
}
export interface UserErrorAction {
  type: typeof USER_ERROR;
  payload: Error | null;
}

export interface NewsRequestAction {
  type: typeof NEWS_REQUEST;
}
export interface NewsSuccessAction {
  type: typeof NEWS_SUCCESS;
  payload: OneNews[];
}
export interface NewsErrorAction {
  type: typeof NEWS_ERROR;
  payload: Error;
}

export type UserActionType = UserRequestAction | UserSuccessAction | UserErrorAction;
export type NewsActionType = NewsRequestAction | NewsSuccessAction | NewsErrorAction;
export type AppActions = UserActionType | NewsActionType;
