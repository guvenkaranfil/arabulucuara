import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import AuthInput from '@components/input/AuthInput';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';

export default function Register() {
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
    <LoginLayout showBackButton={true}>
      <ScrollView>
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
      </ScrollView>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  inputs: {
    alignItems: 'center',
  },

  conditions: {
    paddingHorizontal: 25,
  },
});
