import {combineReducers, configureStore} from '@reduxjs/toolkit';

import CounterReducer from './counter/index';

const reducers = combineReducers({
  Counter: CounterReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof reducers>;

export {store};
