import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import AuthInput from '@components/input/AuthInput';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {Metrics} from '@utils';
import {ForgotPasswordNavigationProp} from '../../routes/stacks/auth/AuthStack';

export default function ForgotPassword({navigation}: ForgotPasswordNavigationProp) {
  const [email, setemail] = useState('');
  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <Header screenTitle="Şifremi Unuttum" dynamicHeight={200} />

      <View style={styles.form}>
        <AuthInput
          value={email}
          onChangeText={setemail}
          placeholder="E-Posta"
          keyboardType="email-address"
        />

        <View style={styles.actionButtons}>
          <FilledButton label="Gönder" onPress={() => console.log('onPress..')} />

          <OutlineButton label="Giriş Yap" onPress={navigation.goBack} />
        </View>
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },

  actionButtons: {
    marginTop: Metrics.hp(17),
    height: Metrics.hp(125),
    justifyContent: 'space-between',
  },
});
