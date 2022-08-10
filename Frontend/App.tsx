/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import {Provider} from 'react-redux';

import {userAPISlice} from './src/api/UserAPISlice';
import Navigation from './src/Navigation';
import store from './src/redux/store';

const App = () => {
  return (
    <ApiProvider api={userAPISlice}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApiProvider>
  );
};

export default App;
