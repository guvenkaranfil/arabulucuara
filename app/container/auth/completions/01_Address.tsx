import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import Input from '@components/input/Input';
import {Fonts, Metrics} from '@utils';
import FilledButton from '@components/buttons/FilledButton';
import {useGetCitiesQuery, useLazyGetCitiesQuery} from '@home/HomeApi';
import {useStepOneMutation} from '@store/auth/AuthApi';

export interface AddressProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/address'>;
}

export default function Address({navigation}: AddressProps) {
  // const [cities, setcities] = useState(cityItems);
  const [selectedCity, setselectedCity] = useState({id: undefined, value: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, value: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, value: undefined});
  const [address, setaddress] = useState('');

  const {data: cities} = useGetCitiesQuery({type: 'ilce'});
  const [trigger, result] = useLazyGetCitiesQuery();
  const [getDistricts, distrctsResult] = useLazyGetCitiesQuery();

  const [completeStepOne, {isLoading: completeLoading}] = useStepOneMutation();

  const selectCity = item => {
    setselectedCity(item);
    trigger({id: item.id, type: 'ilce'});
    setselectedTown({id: undefined, value: undefined});
    setselectedDistrict({id: undefined, value: undefined});
  };

  const selectTown = item => {
    setselectedDistrict({id: undefined, value: undefined});
    setselectedTown({id: item.id, value: item.value});
    getDistricts({id: item.id, type: 'mahalle'});
  };

  const saveAndContinue = () => {
    if (selectedTown) {
      console.log('selectedDistrict.id:', selectedDistrict.id);
      completeStepOne({mahalleId: selectedDistrict.id, adres: address}).then(() => {
        navigation.replace('completions/personal');
      });
    }
  };

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
            value={selectedCity?.value}
            placeholder="İl Seçiniz"
            items={cities ?? []}
            renderItem={item => item.value}
            onPress={selectCity}
          />

          <DropDownPicker
            value={selectedTown?.value}
            placeholder="İlçe Seçiniz"
            items={result.data ?? []}
            renderItem={item => item.value}
            onPress={selectTown}
          />

          <DropDownPicker
            value={selectedDistrict?.value}
            placeholder="Mahalle Seçiniz"
            items={distrctsResult.data ?? []}
            renderItem={item => item.value}
            onPress={item => setselectedDistrict({id: item.id, value: item.value})}
          />

          <Input
            height={100}
            value={address}
            onChangeText={setaddress}
            placeholder="Adres"
            isMultiLine={true}
          />
        </View>

        <View style={styles.footer}>
          <FilledButton label="Devam Et" onPress={saveAndContinue} isLoading={completeLoading} />
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
