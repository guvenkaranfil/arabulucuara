import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Login from '@auth/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
