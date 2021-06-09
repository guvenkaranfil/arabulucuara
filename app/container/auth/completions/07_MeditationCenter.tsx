import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import styles from './styles/MeditationCenterStyle';

export default function MeditationCenter() {
  const [meditationCenter, setmeditationCenter] = useState('');
  const [meditationAssociation, setmeditationAssociation] = useState('');
  const [memberOfUnion, setmemberOfUnion] = useState('');

  return (
    <LoginLayout showHomeButton={true}>
      <ScrollView contentContainerStyle={styles.contenContainerStyle} bounces={false}>
        <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />

        <View style={styles.step}>
          <Pedometer activeStep={7} totalCount={7} />
          <Text style={styles.stepInfo}>
            Aşağıda yer alan kutucuklara üye olduğunuz{'\n'}birlik/kurum adı yazmanız yeterlidir.
            gerekmektedir.
          </Text>
        </View>

        <View style={styles.form}>
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
          <FilledButton label="Daha sonra dolduracağım" onPress={() => console.log('onPress...')} />

          <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
        </View>
      </ScrollView>
    </LoginLayout>
  );
}
