import React, {useMemo, useState} from 'react';
import {Text, ScrollView, View, Pressable, Alert} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from '@components/picker/Modal';

import DropDownPicker from '@components/picker/DropDownPicker';
import Input from '@components/input/Input';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import styles from '../styles/ProfileInformationStyle';
import {ProfileInformations, useUpdateProfileMutation} from '@profile/ProfileGetApi';
import {useLazyGetCitiesQuery} from '@home/HomeApi';
import FilledButton from '@components/buttons/FilledButton';

interface Props {
  informations: ProfileInformations;
}
export default function InformationArabulucu({informations}: Props) {
  const getSelectedCity = useMemo(() => {
    const city = informations.iller.find(il => il.selected);

    return {
      id: city?.id,
      name: city?.name,
    };
  }, [informations]);
  const getSelectedTown = useMemo(() => {
    const town = informations.ilceler.find(il => il.selected);

    return {
      id: town?.id,
      name: town?.name,
    };
  }, [informations]);

  const getSelectedDistrict = useMemo(() => {
    const district = informations.mahalleler.find(il => il.selected);

    return {
      id: district?.id,
      name: district?.name,
    };
  }, [informations]);

  const [name, setname] = useState(informations.adi);
  const [surname, setsurname] = useState(informations.soyadi);
  const [date, setDate] = useState(new Date(informations.dogumTarih));

  const [showDateTimePicker, setshowDateTimePicker] = useState(false);

  const [otherProfessions, setotherProfessions] = useState(informations.kullaniciMeslekleri ?? []);
  const [showMeslekler, setshowMeslekler] = useState(false);

  const [phone, setphone] = useState(informations.telefon);
  const [isShowPhone, setisShowPhone] = useState(informations.telefonYayinla);

  const [email, setemail] = useState(informations.email);
  const [isShowEmail, setisShowEmail] = useState(informations.emailYayinla);

  const [selectedCity, setselectedCity] = useState(getSelectedCity);
  const [isShowCity, setisShowCity] = useState(informations.sehirYayinla);

  const [selectedTown, setselectedTown] = useState(getSelectedTown);
  const [isShowTown, setisShowTown] = useState(informations.ilceYayinla);

  const [selectedDistrict, setselectedDistrict] = useState(getSelectedDistrict);

  const [address, setaddress] = useState(informations.adres);
  const [isShowAdress, setisShowAdress] = useState(informations.adresYayinla);

  const [trigger, {data: towns}] = useLazyGetCitiesQuery();
  const [getDistricts, distrctsResult] = useLazyGetCitiesQuery();
  const [updateProfileInformations, {isLoading}] = useUpdateProfileMutation();

  const handleUpdate = () => {
    console.log(
      'professions:',
      otherProfessions.map(profession => profession.id),
    );
    if (selectedDistrict.id) {
      updateProfileInformations({
        arabulucuBilgileri: {
          phone: phone,
          email: email,
          birthDay: date.toISOString(),
          jobs: otherProfessions.map(profession => profession.id),
          districtId: selectedDistrict.id,
          address: address,
          phoneShow: isShowPhone,
          emailShow: isShowEmail,
          cityShow: isShowCity,
          districtShow: isShowTown,
          addressShow: isShowAdress,
        },
        merkezBilgileri: undefined,
        uzmanBilgileri: undefined,
      })
        .then(res => {
          console.log('res > handleUpdate', res);
          if (res && res?.data?.result) {
            Alert.alert('Başarılı', 'Bilgiler Başarılı bir şekilde güncellendi');
          } else {
            Alert.alert(
              'Lütfen Dikkat',
              'Bilgiler güncellerken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz',
            );
          }
        })
        .catch(err => console.log('handleUpdate > err => ', err));
    } else {
      Alert.alert('Lütfen Dikkat', 'Lütfen İl/İlçe/Mahalle bilgilerini giriniz');
    }
  };

  const onPressProfession = item => {
    console.log('profession: ', item);
    setotherProfessions([...otherProfessions, item]);
  };

  const selectCity = item => {
    setselectedCity({id: item.id, name: item.name});
    trigger({id: item.id, type: 'ilce'});
    setselectedTown({id: undefined, name: undefined});
    setselectedDistrict({id: undefined, name: undefined});
  };

  const selectTown = item => {
    setselectedDistrict({id: undefined, name: undefined});
    setselectedTown({id: item.id, name: item.value});
    getDistricts({id: item.id, type: 'mahalle'});
  };

  const handleConfirm = (pickedDate: Date) => {
    setDate(pickedDate);
    setshowDateTimePicker(false);
  };

  const onRemoveOtherProfession = (removedProfession: {id: number; name: string}) => {
    console.log('removedProfession:', removedProfession);
    const filteredProfessions = otherProfessions.filter(p => p.id !== removedProfession.id);

    setotherProfessions(filteredProfessions);
  };

  const _renderProfessions = () => {
    return (
      <View style={styles.formItem}>
        <Text onPress={() => setshowMeslekler(true)} style={styles.formTitle}>
          Diğer Meslekler
        </Text>

        <View style={styles.otherProfessions}>
          {otherProfessions?.map((profession, index) => (
            <Pressable
              key={index}
              style={styles.professionButton}
              onPress={() => onRemoveOtherProfession(profession)}>
              <Text style={styles.professionLabel}>x</Text>
              <Text style={styles.professionLabel}>{profession.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Adınız</Text>
          <Input value={name} onChangeText={setname} isEditable={false} />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Soyadınız</Text>
          <Input value={surname} onChangeText={setsurname} isEditable={false} />
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

        {showMeslekler && (
          <Modal
            items={informations.meslekler}
            renderItem={item => item.name}
            onPress={item => {
              setshowMeslekler(false);
              onPressProfession(item);
            }}
            closeModal={() => setshowMeslekler(false)}
          />
        )}
        {_renderProfessions()}

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
            items={informations.iller}
            renderItem={item => item.name}
            onPress={selectCity}
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
            items={towns ?? []}
            renderItem={item => item.value}
            onPress={selectTown}
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
            items={distrctsResult.data ?? informations.mahalleler}
            renderItem={item => (item.name ? item.name : item.value)}
            onPress={item =>
              setselectedDistrict({id: item.id, name: item.name ? item.name : item.value})
            }
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

        <FilledButton
          label="GÜNCELLE"
          bgColor="#7E0736"
          onPress={handleUpdate}
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
}
