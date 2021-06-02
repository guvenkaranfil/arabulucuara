import React, {useState} from 'react';
import {Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import RoundCheckBox from 'components/checkbox/RoundCheckBox';
import styles from './styles/ProfessionStyle';

export default function ProfessionType() {
  const [registrationYear, setregistrationYear] = useState({id: undefined, year: undefined});
  const [otherProfession, setotherProfession] = useState({id: undefined, name: undefined});
  const [isMeditationCenter, setisMeditationCenter] = useState(true);
  const [isMemberOfMeditationCenter, setisMemberOfMeditationCenter] = useState(true);

  return (
    <LoginLayout enableKeyboardDismiss={false} showHomeButton={true}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={170} />

      <View style={styles.step}>
        <Pedometer activeStep={3} totalCount={7} />
        <Text style={styles.stepInfo}>
          Aşağıda yer alan bilgileri girdiğinizde{'\n'}üyelik işleminiz tamamlanacaktır.
        </Text>
      </View>

      <View style={styles.form}>
        <DropDownPicker
          value={registrationYear?.year}
          placeholder="Arabulucu Sicil Kayıt Yılı"
          items={[
            {id: 1, year: 2000},
            {id: 2, year: 2021},
          ]}
          renderItem={item => item.year}
          onPress={setregistrationYear}
        />

        <DropDownPicker
          value={otherProfession?.name}
          placeholder="Diğer Mesleğiniz"
          items={[
            {id: 1, name: 'Arabulucu 1'},
            {id: 2, name: 'Arabulucu 2'},
          ]}
          renderItem={item => item.name}
          onPress={setotherProfession}
        />
      </View>

      <View style={styles.formQuestion}>
        <Text style={styles.questionLabel}>Arabuluculuk merkezi üyesi misiniz?</Text>
        <View style={styles.formQuestionRow}>
          <RoundCheckBox
            label="Evet"
            isVisible={isMeditationCenter}
            onPress={() => setisMeditationCenter(true)}
          />
          <RoundCheckBox
            label="Hayır"
            isVisible={!isMeditationCenter}
            onPress={() => setisMeditationCenter(false)}
          />
        </View>
      </View>

      <View style={styles.formQuestion}>
        <Text style={styles.questionLabel}>Arabuluculuk derneği üyesi misiniz?</Text>
        <View style={styles.formQuestionRow}>
          <RoundCheckBox
            label="Evet"
            isVisible={isMemberOfMeditationCenter}
            onPress={() => setisMemberOfMeditationCenter(true)}
          />
          <RoundCheckBox
            label="Hayır"
            isVisible={!isMemberOfMeditationCenter}
            onPress={() => setisMemberOfMeditationCenter(false)}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <FilledButton label="Devam Et" onPress={() => console.log('onPress...')} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}
