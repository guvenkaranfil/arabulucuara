import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './app/stores/RootStore';
import AppNavigator from '@routes/AppNavigator';
import {CommonStyles} from '@utils';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={CommonStyles.f1}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
