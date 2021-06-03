import React, {useState} from 'react';
import {Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import styles from './styles/ExpertiesAreaStyle';

export default function ExpertiesArea() {
  const [expertiesArea, setexpertiesArea] = useState(exptertiesArea);
  const [selectedExpertiesArea, setselectedExpertiesArea] = useState(new Map());

  const onPressExperties = (expertiesId: number) => {
    var status = !selectedExpertiesArea.get(expertiesId);
    setselectedExpertiesArea(new Map(selectedExpertiesArea.set(expertiesId, status)));
  };

  return (
    <LoginLayout showBackButton={true} enableKeyboardDismiss={false}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />

      <View style={styles.step}>
        <Pedometer activeStep={5} totalCount={7} />
        <Text style={styles.stepInfo}>
          Profilinizde yer alan yıldızların parlaması için devam eden{'\n'}aşamaları tamamlamanız
          gerekmektedir.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.expertiesLabel}>Arabuluculuk Uzmanlık Alanları</Text>

        {expertiesArea.map((item, index) => (
          <RoundCheckBox
            key={index}
            id={item.id}
            label={item.exptertiesName}
            isVisible={selectedExpertiesArea.get(item.id)}
            onPress={onPressExperties}
          />
        ))}

        <Text style={styles.expertiesInfo}>
          İlgili uzmanlık alanınızı seçmeniz yeterli olup herhangi bir{'\n'}belge yüklemenize gerek
          bulunmamaktadır.
        </Text>
      </View>

      <View style={styles.footer}>
        <FilledButton label="Daha sonra dolduracağım" onPress={() => console.log('onPress...')} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}

const exptertiesArea = [
  {
    id: 1,
    exptertiesName: 'Genel Arabuluculuk',
  },
  {
    id: 2,
    exptertiesName: 'İş Hukuku Genel Uzmanlık Alanı',
  },

  {
    id: 3,
    exptertiesName: 'Ticaret Hukuku Genel Uzmanlık Alanı',
  },

  {
    id: 4,
    exptertiesName: 'Tüketici Hukuku Genel Uzmanlık Alanı',
  },

  {
    id: 5,
    exptertiesName: 'Banka ve Finans Hukuku Özel Uzmanlık Alanı',
  },

  {
    id: 6,
    exptertiesName: 'Sigorta Hukuku Özel Uzmanlık Alanı',
  },

  {
    id: 7,
    exptertiesName: 'İnşaat Hukuku Özel Uzmanlık Alanı',
  },

  {
    id: 8,
    exptertiesName: 'Sağlık Hukuku Özel Uzmanlık Alanı',
  },

  {
    id: 9,
    exptertiesName: 'Fikri ve Sinai Haklar Hukuku Özel',
  },
];
