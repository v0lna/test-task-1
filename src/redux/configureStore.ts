import { AppActions } from './../types/actions';
import { userReducer } from './reducers/user';
import { newsReducer } from './reducers/news';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

const reducers = combineReducers({ news: newsReducer, user: userReducer });

export type AppStore = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<AppStore, AppActions>),
);
