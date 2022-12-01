import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {Fonts, Metrics} from '@utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import {useStepFiveMutation} from '@store/auth/AuthApi';

export interface Props {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/aboutMe'>;
}

export default function AboutMe({navigation}: Props) {
  // Arabulucu
  const [aboutMe, setaboutMe] = useState('');

  // Merkez
  /*
      "egitimVeriyorMu": true,
    "isBirligiVarMi": true,
    "kiralamaVarMi": true,
    "tahkimVarMi": true,
    "uzmanGorusVarMi": true
  */
  const [egitimVeriyormu, setegitimVeriyormu] = useState(false);
  const [isBirligiVarmi, setisBirligiVarmi] = useState(false);
  const [kiralamaVarmi, setkiralamaVarmi] = useState(false);
  const [tahkimVarmi, settahkimVarmi] = useState(false);
  const [uzmanGorusuVarmi, setuzmanGorusuVarmi] = useState(false);

  // Uzman
  /*
    "sicileKayitliMi": true,
    "merkezeUyeMi": true,
    "odaUyesiMi": true
  */
  const [sicilKayitlimi, setsicilKayitlimi] = useState(false);
  const [merkezUyemi, setmerkezUyemi] = useState(false);
  const [odaUyesimi, setodaUyesimi] = useState(false);

  const user = useSelector((state: RootState) => state.user);
  const [saveFiveStep, {isLoading}] = useStepFiveMutation();

  const _renderArabulucu = () => {
    return (
      <>
        <View style={styles.form}>
          <Input
            height={Metrics.hp(200)}
            value={aboutMe}
            onChangeText={setaboutMe}
            placeholder="Hakkımda"
            isMultiLine={true}
          />
        </View>
      </>
    );
  };

  const _renderUzman = () => {
    return (
      <>
        <View style={[styles.form, styles.questionFrom]}>
          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Sicil Kayılı mı?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={sicilKayitlimi}
                onPress={() => setsicilKayitlimi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!sicilKayitlimi}
                onPress={() => setsicilKayitlimi(false)}
              />
            </View>
          </View>
        </View>

        <View style={[styles.form, styles.questionFrom]}>
          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Merkez üyesi mi?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={merkezUyemi}
                onPress={() => setmerkezUyemi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!merkezUyemi}
                onPress={() => setmerkezUyemi(false)}
              />
            </View>
          </View>
        </View>

        <View style={[styles.form, styles.questionFrom]}>
          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Merkez üyesi mi?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={odaUyesimi}
                onPress={() => setodaUyesimi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!odaUyesimi}
                onPress={() => setodaUyesimi(false)}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  const _renderMerkez = () => {
    return (
      <>
        <View style={[styles.form, styles.questionFrom]}>
          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Eğitim veriyor mu?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={egitimVeriyormu}
                onPress={() => setegitimVeriyormu(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!egitimVeriyormu}
                onPress={() => setegitimVeriyormu(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>İş Birliği Var mı?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={isBirligiVarmi}
                onPress={() => setisBirligiVarmi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!isBirligiVarmi}
                onPress={() => setisBirligiVarmi(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Kiralama Var mı?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={kiralamaVarmi}
                onPress={() => setkiralamaVarmi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!kiralamaVarmi}
                onPress={() => setkiralamaVarmi(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Takım Var mı?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={tahkimVarmi}
                onPress={() => settahkimVarmi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!tahkimVarmi}
                onPress={() => settahkimVarmi(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Uzman Görüş Var mı?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={uzmanGorusuVarmi}
                onPress={() => setuzmanGorusuVarmi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!uzmanGorusuVarmi}
                onPress={() => setuzmanGorusuVarmi(false)}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  const _renderFormContent = () => {
    if (user.userRole === 'merkez') {
      return _renderMerkez();
    } else if (user.userRole === 'arabulucu') {
      return _renderArabulucu();
    } else if (user.userRole === 'uzman') {
      return _renderUzman();
    }
  };

  const saveAndGo = () => {
    let response = {};
    if (user.userRole === 'arabulucu') {
      response = {
        arabulucu: {
          hakkimda: aboutMe,
        },
        uzman: null,
        merkez: null,
      };
    } else if (user.userRole === 'merkez') {
      response = {
        arabulucu: null,
        uzman: null,
        merkez: {
          egitimVeriyorMu: egitimVeriyormu,
          isBirligiVarMi: isBirligiVarmi,
          kiralamaVarMi: kiralamaVarmi,
          tahkimVarMi: tahkimVarmi,
          uzmanGorusVarMi: uzmanGorusuVarmi,
        },
      };
    } else {
      response = {
        arabulucu: null,
        uzman: {
          sicilKayitlimi: sicilKayitlimi,
          merkezUyemi: merkezUyemi,
          odaUyesimi: odaUyesimi,
        },
        merkez: null,
      };
    }

    saveFiveStep(response).then(() => {
      navigation.replace('completions/expertiesArea');
    });
  };

  return (
    <LoginLayout showBackButton={true} onPressBack={navigation.goBack}>
      <ScrollView style={styles.f1}>
        <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />
        <View style={styles.step}>
          <Pedometer activeStep={5} totalCount={7} />
          <Text style={styles.stepInfo}>
            Profilinizde yer alan yıldızların parlaması için devam eden{'\n'}aşamaları tamamlamanız
            gerekmektedir.
          </Text>
        </View>

        {_renderFormContent()}

        <View style={styles.footer}>
          <FilledButton label="Kaydet ve Devam Et" onPress={saveAndGo} isLoading={isLoading} />
          <OutlineButton
            label="Daha sonra dolduracağım"
            onPress={() => navigation.navigate('completions/expertiesArea')}
          />
        </View>

        <View style={styles.pb50} />
      </ScrollView>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  f1: {flex: 1},
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

  questionFrom: {
    alignItems: 'flex-start',
  },

  pb50: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});
