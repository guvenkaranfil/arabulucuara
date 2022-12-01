import React, {useState} from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {AGE_RANGE_ARABULUCU, GENDERS, SENIORITY_RANGE_ARABULUCU} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';
import {useGetCitiesQuery, useLazyGetCitiesQuery} from '@home/HomeApi';
import {useSearchArabulucuMutation, useTopicsQuery} from './searchApi';
import {useGetJobsQuery} from '@store/auth/AuthApi';

export interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'seekMediator'>;
}

export default function SeekMediator({navigation}: Props) {
  const [selectedCity, setselectedCity] = useState({id: 66, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: 0, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: 0, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, value: undefined});
  const [gender, setgender] = useState({id: 0, value: 'Farketmez'});
  const [ageRange, setageRange] = useState({id: undefined, range: undefined});
  const [seniorityRange, setseniorityRange] = useState({id: undefined, range: undefined});
  const [alternativeProffession, setalternativeProffession] = useState({
    id: undefined,
    value: undefined,
  });
  const [meditationCenter, setmeditationCenter] = useState({id: 2, label: 'Farketmez'});
  const [associationMembership, setassociationMembership] = useState({id: 2, label: 'Farketmez'});

  const {data: cities} = useGetCitiesQuery({type: 'ilce'});
  const [trigger, {data: towns}] = useLazyGetCitiesQuery();
  const [getDistricts, distrctsResult] = useLazyGetCitiesQuery();
  const {data: topics} = useTopicsQuery();
  const {data: jobs} = useGetJobsQuery();
  const [searchArabulucu, {isLoading}] = useSearchArabulucuMutation();

  const onPressSearch = () => {
    searchArabulucu({
      sehir: selectedCity.id ?? 0,
      ilce: selectedTown.id ?? 0,
      mahalleId: selectedDistrict.id ?? 0,
      uyusmazlikKonusu: subjectOfDispute.id ?? 0,
      cinsiyet: gender.id,
      alanlar: seniorityRange.id ? [seniorityRange.id] : [],
      yasAraligi: ageRange.id ?? 0,
      kidemAraligi: seniorityRange.id ?? 0,
      meslek: alternativeProffession.id ?? 0,
      merkezUyesiMi: meditationCenter.id,
      dernekUyesiMi: associationMembership.id,
    })
      .then(res => {
        console.log('Response of search arabulucuara: ', res);
        if (!res?.error) {
          navigation.navigate('searchResult', {data: res?.data});
        } else {
          Alert.alert('Sonuç bulunamadı', 'Aradığınız kriterlere uygun sonuç bulunamadı');
        }
      })
      .catch(err => console.log('ERROR on search arabulucuara: ', err));
  };

  const selectCity = item => {
    setselectedCity({id: item.id, name: item.value});
    trigger({id: item.id, type: 'ilce'});
    setselectedTown({id: undefined, name: undefined});
    setselectedDistrict({id: undefined, name: undefined});
  };

  const selectTown = item => {
    setselectedDistrict({id: undefined, name: undefined});
    setselectedTown({id: item.id, name: item.value});
    getDistricts({id: item.id, type: 'mahalle'});
  };

  return (
    <View style={CommonStyles.container}>
      <ScrollView contentContainerStyle={CommonStyles.paddingForScroll}>
        <DropDownPicker
          value={selectedCity?.name}
          placeholder="İl Seçiniz"
          items={cities ?? []}
          renderItem={item => item.value}
          onPress={selectCity}
        />

        <DropDownPicker
          value={selectedTown?.name}
          placeholder="İlçe Seçiniz"
          items={towns ?? []}
          renderItem={item => item.value}
          onPress={selectTown}
        />

        <DropDownPicker
          value={selectedDistrict?.name}
          placeholder="Semt Seçiniz"
          items={distrctsResult.data ?? []}
          renderItem={item => item.value}
          onPress={item => setselectedDistrict({id: item.id, name: item.value})}
        />

        <DropDownPicker
          value={subjectOfDispute?.value}
          placeholder="Uyuşmazlık Konusu"
          items={topics ?? []}
          renderItem={item => item.value}
          onPress={setsubjectOfDispute}
        />

        <DropDownPicker
          value={gender?.value}
          placeholder="Cinsiyet"
          items={GENDERS}
          renderItem={item => item.value}
          onPress={setgender}
        />

        <DropDownPicker
          value={ageRange?.range}
          placeholder="Yaş Aralığı"
          items={AGE_RANGE_ARABULUCU}
          renderItem={item => item.range}
          onPress={setageRange}
        />

        <DropDownPicker
          value={seniorityRange?.range}
          placeholder="Kıdem Aralığı"
          items={SENIORITY_RANGE_ARABULUCU}
          renderItem={item => item.range}
          onPress={setseniorityRange}
        />

        <DropDownPicker
          value={alternativeProffession?.value}
          placeholder="Alternatif Meslek"
          items={jobs ?? []}
          renderItem={item => item.value}
          onPress={setalternativeProffession}
        />

        <TripleQuestion
          question="Arabuluculuk merkezi üyeliği olsun mu?"
          selectedOption={meditationCenter}
          onPressOption={setmeditationCenter}
          option1={{id: 2, label: 'Farketmez'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk derneği üyeliği olsun mu?"
          selectedOption={associationMembership}
          onPressOption={setassociationMembership}
          option1={{id: 2, label: 'Farketmez'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <FilledButton label="ARA" bgColor="#7E0736" onPress={onPressSearch} isLoading={isLoading} />
      </ScrollView>
    </View>
  );
}
