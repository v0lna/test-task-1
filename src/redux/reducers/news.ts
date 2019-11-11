import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_ERROR } from './../../types/actions';
import { AppActions } from 'types/actions';
import { OneNews } from 'types/OneNews';

interface newsState {
  news: OneNews[];
  loading: boolean;
  error: null | Error;
}

const initialState: newsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
