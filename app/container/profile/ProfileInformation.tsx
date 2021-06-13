import React, {useState} from 'react';
import {Text, ScrollView, View, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import DropDownPicker from '@components/picker/DropDownPicker';
import Input from '@components/input/Input';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import styles from './styles/ProfileInformationStyle';

export default function ProfileInformation() {
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setshowDateTimePicker] = useState(false);
  const [otherProfessions, setotherProfessions] = useState([
    {id: 1, profession: 'Avukat'},
    {id: 2, profession: 'Savcı'},
    {id: 3, profession: 'Hakim'},
  ]);
  const [phone, setphone] = useState('');
  const [isShowPhone, setisShowPhone] = useState(false);
  const [email, setemail] = useState('');
  const [isShowEmail, setisShowEmail] = useState(false);
  const [selectedCity, setselectedCity] = useState({id: undefined, name: undefined});
  const [isShowCity, setisShowCity] = useState(false);
  const [selectedTown, setselectedTown] = useState({id: undefined, name: undefined});
  const [isShowTown, setisShowTown] = useState(false);
  const [selectedDistrict, setselectedDistrict] = useState({id: undefined, name: undefined});
  const [isShowDistrict, setisShowDistrict] = useState(false);
  const [address, setaddress] = useState('');
  const [isShowAdress, setisShowAdress] = useState(false);

  const handleConfirm = (pickedDate: Date) => {
    setDate(pickedDate);
    setshowDateTimePicker(false);
  };

  const onRemoveOtherProfession = (removedProfession: {id: number; profession: string}) => {
    console.log('removedProfession:', removedProfession);
    const filteredProfessions = otherProfessions.filter(p => p.id !== removedProfession.id);

    setotherProfessions(filteredProfessions);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Adınız</Text>
          <Input value={name} onChangeText={setname} />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Soyadınız</Text>
          <Input value={surname} onChangeText={setsurname} />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Doğum Tarihi</Text>
          <Pressable style={styles.emptyFormCard} onPress={() => setshowDateTimePicker(true)}>
            <Text style={styles.dateLabel}>{moment(date).format('DD-MM-YYYY')}</Text>
          </Pressable>

          {showDateTimePicker && (
            <DateTimePickerModal
              isVisible={true}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => setshowDateTimePicker(false)}
              cancelTextIOS="Vazgeç"
              confirmTextIOS="Onayla"
            />
          )}
        </View>

        {otherProfessions && otherProfessions?.length > 0 && (
          <View style={styles.formItem}>
            <Text style={styles.formTitle}>Diğer Seçenekler</Text>

            <View style={styles.otherProfessions}>
              {otherProfessions?.map((profession, index) => (
                <Pressable
                  key={index}
                  style={styles.professionButton}
                  onPress={() => onRemoveOtherProfession(profession)}>
                  <Text style={styles.professionLabel}>x</Text>
                  <Text style={styles.professionLabel}>{profession.profession}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Telefon Numarası</Text>
          <Input value={phone} onChangeText={setphone} />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowPhone}
            label="Telefon numaram profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowPhone(prev => !prev)}
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>E-Posta Adresiniz</Text>
          <Input value={email} onChangeText={setemail} />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowEmail}
            label="E-posta adresim profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowEmail(prev => !prev)}
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>İl</Text>
          <DropDownPicker
            value={selectedCity?.name}
            placeholder="İl Seçiniz"
            items={CITIES}
            renderItem={item => item.name}
            onPress={setselectedCity}
          />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowCity}
            label="İl bilgim profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowCity(prev => !prev)}
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>İlçe</Text>
          <DropDownPicker
            value={selectedTown?.name}
            placeholder="İlçe Seçiniz"
            items={CITIES}
            renderItem={item => item.name}
            onPress={setselectedTown}
          />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowTown}
            label="İlçe bilgim profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowTown(prev => !prev)}
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Semt</Text>
          <DropDownPicker
            value={selectedDistrict?.name}
            placeholder="Semt Seçiniz"
            items={CITIES}
            renderItem={item => item.name}
            onPress={setselectedDistrict}
          />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowDistrict}
            label="E-posta adresim profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowDistrict(prev => !prev)}
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Adres</Text>
          <Input value={address} onChangeText={setaddress} isMultiLine={true} height={100} />
          <RoundCheckBox
            roundStyle={styles.checkBoxStyle}
            isVisible={isShowAdress}
            label="Adres bilgim profilimde herkese açık yayınlanmasın"
            labelStyle={styles.checkBoxLabel}
            onPress={() => setisShowAdress(prev => !prev)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const CITIES = [{id: 1, name: 'Sakarya'}];
