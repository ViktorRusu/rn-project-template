import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist/es/types';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem(key: string, value: any): any {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem(key: string): any {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem(key: string): any {
    storage.delete(key);
    return Promise.resolve();
  },
};
