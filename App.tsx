import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppNavigator from '@routes/AppNavigator';

import {Provider} from 'react-redux';
import store from './app/stores/RootStore';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
