import React, {useState} from 'react';
import {Pressable, Image, Text, View, Alert, Platform} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import {UserIcon} from '@icons';
import styles from './styles/ProfilePhotoStyle';
import axios from 'axios';
import {logIn} from '@store/user/UserSlice';
import {USER_INFO_STORAGE_KEY} from '../../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import {Constants} from '@utils';

export default function ProfilePhoto({navigation}) {
  const [profilePhoto, setprofilePhoto] = useState('');
  const [image, setimage] = useState<ImageType>();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [isUploading, setisUploading] = useState(false);

  const choseFromLibrary = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 150,
      height: 150,
      cropping: true,
    }).then(image => {
      console.log(image);
      setimage(image);
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
      setimage(image);
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

  const updateLastStep = (lastStep: number) => {
    const updatedUser = {
      refreshToken: user.refreshToken,
      token: user.token,
      userLastStep: lastStep,
    };

    dispatch(logIn(updatedUser));
    AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(updatedUser));
  };

  const uploadPhoto = async (file: ImageType) => {
    setisUploading(true);
    const data = new FormData();
    data.append('image', {
      name: file.filename,
      uri: Platform.OS === 'ios' ? file.path?.replace('file://', '') : file.path,
    });

    try {
      const response = await axios.post(Constants.API_BASE_URL + '/Account/StepFour', data, {
        headers: {
          Authorization: 'Bearer ' + user.token?.token,
          'Content-Type': 'multipart/form-data',
          accept: 'text/plain',
        },
      });

      setisUploading(false);
      console.log('response: ', response);

      if (response.status === 200 && response.data?.result) {
        updateLastStep(5);
        return navigation.replace('completions/aboutMe');
      }

      Alert.alert('Bir hata oluştu', response?.data?.message ?? 'Daha sonra tekrar deneyiniz');
    } catch (error) {
      setisUploading(false);
      console.log('error on photo upload: ', error);
      console.log('error on photo upload response: ', error?.response);
      Alert.alert(
        'Bir hata oluştu',
        error?.response?.data?.message ?? 'Daha sonra tekrar deneyiniz',
      );
    }
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
        <FilledButton label="Devam Et" onPress={() => uploadPhoto(image)} isLoading={isUploading} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}
