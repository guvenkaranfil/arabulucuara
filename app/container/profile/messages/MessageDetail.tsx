import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from '@routes/stacks/profile/Types';

export interface Props {
  route: RouteProp<ProfileNavigatorParamList, 'messageDetail'>;
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'messageDetail'>;
}

export default function MessageDetail({navigation, route}: Props) {
  const {messageId} = route.params;
  return (
    <View>
      <Text>{messageId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
