import React, {useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';

import {GENDERS, AGE_RANGE_ARABULUCU, SENIORITY_RANGE_ARABULUCU} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {useGetCitiesQuery, useLazyGetCitiesQuery} from '@home/HomeApi';
import {useSearchUzmanMutation} from './searchApi';
import {useGetJobsQuery, useGetProfessionsQuery} from '@store/auth/AuthApi';
import MultiSelectDropDownPicker from '@components/picker/MultiSelectDropDownPicker';
import MultiSelectCategoryDropDownPicker from '@components/picker/MultiSelectCategoryDropDownPicker';

export interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'mediationCenter'>;
}

export default function SearchExpertMediator({navigation}: Props) {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});

  const [proffession, setproffession] = useState({id: undefined, name: undefined});
  const [selectedMeslekler, setselectedMeslekler] = useState<Array<number>>([]);

  const [selectedUzmanlikAlanları, setselectedUzmanlikAlanları] = useState<Array<number>>([]);
  const [lastPickUzmanlikAlani, setlastPickUzmanlikAlani] = useState({
    id: undefined,
    name: undefined,
  });

  const [gender, setgender] = useState({id: 0, value: 'Farketmez'});
  const [ageRange, setageRange] = useState({id: 0, range: 'Tümü'});
  const [seniorityRange, setseniorityRange] = useState({id: 0, range: 'Tümü'});

  const [isHeadOfExpertWitness, setisHeadOfExpertWitness] = useState({id: 0, label: 'Tümü'});
  const [associationMembership, setassociationMembership] = useState({id: 0, label: 'Tümü'});
  const [proffesionalChamberMember, setproffesionalChamberMember] = useState({
    id: 0,
    label: 'Tümü',
  });

  const {data: cities} = useGetCitiesQuery({type: 'ilce'});
  const [trigger, {data: towns}] = useLazyGetCitiesQuery();
  const [getDistricts, distrctsResult] = useLazyGetCitiesQuery();
  const {data: jobs} = useGetJobsQuery();
  const {data: merkezUzmanlıkAlanlari} = useGetProfessionsQuery({userType: 'uzman'});
  const [searchUzman, {isLoading}] = useSearchUzmanMutation();

  const handleSearch = () => {
    if (!selectedCity.name) {
      return Alert.alert('Lütfen Dikkat', 'Arama yapabilmek için şehir seçiniz.');
    }

    searchUzman({
      sehir: selectedCity.id ?? 0,
      ilce: selectedTown.id ?? 0,
      mahalleId: selectedDistrict.id ?? 0,
      cinsiyet: gender.id,
      yasAraligi: ageRange.id,
      kidemAraligi: seniorityRange.id,
      meslek: [],
      uzmanlikAlanlari: [],
      sicileKayitliMi: isHeadOfExpertWitness.id,
      merkezeUyeMi: associationMembership.id,
      odaUyesiMi: proffesionalChamberMember.id,
    })
      .then(res => {
        if (!res?.err && res.data) {
          console.log('search response of merkez: ', res);
          navigation.navigate('searchResult', {data: res.data});
        } else {
          Alert.alert('Sonuç bulunamadı', 'Aradığınız kriterlere uygun sonuç bulunamadı');
        }
      })
      .catch(err => {
        console.log('something went wrong on merkez', err);
        Alert.alert('Bir sorun oluştu', 'Lütfen daha sonra tekrar deneyiniz');
      });
  };

  interface Profession {
    alanId: number;
    alanAdi: string;
  }
  const onPressUzmanlıkAlanları = (profession: Profession) => {
    const isProfessionAdded = selectedUzmanlikAlanları?.includes(profession.alanId);
    console.info('isProfessionAdded:', isProfessionAdded);

    if (isProfessionAdded) {
      const temporaryProfessions = selectedUzmanlikAlanları?.filter(x => x !== profession.alanId);
      setselectedUzmanlikAlanları(temporaryProfessions);
    } else {
      setlastPickUzmanlikAlani({id: profession.alanId, name: profession.alanAdi});
      setselectedUzmanlikAlanları([...selectedUzmanlikAlanları, profession.alanId]);
    }
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

  const selectProfession = profession => {
    console.log('profession:', profession);
    const isProfessionAdded = selectedMeslekler?.includes(profession.id);

    if (isProfessionAdded) {
      const temporaryProfessions = selectedMeslekler?.filter(x => x !== profession.id);
      setselectedMeslekler(temporaryProfessions);
    } else {
      setproffession({id: profession.id, name: profession.value});
      setselectedMeslekler([...selectedMeslekler, profession.id]);
    }
    console.log('selectedMeslekler: ', selectedMeslekler);
  };

  console.log('search for expert...');
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

        {/* <DropDownPicker
          value={proffession?.name}
          placeholder="Meslek"
          items={jobs ?? []}
          renderItem={item => item.value}
          onPress={selectProfession}
          shouldCloseOnSelect={false}
        /> */}

        <MultiSelectDropDownPicker
          selectedItems={selectedMeslekler}
          value={proffession?.name}
          placeholder={'Mesleğiniz'}
          items={jobs ?? []}
          renderItem={item => item.value}
          onPress={selectProfession}
        />

        {/* <DropDownPicker
          value={professionAreas?.value}
          placeholder="Uzmanlık Alanı"
          items={ALTERNATIVE_PROFFESSION}
          renderItem={item => item.name}
          onPress={setprofessionAreas}
        /> */}

        <MultiSelectCategoryDropDownPicker
          selectedItems={selectedUzmanlikAlanları ?? []}
          value={lastPickUzmanlikAlani.name}
          placeholder={'Uzmanlık alanı'}
          items={merkezUzmanlıkAlanlari ?? []}
          renderItem={item => item.alanAdi}
          onPress={onPressUzmanlıkAlanları}
        />

        <DropDownPicker
          value={`Cinsiyet (${gender?.value})`}
          placeholder="Cinsiyet"
          items={GENDERS}
          renderItem={item => item.value}
          onPress={setgender}
        />

        <DropDownPicker
          value={`Yaş Aralığı (${ageRange?.range})`}
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

        <TripleQuestion
          question="Bilirkişilik Daire Başkanlığı siciline kayıtlı bir uzman mı arıyorsunuz?"
          selectedOption={isHeadOfExpertWitness}
          onPressOption={setisHeadOfExpertWitness}
          option1={{id: 0, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 2, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk Merkezine üye bir uzman mı arıyorsunuz?"
          selectedOption={associationMembership}
          onPressOption={setassociationMembership}
          option1={{id: 0, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 2, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Meslek odası/birliği üyesi bir uzman mı arıyorsunuz?"
          selectedOption={proffesionalChamberMember}
          onPressOption={setproffesionalChamberMember}
          option1={{id: 0, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 2, label: 'Hayır'}}
        />

        <FilledButton label="ARA" bgColor="#7E0736" onPress={handleSearch} isLoading={isLoading} />
      </ScrollView>
    </View>
  );
}
