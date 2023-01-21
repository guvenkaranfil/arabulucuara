import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {MERKEZ_ODA_SAYISI, MERKEZ_UYE_SAYISI} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';

import {useGetCitiesQuery, useLazyGetCitiesQuery} from '@home/HomeApi';
import {useSearchMerkezMutation, useTopicsQuery} from './searchApi';
import {useGetProfessionsQuery} from '@store/auth/AuthApi';
import AreasOfExpertise, {ExpertiseArea} from './components/AreasOfExpertise';

export interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'mediationCenter'>;
}

export default function SearchMediationCenter({navigation}: Props) {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, value: 'Tümü'});
  const [numberOfRooms, setnumberOfRooms] = useState({id: 0, name: 'Tümü'});
  const [numberOfMembers, setnumberOfMembers] = useState({id: 0, name: 'Tümü'});

  const [supportEducations, setsupportEducations] = useState({id: 2, label: 'Tümü'});
  const [isCooparatingWithOtherFirms, setisCooparatingWithOtherFirms] = useState({
    id: 2,
    label: 'Tümü',
  });
  const [isRentingRoom, setisRentingRoom] = useState({id: 2, label: 'Tümü'});
  const [isArbitrationService, setisArbitrationService] = useState({id: 2, label: 'Tümü'});
  const [isExpertPinion, setisExpertPinion] = useState({id: 2, label: 'Tümü'});
  const [selectedExpertiseAreas, setselectedExpertiseAreas] = useState(new Map());

  const {data: cities} = useGetCitiesQuery({type: 'ilce'});
  const [trigger, {data: towns}] = useLazyGetCitiesQuery();
  const [getDistricts, {data: districts}] = useLazyGetCitiesQuery();
  const {data: topics} = useTopicsQuery();
  const [searchMerkez, {isLoading}] = useSearchMerkezMutation();

  const {data: professions} = useGetProfessionsQuery({userType: 'arabulucu'});

  useEffect(() => {
    pickExpertiseArea({id: 1, label: 'Genel Arabuluculuk'});
  }, []);

  const pickExpertiseArea = (expertiseArea: ExpertiseArea) => {
    var status = !selectedExpertiseAreas.get(expertiseArea.id);
    setselectedExpertiseAreas(new Map(selectedExpertiseAreas.set(expertiseArea.id, status)));
    console.log('Pickde uzmanlık alanları: ', Array.from(selectedExpertiseAreas.keys()));
  };

  const handleSearch = () => {
    if (!selectedCity.name) {
      return Alert.alert('Lütfen Dikkat', 'Arama yapabilmek için şehir seçiniz.');
    }

    let uzmanlıkAlanları = [];
    for (let [key, value] of selectedExpertiseAreas) {
      if (value) {
        uzmanlıkAlanları.push(key);
      }
    }

    searchMerkez({
      sehir: selectedCity.id ?? 0,
      ilce: selectedTown.id ?? 0,
      mahalleId: selectedDistrict.id ?? 0,
      uyusmazlikKonusu: subjectOfDispute.id ?? 0,
      alanlar: uzmanlıkAlanları,
      odaSayisi: numberOfRooms.id,
      uyeSayisi: numberOfMembers.id,
      egitimVarMi: supportEducations.id,
      ortaklikVarMi: isCooparatingWithOtherFirms.id,
      kiralamaVarMi: isRentingRoom.id,
      tahkimVarMi: isArbitrationService.id,
      gorusVarMi: isExpertPinion.id,
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

  interface Profession {
    alanId: number;
    alanAdi: string;
  }

  return (
    <View style={CommonStyles.container}>
      <ScrollView contentContainerStyle={CommonStyles.paddingForScroll}>
        <DropDownPicker
          value={selectedCity?.name ? `İl Seçiniz ( ${selectedCity?.name} )` : undefined}
          placeholder="İl Seçiniz"
          items={cities ?? []}
          renderItem={item => item.value}
          onPress={selectCity}
        />

        <DropDownPicker
          value={selectedTown?.name ? `İlçe Seçiniz ( ${selectedTown?.name} )` : undefined}
          placeholder="İlçe Seçiniz"
          items={towns ?? []}
          renderItem={item => item.value}
          onPress={selectTown}
        />

        <DropDownPicker
          value={selectedDistrict?.name ? `Semt Seçiniz ( ${selectedDistrict?.name} )` : undefined}
          placeholder="Semt Seçiniz"
          items={districts ?? []}
          renderItem={item => item.value}
          onPress={item => setselectedDistrict({id: item.id, name: item.value})}
        />

        <DropDownPicker
          value={`Uyuşmazlık Konusu ( ${subjectOfDispute?.value} )`}
          placeholder="Uyuşmazlık Konusu ( Tümü )"
          items={topics ?? []}
          renderItem={item => item.value}
          onPress={setsubjectOfDispute}
        />

        <DropDownPicker
          value={`Oda Sayısı ( ${numberOfRooms?.name} )`}
          placeholder="Oda Sayısı"
          items={MERKEZ_ODA_SAYISI}
          renderItem={item => item.name}
          onPress={setnumberOfRooms}
        />

        <DropDownPicker
          value={`Üye Sayısı ( ${numberOfMembers?.name} )`}
          placeholder="Üye Sayısı"
          items={MERKEZ_UYE_SAYISI}
          renderItem={item => item.name}
          onPress={setnumberOfMembers}
        />

        <AreasOfExpertise
          expertises={professions}
          onSelect={pickExpertiseArea}
          selectedExpertiseAreas={selectedExpertiseAreas}
        />

        <TripleQuestion
          question="Arabuluculuk, uzmanlık ve mesleki gelişim eğitimleri veren bir merkez mi arıyorsunuz?"
          selectedOption={supportEducations}
          onPressOption={setsupportEducations}
          option1={{id: 2, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk, uzmanlık ve mesleki gelişim eğitimleri veren bir merkez mi arıyorsunuz?"
          selectedOption={isCooparatingWithOtherFirms}
          onPressOption={setisCooparatingWithOtherFirms}
          option1={{id: 2, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Oda/ toplantı salonu kiralama hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isRentingRoom}
          onPressOption={setisRentingRoom}
          option1={{id: 2, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Tahkim hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isArbitrationService}
          onPressOption={setisArbitrationService}
          option1={{id: 2, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Uzman görüşü hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isExpertPinion}
          onPressOption={setisExpertPinion}
          option1={{id: 2, label: 'Tümü'}}
          option2={{id: 1, label: 'Evet'}}
          option3={{id: 0, label: 'Hayır'}}
        />

        <FilledButton label="ARA" bgColor="#7E0736" onPress={handleSearch} isLoading={isLoading} />
      </ScrollView>
    </View>
  );
}
