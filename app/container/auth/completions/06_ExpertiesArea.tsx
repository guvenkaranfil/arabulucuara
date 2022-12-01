import React, {useState, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import styles from './styles/ExpertiesAreaStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from '@routes/stacks/auth/Types';
import {Metrics} from '@utils';
import Input from '@components/input/Input';
import {useLazyGetProfessionsQuery, useStepSixMutation} from '@store/auth/AuthApi';

export interface Props {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'completions/expertiesArea'>;
}

export default function ExpertiesArea({navigation}: Props) {
  // Arabulucu

  // Uzman ve Merkez
  const [aboutMe, setaboutMe] = useState('');
  const [selectedExpertiesArea, setselectedExpertiesArea] = useState(new Map());

  const user = useSelector((state: RootState) => state.user);
  const [getUzamnlıkAlanlari, {data: professions}] = useLazyGetProfessionsQuery();
  const [saveSixStep, {isLoading}] = useStepSixMutation();

  console.log('Professions:', professions);

  useEffect(() => {
    if (user.userRole === 'arabulucu') {
      getUzamnlıkAlanlari({userType: 'arabulucu'});
    }
  }, []);

  const onPressExperties = (expertiesId: number) => {
    var status = !selectedExpertiesArea.get(expertiesId);
    setselectedExpertiesArea(new Map(selectedExpertiesArea.set(expertiesId, status)));
  };

  const saveAndGo = () => {
    console.info('selectedExpertiesArea.keys: ', selectedExpertiesArea.keys());
    let response = {};
    if (user.userRole === 'arabulucu') {
      response = {
        arabulucu: {
          uzmanlikAlanlari: selectedExpertiesArea.keys(),
        },
        uzmanMerkez: null,
      };
    } else {
      response = {
        arabulucu: null,
        uzmanMerkez: {
          hakkimda: aboutMe,
        },
      };
    }

    saveSixStep(response).then(res => {
      console.info('res expertise area:', res);
      if (res?.data?.status === 200) {
        if (user.userRole === 'merkez') {
          navigation.replace('app');
        } else {
          navigation.replace('completions/meditationCenter');
        }
      } else {
        Alert.alert('Bir sorun oluştu', 'Lütfen daha sonra tekrar deneyiniz');
      }
    });
  };

  const _renderArabulucu = () => {
    return (
      <View style={styles.form}>
        <Text style={styles.expertiesLabel}>Arabuluculuk Uzmanlık Alanları</Text>

        {professions?.map((item, index) => (
          <RoundCheckBox
            key={index}
            id={item.id}
            label={item.value}
            isVisible={selectedExpertiesArea.get(item.id)}
            onPress={onPressExperties}
          />
        ))}

        <Text style={styles.expertiesInfo}>
          İlgili uzmanlık alanınızı seçmeniz yeterli olup herhangi bir{'\n'}belge yüklemenize gerek
          bulunmamaktadır.
        </Text>
      </View>
    );
  };

  const _renderMerkezveUzman = () => {
    return (
      <View style={styles.form}>
        <Input
          height={Metrics.hp(200)}
          value={aboutMe}
          onChangeText={setaboutMe}
          placeholder="Hakkımda"
          isMultiLine={true}
        />
      </View>
    );
  };

  const _renderContentForm = () => {
    if (user.userRole === 'merkez' || user.userRole === 'uzman') {
      return _renderMerkezveUzman();
    } else if (user.userRole === 'arabulucu') {
      return _renderArabulucu();
    }
  };

  return (
    <LoginLayout
      showBackButton={true}
      enableKeyboardDismiss={false}
      onPressBack={navigation.goBack}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={200} />

      <View style={styles.step}>
        <Pedometer activeStep={5} totalCount={7} />
        <Text style={styles.stepInfo}>
          Profilinizde yer alan yıldızların parlaması için devam eden{'\n'}aşamaları tamamlamanız
          gerekmektedir.
        </Text>
      </View>

      {_renderContentForm()}

      <View style={styles.footer}>
        <FilledButton label="Kaydet ve Devam Et" onPress={saveAndGo} isLoading={isLoading} />

        <OutlineButton
          label="Data Sonra Dolduracağım"
          onPress={() => navigation.navigate('completions/meditationCenter')}
        />
      </View>
    </LoginLayout>
  );
}
