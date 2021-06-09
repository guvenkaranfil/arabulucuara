import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Input from '@components/input/Input';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import styles from './styles/LoginStyles';

export interface LoginProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'login'>;
}

export default function Login({navigation}: LoginProps) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [hidePassword, sethidePassword] = useState(true);

  return (
    <LoginLayout showBackButton={true}>
      <ScrollView bounces={false}>
        <Header screenTitle="Üye Girişi" dynamicHeight={200} />

        <View style={styles.inputs}>
          <Input
            value={email}
            onChangeText={setemail}
            placeholder="E-Posta"
            keyboardType="email-address"
          />
          <Input
            value={password}
            onChangeText={setpassword}
            placeholder="Şifre"
            isPassowordInput={true}
            secureTextEntry={hidePassword}
            onPressSecure={() => sethidePassword(prev => !prev)}
          />
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
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
          <OutlineButton label="Üye Ol" onPress={() => navigation.navigate('registerIdentities')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}

const dashedLine = ' - - - - - ';
