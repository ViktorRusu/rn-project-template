import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducers = combineReducers({});

const store = configureStore({
  reducer: reducers,
});

export {store};
