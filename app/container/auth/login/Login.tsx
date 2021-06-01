import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import AuthInput from '@components/input/AuthInput';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Metrics} from 'utils';

export default function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [hidePassword, sethidePassword] = useState(true);

  return (
    <LoginLayout showBackButton={true}>
      <ScrollView bounces={false}>
        <Header screenTitle="Üye Girişi" dynamicHeight={200} />

        <View style={styles.inputs}>
          <AuthInput
            value={email}
            onChangeText={setemail}
            placeholder="E-Posta"
            keyboardType="email-address"
          />
          <AuthInput
            value={password}
            onChangeText={setpassword}
            placeholder="Şifre"
            isPassowordInput={true}
            secureTextEntry={hidePassword}
            onPressSecure={() => sethidePassword(prev => !prev)}
          />
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signIn}>
          <FilledButton label="Giriş Yap" onPress={() => console.log('onPress..')} />
        </View>

        <View style={styles.footer}>
          <View style={styles.footerLabel}>
            <Text style={styles.footerLabelText}>{dashedLine}</Text>
            <Text style={styles.footerLabelText}>veya</Text>
            <Text style={styles.footerLabelText}>{dashedLine}</Text>
          </View>
          <OutlineButton label="Üye Ol" onPress={() => console.log('onPress..')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}

const dashedLine = ' - - - - - ';
const styles = StyleSheet.create({
  inputs: {
    alignItems: 'center',
  },

  forgotPassword: {
    paddingRight: 25,
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },

  signIn: {
    paddingTop: Metrics.hp(67),
    alignItems: 'center',
  },

  footer: {
    paddingTop: Metrics.hp(100),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  footerLabel: {
    paddingBottom: Metrics.hp(28),
    flexDirection: 'row',
  },

  footerLabelText: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#CBC9D9',
  },
});
