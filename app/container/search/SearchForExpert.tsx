import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {
  CITIES,
  SUBJECT_OF_DISPUTE,
  GENDERS,
  AGE_RANGE,
  SENIORITY_RANGE,
  ALTERNATIVE_PROFFESSION,
} from './mocks';
import DropDownPicker from '@components/picker/DropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import TripleQuestion from './components/TripleQuestion';
import {CommonStyles} from '@utils';

export default function SearchExpertMediator() {
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [proffession, setproffession] = useState({id: undefined, name: undefined});
  const [subjectOfDispute, setsubjectOfDispute] = useState({id: undefined, name: undefined});
  const [professionAreas, setprofessionAreas] = useState({id: undefined, name: undefined});
  const [gender, setgender] = useState({id: undefined, name: undefined});
  const [ageRange, setageRange] = useState({id: undefined, name: undefined});
  const [seniorityRange, setseniorityRange] = useState({id: undefined, name: undefined});

  const [isHeadOfExpertWitness, setisHeadOfExpertWitness] = useState({id: 1, label: 'Tümü'});
  const [associationMembership, setassociationMembership] = useState({id: 1, label: 'Tümü'});
  const [proffesionalChamberMember, setproffesionalChamberMember] = useState({
    id: 1,
    label: 'Tümü',
  });

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
          value={proffession?.name}
          placeholder="Meslek"
          items={ALTERNATIVE_PROFFESSION}
          renderItem={item => item.name}
          onPress={setproffession}
        />

        <DropDownPicker
          value={subjectOfDispute?.name}
          placeholder="Uyuşmazlık Konusu"
          items={SUBJECT_OF_DISPUTE}
          renderItem={item => item.name}
          onPress={setsubjectOfDispute}
        />

        <DropDownPicker
          value={professionAreas?.name}
          placeholder="Uzmanlık Alanı"
          items={ALTERNATIVE_PROFFESSION}
          renderItem={item => item.name}
          onPress={setprofessionAreas}
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

        <TripleQuestion
          question="Bilirkişilik Daire Başkanlığı siciline kayıtlı bir uzman mı arıyorsunuz?"
          selectedOption={isHeadOfExpertWitness}
          onPressOption={setisHeadOfExpertWitness}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Arabuluculuk Merkezine üye bir uzman mı arıyorsunuz?"
          selectedOption={associationMembership}
          onPressOption={setassociationMembership}
          option1={{id: 1, label: 'Tümü'}}
          option2={{id: 2, label: 'Evet'}}
          option3={{id: 3, label: 'Hayır'}}
        />

        <TripleQuestion
          question="Meslek odası/birliği üyesi bir uzman mı arıyorsunuz?"
          selectedOption={proffesionalChamberMember}
          onPressOption={setproffesionalChamberMember}
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
