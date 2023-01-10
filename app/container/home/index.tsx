import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';
import {useGetHomeQuery} from './HomeApi';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import FullScreenLoader from '@components/loader/FullScreenLoader';
import ForLoggedUser from './ForLoggedUser';
import ForNonLoggedUser from './ForNonLoggedUser';
import {HomeNavigatorParamList} from '@routes/stacks/home/Types';
import {StackNavigationProp} from '@react-navigation/stack';

export interface Props {
  navigation: StackNavigationProp<HomeNavigatorParamList, 'home'>;
}

const showNotification = (notification: any) => {
  console.log('Showing notification');
  console.log(JSON.stringify(notification));
  PushNotification.localNotification({
    title: notification.title,
    message: notification.body!,
  });
};

const onMessage = () => {
  firebase.messaging().onMessage(response => {
    showNotification(response.data!.notification);
  });
};

export default function Index({navigation}: Props) {
  const haveUser = useSelector(isUserLoggedIn);
  const {data, isLoading, isFetching, refetch} = useGetHomeQuery();

  useEffect(() => {
    const requestPermissions = () => {
      firebase
        .messaging()
        .requestPermission()
        .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
          if (status === 1) {
            console.log('Authorized');
            onMessage();
          } else {
            console.log('Not authorized');
          }
        })
        .catch(e => console.log(e));
    };

    const getToken = () => {
      firebase
        .messaging()
        .getToken(firebase.app().options.messagingSenderId)
        .then(x => console.log(x))
        .catch(e => console.log(e));
    };

    const registerForRemoteMessages = () => {
      firebase
        .messaging()
        .registerDeviceForRemoteMessages()
        .then(() => {
          console.log('Registered');
          // requestPermissions();
        })
        .catch(e => console.log(e));
    };

    registerForRemoteMessages();
    // getToken();
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return haveUser ? (
    <ForLoggedUser
      banners={data?.banners}
      operations={data?.operations}
      siteNews={data?.siteNews}
      articles={data?.articles}
      users={data?.users}
      isRefreshing={isFetching}
      refetch={refetch}
      openArticleDetail={(id: number) => {
        navigation.navigate('portal', {screen: 'articles', params: {articleId: id}});
      }}
    />
  ) : (
    <ForNonLoggedUser
      banners={data?.banners}
      siteNews={data?.siteNews}
      users={data?.users}
      refetch={refetch}
      isRefreshing={isFetching}
      onPressLogin={() => navigation.navigate('auth', {screen: 'login'})}
    />
  );
}
