import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import AuthInput from '@components/input/AuthInput';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import styles from './styles/PersonalStyles';

export interface PersonalProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/personal'>;
}

export default function Personal({navigation}: PersonalProps) {
  const [gender, setgender] = useState({id: undefined, name: undefined});
  const [phoneNumber, setphoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setshowDateTimePicker] = useState(false);

  const handleConfirm = (pickedDate: Date) => {
    setDate(pickedDate);
    setshowDateTimePicker(false);
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
            <Text style={styles.dateLabel}>{moment(date).format('DD-MM-YYYY')}</Text>
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
