import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './app/routes/stacks/auth/AuthStack';
import HomeNavigator from './app/routes/stacks/home/HomeNavigator';

const showLoginFlow = false;
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>{showLoginFlow ? <AuthStack /> : <HomeNavigator />}</NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
