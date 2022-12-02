import React, {useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {MERKEZ_ODA_SAYISI, MERKEZ_UYE_SAYISI} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import AreasOfExpertise, {ExpertiseArea} from './components/AreasOfExpertise';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';

import {useGetCitiesQuery, useLazyGetCitiesQuery} from '@home/HomeApi';
import {useSearchMerkezMutation, useTopicsQuery} from './searchApi';
import {useGetProfessionsQuery} from '@store/auth/AuthApi';
import MultiSelectCategoryDropDownPicker from '@components/picker/MultiSelectCategoryDropDownPicker';

export interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'mediationCenter'>;
}

export default function SearchMediationCenter({navigation}: Props) {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, value: undefined});
  const [selectedExpertiseAreas, setselectedExpertiseAreas] = useState(new Map());
  const [numberOfRooms, setnumberOfRooms] = useState({id: 0, name: 'Tümü'});
  const [numberOfMembers, setnumberOfMembers] = useState({id: 0, name: 'Tümü'});
  const [selectedUzmanlikAlanları, setselectedUzmanlikAlanları] = useState<Array<number>>([]);
  const [lastPickUzmanlikAlani, setlastPickUzmanlikAlani] = useState({
    id: undefined,
    name: undefined,
  });

  const [supportEducations, setsupportEducations] = useState({id: 2, label: 'Tümü'});
  const [isCooparatingWithOtherFirms, setisCooparatingWithOtherFirms] = useState({
    id: 2,
    label: 'Tümü',
  });
  const [isRentingRoom, setisRentingRoom] = useState({id: 2, label: 'Tümü'});
  const [isArbitrationService, setisArbitrationService] = useState({id: 2, label: 'Tümü'});
  const [isExpertPinion, setisExpertPinion] = useState({id: 2, label: 'Tümü'});

  const {data: cities} = useGetCitiesQuery({type: 'ilce'});
  const [trigger, {data: towns}] = useLazyGetCitiesQuery();
  const [getDistricts, {data: districts}] = useLazyGetCitiesQuery();
  const {data: topics} = useTopicsQuery();
  const {data: merkezUzmanlıkAlanlari} = useGetProfessionsQuery({userType: 'uzman'});
  const [searchMerkez, {isLoading}] = useSearchMerkezMutation();

  const pickExpertiseArea = (expertiseArea: ExpertiseArea) => {
    var status = !selectedExpertiseAreas.get(expertiseArea.id);
    setselectedExpertiseAreas(new Map(selectedExpertiseAreas.set(expertiseArea.id, status)));
  };

  const handleSearch = () => {
    searchMerkez({
      sehir: selectedCity.id ?? 0,
      ilce: selectedTown.id ?? 0,
      mahalleId: selectedDistrict.id ?? 0,
      uyusmazlikKonusu: subjectOfDispute.id ?? 0,
      alanlar: selectedUzmanlikAlanları,
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
          items={districts ?? []}
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

        {/* <AreasOfExpertise
          expertises={EXPERTISES}
          onSelect={pickExpertiseArea}
          selectedExpertiseAreas={selectedExpertiseAreas}
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
          value={numberOfRooms?.name}
          placeholder="Oda Sayısı"
          items={MERKEZ_ODA_SAYISI}
          renderItem={item => item.name}
          onPress={setnumberOfRooms}
        />

        <DropDownPicker
          value={numberOfMembers?.name}
          placeholder="Üye Sayısı"
          items={MERKEZ_UYE_SAYISI}
          renderItem={item => item.name}
          onPress={setnumberOfMembers}
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
