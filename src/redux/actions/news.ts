import { OneNews } from './../../types/OneNews';
import { AppStore } from '../configureStore';
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_ERROR, AppActions } from '../../types/actions';
import { Dispatch } from 'redux';

const userUrl = 'https://5dc4200613d21600147e5f8f.mockapi.io/news';

export const startRequest = (): AppActions => ({
  type: NEWS_REQUEST,
});
export const succesRequest = (payload: OneNews[]): AppActions => ({
  type: NEWS_SUCCESS,
  payload,
});
export const errorRequest = (payload: Error): AppActions => ({
  type: NEWS_ERROR,
  payload,
});

const getNews = () => {
  // console.log('lol im here');

  return async (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    // console.log('lol im here');
    // debugger;
    try {
      dispatch(startRequest());

      const resJson = await fetch(userUrl);
      const res = await resJson.json();

      dispatch(succesRequest(res));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
};

export { getNews };
