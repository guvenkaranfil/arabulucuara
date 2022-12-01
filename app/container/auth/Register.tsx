import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList, UserType} from '@routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Input from '@components/input/Input';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {Metrics} from '@utils';
import {RouteProp} from '@react-navigation/native';
import {
  useSignUpArabulucuMutation,
  useSignUpMerkezMutation,
  useSignUpUzmanMutation,
} from '@store/user/UserApi';

interface RegisterProps {
  route: RouteProp<AuthNavigatorParamList, 'register'>;
  navigation: StackNavigationProp<AuthNavigatorParamList, 'register'>;
}

export default function Register({route, navigation}: RegisterProps) {
  const {userType} = route.params;
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [email, setemail] = useState('');
  const [registrationNumber, setregistrationNumber] = useState('');
  const [centerName, setcenterName] = useState('');
  const [commercialTitle, setcommercialTitle] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [hidePassword, sethidePassword] = useState(true);
  const [membershipContract, setmembershipContract] = useState(false);
  const [communicationText, setcommunicationText] = useState(false);
  const [eCommunication, seteCommunication] = useState(false);

  const [signUpArabulucu, {isLoading: isArabulucuRegisterLoading}] = useSignUpArabulucuMutation();
  const [signUpMerkez, {isLoading: isMerkezRegisterLoading}] = useSignUpMerkezMutation();
  const [signUpUzman, {isLoading: isUzmanRegisterLoading}] = useSignUpUzmanMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setname('Güven');
    //   setsurname('Karanfil');
    //   setemail('guvenkaranfil235@gmail.com');
    //   setcenterName('Guven Arabulucu Ara');
    //   setusername('guvenkaranfil');
    //   setpassword('123456');
    //   setcommercialTitle('Ticari Ünvan - Güven');
    // }, 3000);
  }, []);

  const signUp = () => {
    // navigation.navigate('welcome', {name});
    if (userType === UserType.arabulucu) {
      signUpArabulucu({
        uyelikTur: 'arabulucu',
        arabulucu: {
          adi: name,
          soyadi: surname,
          email: email,
          sicilNo: registrationNumber,
          kullaniciAdi: username,
          sifre: password,
        },
      }).then(() => {
        navigation.replace('completions/address');
      });
    } else if (userType === UserType.arabulucuMerkezi) {
      signUpMerkez({
        uyelikTur: 'merkez',
        merkez: {
          adi: name,
          soyadi: surname,
          email: email,
          merkezAdi: centerName,
          kullaniciAdi: username,
          sifre: password,
          ticariUnvan: commercialTitle,
        },
      }).then(() => {
        navigation.replace('completions/address');
      });
    } else if (userType === UserType.uzman) {
      signUpUzman({
        uyelikTur: 'uzman',
        uzman: {
          adi: name,
          soyadi: surname,
          email: email,
          kullaniciAdi: username,
          sifre: password,
        },
      }).then(res => {
        console.log('res');
        navigation.replace('completions/address');
      });
    }
  };

  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Header screenTitle="Arabulucu Üye Ol" dynamicHeight={200} />

        <View style={styles.inputs}>
          <Input value={name} onChangeText={setname} placeholder="İsim" />
          <Input value={surname} onChangeText={setsurname} placeholder="Soyisim" />

          <Input
            value={email}
            onChangeText={setemail}
            placeholder="E-Posta"
            keyboardType="email-address"
          />

          {userType === UserType.arabulucu && (
            <Input
              value={registrationNumber}
              onChangeText={setregistrationNumber}
              placeholder="Arabulucu Sicil No"
            />
          )}

          {userType === UserType.arabulucuMerkezi && (
            <Input value={centerName} onChangeText={setcenterName} placeholder="Merkez İsmi" />
          )}

          {userType === UserType.arabulucuMerkezi && (
            <Input
              value={commercialTitle}
              onChangeText={setcommercialTitle}
              placeholder="Ticari Ünvan"
            />
          )}

          <Input value={username} onChangeText={setusername} placeholder="Kullanıcı Adı" />

          <Input
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
          <FilledButton
            label="Üye Ol"
            onPress={signUp}
            isLoading={
              isArabulucuRegisterLoading || isMerkezRegisterLoading || isUzmanRegisterLoading
            }
          />
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
