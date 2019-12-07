import { LogData } from './../../helpers/authCheck';
import { AppStore } from '../configureStore';
import { LOG_IN, LOG_OUT, LOG_ERROR, AppActions } from '../../types/actions';
import { Dispatch } from 'redux';
import { authCheck } from 'helpers/authCheck';

const userUrl = 'http://5dc4200613d21600147e5f8f.mockapi.io/profile';

const logIn = (payload: string): AppActions => ({
  type: LOG_IN,
  payload,
});
const errorLog = (payload: Error | string): AppActions => ({
  type: LOG_ERROR,
  payload,
});

const setLogStatus = (data: LogData) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    try {
      const resJson = await fetch(userUrl);
      const res = await resJson.json();

      let authCurrentStatus = false;
      for (let i = 0; i < res.length; i++) {
        const el = res[i];
        if (authCheck(el, data)) {
          localStorage.setItem('authId', el.id);
          dispatch(logIn(el.id));
          authCurrentStatus = true;
          break;
        }
      }
      if (!authCurrentStatus) {
        dispatch(errorLog('The username or password you entered is incorrect'));
      }
    } catch (error) {
      dispatch(errorLog(error));
    }
  };
};

const logOutAction = (): AppActions => ({
  type: LOG_OUT,
});

const logOut = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    localStorage.removeItem('authId');
    dispatch(logOutAction());
  };
};
export { setLogStatus, logOut };
