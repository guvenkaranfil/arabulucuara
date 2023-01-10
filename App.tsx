import React, {Component, useEffect} from 'react';
import {Alert, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import CodePush, {CodePushOptions} from 'react-native-code-push';

import store from '@store/RootStore';
import AppNavigator from '@routes/AppNavigator';
import {CommonStyles} from '@utils';

const DEPLOYMENT_KEY_PRODUCTION = 'mz2hCdp3keysRacX7tcY41k8OH1xzEjenn5yw';

class App extends Component {
  componentDidMount(): void {
    CodePush.checkForUpdate(DEPLOYMENT_KEY_PRODUCTION).then(res => {
      if (res) {
        Alert.alert('update found!!');
      }

      setTimeout(() => {
        CodePush.sync({
          updateDialog: {title: 'Uygulama güncelleniyor...'},
          installMode: CodePush.InstallMode.IMMEDIATE,
        });
      }, 5000);
    });
  }

  render() {
    return (
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <Text>0.0.500</Text>
      // </View>

      <Provider store={store}>
        <SafeAreaView style={CommonStyles.f1}>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
          {/* <EmptyView /> */}
        </SafeAreaView>
      </Provider>
    );
  }
}

// const App = () => {
//   useEffect(() => {
//     const checkForUpdate = async () => {
//       try {
//         console.log('Checking for update..');
//         const response = await CodePush.checkForUpdate(DEPLOYMENT_KEY_PRODUCTION);

//         console.log('update check response: ', response);
//         if (response) {
//           const updateResponse = await CodePush.sync({
//             updateDialog: {title: 'Güncelleme', optionalUpdateMessage: 'Güncelleme Yükleniyor'},
//           });
//           if (updateResponse) {
//             console.log('[LOG-SELF]: app is restarting...');
//             CodePush.restartApp();
//           }
//           // We've found a new release
//         } else {
//           // there isn't released version
//         }
//       } catch (error) {
//         console.log('Something went wrong while checking for update: ', error);
//       }
//     };

//     CodePush.sync({
//       installMode: CodePush.InstallMode.IMMEDIATE,
//     });

//     // checkForUpdate();
//   }, []);

//   const EmptyView = () => (
//     <View style={CommonStyles.fCenter}>
//       <Text>0.0.0 Version</Text>
//     </View>
//   );

//   return (
//     <Provider store={store}>
//       <SafeAreaView style={CommonStyles.f1}>
//         <StatusBar barStyle="dark-content" />
//         {/* <AppNavigator /> */}
//         <EmptyView />
//       </SafeAreaView>
//     </Provider>
//   );
// };

const codePushOptions: CodePushOptions = {
  updateDialog: {
    title: 'Uygulama Güncelleniyor',
  },
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
};

// const AppWithCodepush = CodePush(codePushOptions)(App);
export default CodePush(codePushOptions)(App);
