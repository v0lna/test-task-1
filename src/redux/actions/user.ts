import { AppStore } from './../configureStore';
import { UserProfile } from './../../types/User';
import { USER_REQUEST, USER_SUCCESS, USER_ERROR, AppActions } from './../../types/actions';
import { Dispatch } from 'redux';

const userUrl = 'http://5dc4200613d21600147e5f8f.mockapi.io/profile';

const startRequest = (): AppActions => ({
  type: USER_REQUEST,
});
const succesRequest = (payload: UserProfile): AppActions => ({
  type: USER_SUCCESS,
  payload,
});
const errorRequest = (payload: Error): AppActions => ({
  type: USER_ERROR,
  payload,
});

const getUsers = () => {

  return async (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {

    try {
      dispatch(startRequest());
      const id = getState().auth.userId;
      
      const resJson = await fetch(`${userUrl}/${id}`);
      const res = await resJson.json();
      console.log(res)
      dispatch(succesRequest(res));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
};

export { getUsers };
