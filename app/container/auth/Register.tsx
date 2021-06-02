import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import AuthInput from '@components/input/AuthInput';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {Metrics} from 'utils';

interface RegisterProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'register'>;
}

export default function Register({navigation}: RegisterProps) {
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [email, setemail] = useState('');
  const [registrationNumber, setregistrationNumber] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [hidePassword, sethidePassword] = useState(true);
  const [membershipContract, setmembershipContract] = useState(false);
  const [communicationText, setcommunicationText] = useState(false);
  const [eCommunication, seteCommunication] = useState(false);

  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Header screenTitle="Arabulucu Üye Ol" dynamicHeight={200} />

        <View style={styles.inputs}>
          <AuthInput value={name} onChangeText={setname} placeholder="İsim" />
          <AuthInput value={surname} onChangeText={setsurname} placeholder="Soyisim" />

          <AuthInput
            value={email}
            onChangeText={setemail}
            placeholder="E-Posta"
            keyboardType="email-address"
          />

          <AuthInput
            value={registrationNumber}
            onChangeText={setregistrationNumber}
            placeholder="Arabulucu Sicil No"
          />

          <AuthInput value={username} onChangeText={setusername} placeholder="Kullanıcı Adı" />

          <AuthInput
            value={password}
            onChangeText={setpassword}
            placeholder="Şifre"
            isPassowordInput={true}
            secureTextEntry={hidePassword}
            onPressSecure={() => sethidePassword(prev => !prev)}
          />
        </View>

        <View style={styles.conditions}>
          <RoundCheckBox
            label={`Üyelik sözleşmesini ve eklerini${'\n'}kabul ediyorum.`}
            isVisible={membershipContract}
            onPress={() => setmembershipContract(prev => !prev)}
          />

          <RoundCheckBox
            label={'Elektronik ticari iletişim metnini okudum, anladım ve kabul ediyorum.'}
            isVisible={communicationText}
            onPress={() => setcommunicationText(prev => !prev)}
          />

          <RoundCheckBox
            label={'İletişim bilgilerime e-ileti ve anında bildirim gönderilmesine izin veriyorum.'}
            isVisible={eCommunication}
            onPress={() => seteCommunication(prev => !prev)}
          />
        </View>

        <View style={styles.footer}>
          <FilledButton label="Üye Ol" onPress={() => console.log('onPress..')} />
          <OutlineButton label="Zaten Üyeyim" onPress={() => navigation.navigate('login')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 28,
  },

  inputs: {
    alignItems: 'center',
  },

  conditions: {
    paddingHorizontal: 25,
  },

  footer: {
    marginTop: Metrics.hp(20),
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
