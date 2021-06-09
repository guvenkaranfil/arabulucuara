import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import Input from '@components/input/Input';
import {Fonts, Metrics} from 'utils';
import FilledButton from 'components/buttons/FilledButton';

export interface AddressProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/address'>;
}

export default function Address({navigation}: AddressProps) {
  const [cities, setcities] = useState(cityItems);
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [towns, settowns] = useState(cityItems);
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [districts, setdistricts] = useState(cityItems);
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [address, setaddress] = useState('');

  return (
    <LoginLayout showHomeButton={true} onPressHouse={() => console.log('onPress..')}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
        <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={170} />

        <View style={styles.step}>
          <Pedometer activeStep={1} totalCount={7} />
          <Text style={styles.stepInfo}>
            Aşağıda yer alan bilgileri girdiğinizde{'\n'}üyelik işleminiz tamamlanacaktır.
          </Text>
        </View>

        <View style={styles.form}>
          <DropDownPicker
            value={selectedCity?.name}
            placeholder="İl Seçiniz"
            items={cities}
            renderItem={item => item.name}
            onPress={setselectedCity}
          />

          <DropDownPicker
            value={selectedTown?.name}
            placeholder="İlçe Seçiniz"
            items={towns}
            renderItem={item => item.name}
            onPress={setselectedTown}
          />

          <DropDownPicker
            value={selectedDistrict?.name}
            placeholder="Semt Seçiniz"
            items={districts}
            renderItem={item => item.name}
            onPress={setselectedDistrict}
          />

          <Input
            height={100}
            value={address}
            onChangeText={setaddress}
            placeholder="E-Posta"
            keyboardType="email-address"
            isMultiLine={true}
          />
        </View>

        <View style={styles.footer}>
          <FilledButton label="Devam Et" onPress={() => console.log('onPress..')} />
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
    marginTop: Metrics.hp(38),
    alignItems: 'center',
  },
});

const cityItems = [
  {
    id: 1,
    name: 'Sakarya',
  },
  {
    id: 1,
    name: 'Adana',
  },
  {
    id: 1,
    name: 'Sakarya',
  },
  {
    id: 1,
    name: 'Sakarya',
  },
];
