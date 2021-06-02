import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import {Fonts, Metrics} from 'utils';

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

  return (
    <LoginLayout showHomeButton={true} onPressHouse={() => console.log('onPress..')}>
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
    marginTop: Metrics.hp(29),
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
