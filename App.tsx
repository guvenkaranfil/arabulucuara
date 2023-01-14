import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import CodePush, {CodePushOptions} from 'react-native-code-push';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import store from '@store/RootStore';
import AppNavigator from '@routes/AppNavigator';
import {CommonStyles} from '@utils';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const DEPLOYMENT_KEY_PRODUCTION = 'mz2hCdp3keysRacX7tcY41k8OH1xzEjenn5yw';

PushNotification.createChannel(
  {
    channelId: '10',
    channelName: 'yibs-chanel',
    vibrate: true,
  },
  () => {},
);

const showNotification = (notification?: FirebaseMessagingTypes.Notification) => {
  PushNotification.localNotification({
    ignoreInForeground: false,
    vibrate: true,
    channelId: '10',
    title: notification?.title,
    message: notification?.body ?? '',
  });
};

firebase.messaging().onMessage(response => {
  console.log('onMessage...');

  console.log('Notification...', JSON.stringify(response));
  if (Platform.OS === 'ios') {
    PushNotificationIOS.checkPermissions(({authorizationStatus}) => {
      console.log('AuthorizationStatus:', authorizationStatus);
      if (authorizationStatus !== 0 && authorizationStatus !== 1) {
        showNotification(response.notification);
      }
    });
  } else {
    console.log('else...');

    showNotification(response.notification);
  }
});

const registerForRemoteMessages = () => {
  firebase
    .messaging()
    .registerDeviceForRemoteMessages()
    .then(() => {
      console.log('Registered');
    })
    .catch(e => console.log(e));
};

class App extends Component {
  state = {
    isAirUpdateChecked: false,
  };

  componentDidMount(): void {
    CodePush.checkForUpdate(DEPLOYMENT_KEY_PRODUCTION)
      .then(res => {
        console.log('air update response: ', res);
        if (res) {
          setTimeout(() => {
            CodePush.sync({
              updateDialog: {
                title: 'Uygulama güncelleniyor...',

                mandatoryContinueButtonLabel: 'İptal',
                mandatoryUpdateMessage:
                  'Uygulamayı kullanmaya devam etmek için lütfen güncellemeyi yükleyiniz',
                optionalIgnoreButtonLabel: 'Vazgeç',
                optionalInstallButtonLabel: 'Yükle',
                optionalUpdateMessage: 'Yeni versiyon bulundu. Yüklemek ister misiniz?',
              },
              installMode: CodePush.InstallMode.IMMEDIATE,
            });
          }, 500);
        } else {
          this.setState({isAirUpdateChecked: true});
        }
      })
      .finally(() => this.setState({isAirUpdateChecked: true}));

    if (Platform.OS === 'ios') {
      registerForRemoteMessages();
      if (Platform.OS === 'ios') {
        PushNotificationIOS.checkPermissions(({authorizationStatus}) => {
          if (authorizationStatus === 0) {
            PushNotificationIOS.requestPermissions().then(this.saveFCMToken);
          } else {
            this.saveFCMToken();
          }
        });
      } else {
        this.saveFCMToken();
      }
    }
  }

  saveFCMToken = () => {
    firebase
      .messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(token => {
        console.log('Token:', token);
        if (token) {
          // saveTokenToUserInRemote(token);
        } else {
          // regenerateTokenAndSaveAgain();
        }
      });
  };

  render() {
    if (!this.state.isAirUpdateChecked) {
      return (
        <View style={CommonStyles.fCenter}>
          <Text style={CommonStyles.updatingText}>Güncelleme kontrol ediliyor</Text>
          <ActivityIndicator size="small" color="#000" />
        </View>
      );
    }
    return (
      <Provider store={store}>
        <SafeAreaView style={CommonStyles.f1}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </SafeAreaView>
      </Provider>
    );
  }
}

const codePushOptions: CodePushOptions = {
  updateDialog: {
    title: 'Uygulama Güncelleniyor',
  },
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
};

export default CodePush(codePushOptions)(App);
