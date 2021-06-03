import React, {useState} from 'react';
import {Pressable, Image, StyleSheet, Text, View, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import FilledButton from 'components/buttons/FilledButton';
import OutlineButton from 'components/buttons/OutlineButton';
import {Fonts, Metrics} from 'utils';
import {UserIcon} from '@icons';

export default function ProfilePhoto() {
  const [profilePhoto, setprofilePhoto] = useState('');

  const choseFromLibrary = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 150,
      height: 150,
      cropping: true,
    }).then(image => {
      console.log(image);
      setprofilePhoto(image.path);
    });
  };

  const chooseFromCamera = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 150,
      height: 150,
      cropping: true,
    }).then(image => {
      console.log(image);
      setprofilePhoto(image.path);
    });
  };

  const askForProfilePhotoPick = () => {
    return Alert.alert(
      'Profil fotoğrafını seç',
      'Aşağıdan fotoğrafınızı seçmek istediğiniz seçeneği seçiniz',
      [
        {text: 'Galeriden Seç', onPress: choseFromLibrary},
        {text: 'Kamerayı Aç', onPress: chooseFromCamera},
        {text: 'Vazgeç'},
      ],
    );
  };

  return (
    <LoginLayout showHomeButton={true} enableKeyboardDismiss={false}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={170} />

      <View style={styles.step}>
        <Pedometer activeStep={4} totalCount={7} />
        <Text style={styles.stepInfo}>
          Aşağıda yer alan bilgileri girdiğinizde{'\n'}üyelik işleminiz tamamlanacaktır.
        </Text>
      </View>

      <View style={styles.photoPicker}>
        <Text style={styles.photoLabel}>Profil fotoğrafı seçiniz</Text>

        <Pressable style={styles.photoReview} onPress={askForProfilePhotoPick}>
          {profilePhoto?.length > 0 ? (
            <Image source={{uri: profilePhoto}} style={styles.profilePhoto} />
          ) : (
            <UserIcon width={80} height={90} />
          )}
        </Pressable>
      </View>

      <View style={styles.footer}>
        <FilledButton label="Devam Et" onPress={() => console.log('onPress...')} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  step: {
    alignItems: 'center',
  },

  stepInfo: {
    paddingTop: Metrics.hp(20),
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  photoPicker: {
    alignItems: 'center',
    marginVertical: Metrics.hp(20),
  },

  photoLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  photoReview: {
    marginTop: Metrics.hp(17),
    width: Metrics.wp(200),
    height: Metrics.wp(200),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  profilePhoto: {
    width: 150,
    height: 150,
  },

  footer: {
    height: Metrics.hp(125),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
