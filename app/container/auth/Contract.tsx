import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';
import {CommonStyles, Fonts} from '@utils';
import LoginLayout from '@components/layouts/LoginLayout';
import WebView from 'react-native-webview';

interface ContractProps {
  contractName?: string;
  contractURL: string;
}

interface Props {
  route: RouteProp<AuthNavigatorParamList, 'contract'>;
  navigation: StackNavigationProp<AuthNavigatorParamList, 'contract'>;
}

export default function Contract({navigation, route}: Props) {
  const {contractName, contractURL} = route.params;

  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <View style={CommonStyles.container}>
        <Text style={styles.contractName}>{contractName}</Text>
        <WebView source={{uri: contractURL}} />
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  articleContent: {marginVertical: 25},

  contentStyle: {
    paddingBottom: 40,
  },

  contractName: {
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: Fonts.robotoBold,
    alignSelf: 'center',
  },
});
