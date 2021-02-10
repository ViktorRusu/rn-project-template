import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppNavigator} from './navigators';
import './translations';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
