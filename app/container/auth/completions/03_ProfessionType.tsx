import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Fonts, Metrics} from 'utils';
import RoundCheckBox from 'components/checkbox/RoundCheckBox';

export default function ProfessionType() {
  const [registrationYear, setregistrationYear] = useState({id: undefined, year: undefined});
  const [otherProfession, setotherProfession] = useState({id: undefined, name: undefined});
  const [isMeditationCenter, setisMeditationCenter] = useState(true);
  const [isMemberOfMeditationCenter, setisMemberOfMeditationCenter] = useState(true);

  return (
    <LoginLayout enableKeyboardDismiss={false} showHomeButton={true}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
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

  formQuestion: {
    paddingLeft: 28,
    marginBottom: 20,
  },

  formQuestionRow: {
    marginTop: Metrics.hp(10),
    flexDirection: 'row',
    width: 180,
    justifyContent: 'space-between',
  },

  questionLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  footer: {
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
