import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import AuthInput from '@components/input/AuthInput';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Fonts, Metrics} from 'utils';

export default function AboutMe() {
  const [aboutMe, setaboutMe] = useState('');

  return (
    <LoginLayout showBackButton={true}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />

      <View style={styles.step}>
        <Pedometer activeStep={5} totalCount={7} />
        <Text style={styles.stepInfo}>
          Profilinizde yer alan yıldızların parlaması için devam eden{'\n'}aşamaları tamamlamanız
          gerekmektedir.
        </Text>
      </View>

      <View style={styles.form}>
        <AuthInput
          height={Metrics.hp(200)}
          value={aboutMe}
          onChangeText={setaboutMe}
          placeholder="Hakkımda"
          isMultiLine={true}
        />
      </View>

      <View style={styles.footer}>
        <FilledButton label="Daha sonra dolduracağım" onPress={() => console.log('onPress...')} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
    marginTop: Metrics.hp(20),
  },

  footer: {
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
