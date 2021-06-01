import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Metrics} from 'utils';
import {RegisterIdentitiesNavigationProp} from '../../routes/stacks/auth/AuthStack';

export default function RegisterIdentities({navigation}: RegisterIdentitiesNavigationProp) {
  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <Header screenTitle="Üye Ol" dynamicHeight={200} />

      <View style={styles.identities}>
        <FilledButton label="Arabulucu" bgColor="#790F3E" onPress={() => console.log('onPress.')} />

        <FilledButton
          label="Arabulucuk Merkezi"
          bgColor="#790F3E"
          onPress={() => console.log('onPress.')}
        />

        <FilledButton label="Uzman" bgColor="#790F3E" onPress={() => console.log('onPress.')} />
      </View>

      <View style={styles.footer}>
        <OutlineButton label="Giriş Yap" onPress={navigation.goBack} />
      </View>
    </LoginLayout>
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
