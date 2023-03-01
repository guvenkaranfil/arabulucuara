import React, {useEffect} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList, UserType} from '@routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {Metrics} from '@utils';

export interface RegisterIdentitiesProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'registerIdentities'>;
}

export default function RegisterIdentities({navigation}: RegisterIdentitiesProps) {
  // useEffect(() => {
  //   navigation.navigate('completions/address');
  // }, []);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={812}>
      <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
        <Header screenTitle="Üye Ol" dynamicHeight={200} />

        <View style={styles.identities}>
          <FilledButton
            label="Arabulucu"
            bgColor="#790F3E"
            onPress={() => navigation.navigate('register', {userType: UserType.arabulucu})}
          />

          <FilledButton
            label="Arabulucuk Merkezi"
            bgColor="#790F3E"
            onPress={() => navigation.navigate('register', {userType: UserType.arabulucuMerkezi})}
          />

          <FilledButton
            label="Uzman"
            bgColor="#790F3E"
            onPress={() => navigation.navigate('register', {userType: UserType.uzman})}
          />
        </View>

        <View style={styles.footer}>
          <OutlineButton label="Giriş Yap" onPress={navigation.goBack} />
        </View>
      </LoginLayout>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  identities: {
    marginTop: Metrics.hp(50),
    height: Metrics.hp(172),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footer: {
    paddingBottom: Metrics.hp(59),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
