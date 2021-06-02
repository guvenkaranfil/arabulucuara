import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import AuthInput from '@components/input/AuthInput';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Fonts, Metrics} from 'utils';

export interface PersonalProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/personal'>;
}

export default function Personal({navigation}: PersonalProps) {
  const [gender, setgender] = useState({id: undefined, name: undefined});
  const [phoneNumber, setphoneNumber] = useState('');

  return (
    <LoginLayout showHomeButton={true}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
        <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={170} />

        <View style={styles.step}>
          <Pedometer activeStep={2} totalCount={7} />
          <Text style={styles.stepInfo}>
            Aşağıda yer alan bilgileri girdiğinizde{'\n'}üyelik işleminiz tamamlanacaktır.
          </Text>
        </View>

        <View style={styles.form}>
          <DropDownPicker
            value={gender?.name}
            placeholder="Cinsiyet"
            items={[
              {id: 1, name: 'Bayan'},
              {id: 2, name: 'Erkek'},
            ]}
            renderItem={item => item.name}
            onPress={setgender}
          />

          <AuthInput
            value={phoneNumber}
            onChangeText={setphoneNumber}
            placeholder="Telefon Numarası"
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.footer}>
          <FilledButton label="Devam Et" onPress={() => console.log('onPress...')} />

          <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 28,
  },

  step: {
    alignItems: 'center',
  },

  stepInfo: {
    paddingTop: Metrics.hp(20),
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  form: {
    marginTop: Metrics.hp(29),
    alignItems: 'center',
  },

  footer: {
    marginTop: Metrics.hp(29),
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
