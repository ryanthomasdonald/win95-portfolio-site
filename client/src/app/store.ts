import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
/** import reducers here */
import windowReducer from '../features/window/windowSlice';

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

/** configuration for local storage */
export const config = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  window: windowReducer,
  /** add reducers to root reducer here
   * format:
   * 
   * reducerName: slice,
   */
})

const persisted = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persisted
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
