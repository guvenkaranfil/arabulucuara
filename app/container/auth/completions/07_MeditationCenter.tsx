import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import styles from './styles/MeditationCenterStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import {useStepSevenMutation} from '@store/auth/AuthApi';

export interface Props {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/meditationCenter'>;
}

export default function MeditationCenter({navigation}: Props) {
  const [merkezUyesimi, setmerkezUyesimi] = useState(false);
  const [dernekUyesimi, setdernekUyesimi] = useState(false);
  const [odaUyesimi, setodaUyesimi] = useState(false);
  const [sicilKayitlimi, setsicilKayitlimi] = useState(false);

  const [meditationCenter, setmeditationCenter] = useState('');
  const [meditationAssociation, setmeditationAssociation] = useState('');
  const [memberOfUnion, setmemberOfUnion] = useState('');

  const user = useSelector((state: RootState) => state.user);
  const [saveSevenStep, {isLoading}] = useStepSevenMutation();

  const saveAndFinish = () => {
    saveSevenStep({
      merkezUyesiMi: merkezUyesimi,
      dernekUyesiMi: dernekUyesimi,
      odaUyesiMi: odaUyesimi,
      sicilKayitliMi: sicilKayitlimi,
      merkezAdi: meditationCenter,
      dernekAdi: meditationAssociation,
      odaAdi: memberOfUnion,
    }).then(res => {
      console.log('seven res: ', res);
      if (res?.data?.status === 200) {
        navigation.replace('app');
      } else {
        Alert.alert('Bir sorun oluştu', res?.data?.message ?? 'Lütfen daha sonra tekrar deneyiniz');
      }
    });
  };

  return (
    <LoginLayout showHomeButton={true}>
      <ScrollView contentContainerStyle={styles.contenContainerStyle} bounces={false}>
        <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />

        <View style={styles.step}>
          <Pedometer activeStep={7} totalCount={7} />
          <Text style={styles.stepInfo}>
            Aşağıda yer alan kutucuklara üye olduğunuz{'\n'}birlik/kurum adı yazmanız yeterlidir.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Merkez üyesi mi?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={merkezUyesimi}
                onPress={() => setmerkezUyesimi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!merkezUyesimi}
                onPress={() => setmerkezUyesimi(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Dernek üyesi mi?</Text>
            <View style={styles.formQuestionRow}>
              <RoundCheckBox
                label="Evet"
                isVisible={dernekUyesimi}
                onPress={() => setdernekUyesimi(true)}
              />
              <RoundCheckBox
                label="Hayır"
                isVisible={!dernekUyesimi}
                onPress={() => setdernekUyesimi(false)}
              />
            </View>
          </View>

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Oda üyesi mi?</Text>
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

          <View style={styles.formQuestion}>
            <Text style={styles.questionLabel}>Sicil üyesi mi?</Text>
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

          <Input
            value={meditationCenter}
            onChangeText={setmeditationCenter}
            placeholder="Arabuluculuk Merkezi"
          />
          <Input
            value={meditationAssociation}
            onChangeText={setmeditationAssociation}
            placeholder="Üye Olduğunuz Dernek"
          />
          <Input
            value={memberOfUnion}
            onChangeText={setmemberOfUnion}
            placeholder="Üye Olduğunuz Oda - Birlik"
          />
        </View>

        <View style={styles.footer}>
          <FilledButton label="Üyeliği Tamamla" onPress={saveAndFinish} isLoading={isLoading} />

          <OutlineButton label="Geri" onPress={navigation.goBack} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}
