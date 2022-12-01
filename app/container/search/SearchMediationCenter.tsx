import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {CITIES, SUBJECT_OF_DISPUTE, EXPERTISES, NUMBER_OF_ROOMS, NUMBER_OF_MEMBERS} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import AreasOfExpertise, {ExpertiseArea} from './components/AreasOfExpertise';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';

export default function SearchMediationCenter() {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, name: undefined});
  const [selectedExpertiseAreas, setselectedExpertiseAreas] = useState(new Map());
  const [numberOfRooms, setnumberOfRooms] = useState({id: undefined, name: undefined});
  const [numberOfMembers, setnumberOfMembers] = useState({id: undefined, name: undefined});
  const [supportEducations, setsupportEducations] = useState({id: 1, label: 'Tümü'});
  const [isCooparatingWithOtherFirms, setisCooparatingWithOtherFirms] = useState({
    id: 1,
    label: 'Tümü',
  });
  const [isRentingRoom, setisRentingRoom] = useState({id: 1, label: 'Tümü'});
  const [isArbitrationService, setisArbitrationService] = useState({id: 1, label: 'Tümü'});
  const [isExpertPinion, setisExpertPinion] = useState({id: 1, label: 'Tümü'});

  const pickExpertiseArea = (expertiseArea: ExpertiseArea) => {
    var status = !selectedExpertiseAreas.get(expertiseArea.id);
    setselectedExpertiseAreas(new Map(selectedExpertiseAreas.set(expertiseArea.id, status)));
  };

  console.log('search mediation center')

  return (
    <View style={CommonStyles.container}>
      <ScrollView contentContainerStyle={CommonStyles.paddingForScroll}>
        <DropDownPicker
          value={selectedCity?.name}
          placeholder="İl Seçiniz"
          items={CITIES}
          renderItem={item => item.name}
          onPress={setselectedCity}
        />

        <DropDownPicker
          value={selectedTown?.name}
          placeholder="İlçe Seçiniz"
          items={CITIES}
          renderItem={item => item.name}
          onPress={setselectedTown}
        />

        <DropDownPicker
          value={selectedDistrict?.name}
          placeholder="Semt Seçiniz"
          items={CITIES}
          renderItem={item => item.name}
          onPress={setselectedDistrict}
        />

        <DropDownPicker
          value={subjectOfDispute?.name}
          placeholder="Uyuşmazlık Konusu"
          items={SUBJECT_OF_DISPUTE}
          renderItem={item => item.name}
          onPress={setsubjectOfDispute}
        />

        <AreasOfExpertise
          expertises={EXPERTISES}
          onSelect={pickExpertiseArea}
          selectedExpertiseAreas={selectedExpertiseAreas}
        />

        <DropDownPicker
          value={numberOfRooms?.name}
          placeholder="Oda Sayısı"
          items={NUMBER_OF_ROOMS}
          renderItem={item => item.name}
          onPress={setnumberOfRooms}
        />

        <DropDownPicker
          value={numberOfMembers?.name}
          placeholder="Üye Sayısı"
          items={NUMBER_OF_MEMBERS}
          renderItem={item => item.name}
          onPress={setnumberOfMembers}
        />

        <TripleQuestion
          question="Arabuluculuk, uzmanlık ve mesleki gelişim eğitimleri veren bir merkez mi arıyorsunuz?"
          selectedOption={supportEducations}
          onPressOption={setsupportEducations}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk, uzmanlık ve mesleki gelişim eğitimleri veren bir merkez mi arıyorsunuz?"
          selectedOption={isCooparatingWithOtherFirms}
          onPressOption={setisCooparatingWithOtherFirms}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Oda/ toplantı salonu kiralama hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isRentingRoom}
          onPressOption={setisRentingRoom}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Tahkim hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isArbitrationService}
          onPressOption={setisArbitrationService}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Uzman görüşü hizmeti veren bir merkez mi arıyorsunuz?"
          selectedOption={isExpertPinion}
          onPressOption={setisExpertPinion}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <FilledButton
          label="ARA"
          bgColor="#7E0736"
          onPress={() => console.log('onPress Search....')}
        />
      </ScrollView>
    </View>
  );
}
