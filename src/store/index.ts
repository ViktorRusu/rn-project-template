import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

import CounterReducer from './counter/index';
import {reduxStorage} from '../utils/storage';

const reducers: Reducer<any, any> = combineReducers({
  Counter: CounterReducer,
});

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['Counter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;

export {store, persistor};
