import React, {useRef, ReactElement} from 'react';
import {View, Animated, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {CommonStyles} from '@utils';
import styles from './styles/ProfileLayoutStyle';
import MediationCenter from './components/MediationCenter';
import IndividualMediator from './components/IndividualMediator';

import {BackIcon, LetterIcon} from '@icons';
import {Profile} from '@search/components/SearchProfile';

interface ScreenProps {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
  children: ReactElement;
  user: Profile;
}

export default function ProfileLayout({navigation, children, user}: ScreenProps) {
  const linearColors = ['#790633', '#BA1858'];
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacityNameSurname = scrollY.interpolate({
    inputRange: [50, 100],
    outputRange: [0.5, 1],
  });

  const _renderHeader = () => (
    <View style={styles.screenHeader}>
      <Pressable style={styles.left} disabled={!navigation.canGoBack()} onPress={navigation.goBack}>
        <BackIcon width={17} height={12} stroke="#fff" />
      </Pressable>

      <View style={styles.screenHeaderCenter}>
        <Animated.Text
          numberOfLines={1}
          style={[styles.screenTitle, {opacity: opacityNameSurname}]}>
          {user.nameSurname}
        </Animated.Text>
      </View>

      <View style={styles.right}>
        <LetterIcon width={20} height={17} />
      </View>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      {_renderHeader()}
      <Animated.ScrollView
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
          useNativeDriver: true,
        })}
        scrollEventThrottle={16}>
        <LinearGradient style={styles.container} colors={linearColors}>
          {user.userType === 'Arabulucu' ? (
            <IndividualMediator {...user} />
          ) : (
            <MediationCenter {...user} />
          )}
        </LinearGradient>
        {children}
      </Animated.ScrollView>
    </View>
  );
}
