import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';
import {RootState} from '@store/RootStore';
import {useSelector} from 'react-redux';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import styles from './styles/PersonalStyles';
import {Labels} from '@utils';
import {useStepTwoMutation} from '@store/auth/AuthApi';

export interface PersonalProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/personal'>;
}

export default function Personal({navigation}: PersonalProps) {
  const [gender, setgender] = useState({id: undefined, name: undefined});
  const [phoneNumber, setphoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setshowDateTimePicker] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const [saveStepTwo, result] = useStepTwoMutation();

  console.log('user.userRole:', user.userRole);
  const handleConfirm = (pickedDate: Date) => {
    setDate(pickedDate);
    setshowDateTimePicker(false);
  };

  const saveAndContinue = () => {
    let response = {};
    if (user.userRole === 'merkez') {
      response = {
        arabulucuUzman: null,
        merkez: {
          ad: user.name,
          soyad: user.surname,
          dogumTarih: date.toISOString(),
          cinsiyet: gender.id,
        },
      };
    } else {
      response = {
        arabulucuUzman: {
          dogumTarih: date,
          cinsiyet: gender.id,
          telefon: phoneNumber,
        },
        merkez: null,
      };
    }

    console.log('response: ', response);
    saveStepTwo(response).then(() => {
      navigation.replace('completions/professionType');
    });
  };

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
          <Pressable style={styles.dateTime} onPress={() => setshowDateTimePicker(true)}>
            <Text style={Labels.label16RegularViolet}>{moment(date).format('DD-MM-YYYY')}</Text>
          </Pressable>
          {showDateTimePicker && (
            <DateTimePickerModal
              isVisible={true}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => setshowDateTimePicker(false)}
              cancelTextIOS="Vazgeç"
              confirmTextIOS="Onayla"
            />
          )}

          <DropDownPicker
            value={gender?.name}
            placeholder="Cinsiyet"
            items={[
              {id: 2, name: 'Kadın'},
              {id: 1, name: 'Erkek'},
            ]}
            renderItem={item => item.name}
            onPress={setgender}
          />

          {user.userRole === 'uzman' ||
            (user.userRole === 'arabulucu' && (
              <Input
                value={phoneNumber}
                onChangeText={setphoneNumber}
                placeholder="Telefon Numarası"
                keyboardType="number-pad"
              />
            ))}
        </View>

        <View style={styles.footer}>
          <FilledButton label="Devam Et" onPress={saveAndContinue} isLoading={result.isLoading} />

          <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}
