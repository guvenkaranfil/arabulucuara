import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {
  CITIES,
  SUBJECT_OF_DISPUTE,
  GENDERS,
  AGE_RANGE,
  SENIORITY_RANGE,
  ALTERNATIVE_PROFFESSION,
  EXPERTISES,
} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import AreasOfExpertise, {ExpertiseArea} from './components/AreasOfExpertise';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';

export default function SearchExpertMediator() {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, name: undefined});
  const [selectedExpertiseAreas, setselectedExpertiseAreas] = useState(new Map());
  const [gender, setgender] = useState({id: undefined, name: undefined});
  const [ageRange, setageRange] = useState({id: undefined, name: undefined});
  const [seniorityRange, setseniorityRange] = useState({id: undefined, name: undefined});
  const [alternativeProffession, setalternativeProffession] = useState({
    id: undefined,
    name: undefined,
  });
  const [meditationCenter, setmeditationCenter] = useState({id: 1, label: 'Farketmez'});
  const [associationMembership, setassociationMembership] = useState({id: 1, label: 'Farketmez'});

  const pickExpertiseArea = (expertiseArea: ExpertiseArea) => {
    var status = !selectedExpertiseAreas.get(expertiseArea.id);
    setselectedExpertiseAreas(new Map(selectedExpertiseAreas.set(expertiseArea.id, status)));
  };

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
          value={gender?.name}
          placeholder="Cinsiyet"
          items={GENDERS}
          renderItem={item => item.name}
          onPress={setgender}
        />

        <DropDownPicker
          value={ageRange?.name}
          placeholder="Yaş Aralığı"
          items={AGE_RANGE}
          renderItem={item => item.name}
          onPress={setageRange}
        />

        <DropDownPicker
          value={seniorityRange?.name}
          placeholder="Kıdem Aralığı"
          items={SENIORITY_RANGE}
          renderItem={item => item.name}
          onPress={setseniorityRange}
        />

        <DropDownPicker
          value={alternativeProffession?.name}
          placeholder="Alternatif Meslek"
          items={ALTERNATIVE_PROFFESSION}
          renderItem={item => item.name}
          onPress={setalternativeProffession}
        />

        <TripleQuestion
          question="Arabuluculuk merkezi üyeliği olsun mu?"
          selectedOption={meditationCenter}
          onPressOption={setmeditationCenter}
          option1={{id: 1, label: 'Farketmez'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk derneği üyeliği olsun mu?"
          selectedOption={associationMembership}
          onPressOption={setassociationMembership}
          option1={{id: 1, label: 'Farketmez'}}
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
