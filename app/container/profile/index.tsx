import {ProfileScreenNavigationProps} from '@routes/stacks/profile/Types';
import React, {useState} from 'react';
import {ActivityIndicator, Alert, Linking, Modal, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import ProfileLayout from './layouts/ProfileLayout';
import ProfileRouteButtons from './components/UserProfileButtons';
import {logOut} from '@store/user/UserSlice';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_INFO_STORAGE_KEY} from '../../constants';
import {ProfilePageLink, useGetProfileLinksQuery} from './ProfileGetApi';
import {Fonts, Metrics} from '@utils';
import FilledButton from '@components/buttons/FilledButton';
import {useGetMemberQuery} from '@search/searchApi';
import Input from '@components/input/Input';
import TransparentModal from '@components/modals/TransparentModal';
import {useDeleteAccountMutation} from '@store/auth/AuthApi';

const mapPageNameToStackName = {
  Profile: 'profileInformation',
  ChangePassword: undefined,
  Messages: 'messagesContainer',
  Index: undefined,
  Memberships: 'membership',
  Biography: 'aboutUser',
  Expertise: undefined,
  Gallery: 'userGallery',
  Articles: 'userArticles',
  Videos: undefined,
  Sertifikalar: 'userCertificates',
};
export default function Profile({navigation}: ProfileScreenNavigationProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const {data: profile, isLoading} = useGetProfileLinksQuery();
  const {data: member, isLoading: isLoadingMember} = useGetMemberQuery({username: user.username!});

  const [removeAccount, {isLoading: accountRemoveLoading}] = useDeleteAccountMutation();

  const [showAccountDeleteModal, setshowAccountDeleteModal] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleSignOut = () => {
    console.log('Handle sign out');
    AsyncStorage.removeItem(USER_INFO_STORAGE_KEY)
      .then(() => {
        dispatch(logOut());
        navigation.navigate('home');
      })
      .catch(() => {
        Alert.alert('Bir sorun oluştu', 'Lütfen tekrar çıkış yapmayı deneyiniz');
      });
  };

  if (isLoading) {
    return (
      <View style={styles.fCenter}>
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  }

  const navigateToPage = (pressedRoute: ProfilePageLink) => {
    const pageStackName = mapPageNameToStackName[pressedRoute.pageName];
    if (pageStackName) {
      navigation.navigate(pageStackName);
    } else {
      Linking.openURL(pressedRoute.url);
    }
  };

  const handleAccountRemove = () => {
    Alert.alert(
      'Hesabınızı silmek istediğinize emin misiniz?',
      'Bu işlemi onayladığınız takdirde kullanıcı hesabınız kalıcı olarak silinip geri getirilemeyecektir',
      [{text: 'Vazgeç'}, {text: 'Onayla', onPress: () => setshowAccountDeleteModal(true)}],
    );
  };

  const deleteAccount = () => {
    removeAccount({username: user.username!, password: confirmPassword})
      .then(res => {
        setshowAccountDeleteModal(false);

        if (res?.data?.result) {
          Alert.alert('Hesap başarılı bir şekilde silindi', 'Uygulamadan çıkılış yapılıyor.');
          handleSignOut();
        } else if (res?.error) {
          Alert.alert(
            'Hesap silme esnasında bir sorun oluştu',
            'LÜtfen daha sonra tekrar deneyiniz.',
          );
        }
        console.log('account remove res: ', res);
      })
      .catch(error => {
        setshowAccountDeleteModal(false);
        Alert.alert(
          'Hesap silme esnasında bir sorun oluştu',
          'LÜtfen daha sonra tekrar deneyiniz.',
        );
        console.log('Account remove error: ', error);
      });
  };

  const _renderAccountRemovementModal = () => {
    return (
      <TransparentModal
        title="Yorum Yap"
        cancelText="İptal"
        approveText="Onayla"
        onPressCancel={() => {
          setshowAccountDeleteModal(false);
          setconfirmPassword('');
        }}
        onPressApprove={deleteAccount}
        isLoading={accountRemoveLoading}>
        <>
          <Text style={styles.newTopicFormTitle}>Kullanıcı Adı</Text>
          <Input value={user.username} width={Metrics.wp(278)} height={40} isEditable={false} />

          <Text style={styles.newTopicFormTitle}>Şifre</Text>
          <Input
            value={confirmPassword}
            onChangeText={setconfirmPassword}
            width={Metrics.wp(278)}
            height={40}
            isMultiLine={false}
            secureTextEntry={true}
          />
        </>
      </TransparentModal>
    );
  };

  if (profile?.linkler) {
    return (
      <ProfileLayout
        user={profile!}
        jobs={member?.meslekler}
        onPressMessages={() => navigation.navigate('messagesContainer')}>
        {showAccountDeleteModal && _renderAccountRemovementModal()}
        <ProfileRouteButtons
          routeButtons={profile?.linkler}
          onPressRoute={navigateToPage}
          onPressSignOut={handleSignOut}
          goToCompleteProfile={() => navigation.navigate('auth')}
          deleteAccount={handleAccountRemove}
        />
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout
      user={profile!}
      onPressMessages={() => navigation.navigate('messagesContainer')}
      jobs={member?.meslekler}>
      {showAccountDeleteModal && _renderAccountRemovementModal()}

      <View style={styles.routeButtons}>
        <FilledButton
          style={styles.routeButton}
          label={'Hesabımı Sil'}
          labelStyle={styles.routeLabel}
          onPress={deleteAccount}
        />

        <FilledButton
          style={styles.routeButton}
          label={'Çıkış Yap'}
          labelStyle={styles.routeLabel}
          onPress={handleSignOut}
        />
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  fCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routeButtons: {
    marginVertical: 35,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  routeButton: {
    marginBottom: 15,
    paddingLeft: 21,
    alignItems: 'flex-start',
    height: 55,
    backgroundColor: '#E1E3E9',
  },

  routeLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  mContainer: {
    flex: 1,
  },

  newTopicFormTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

// base URL for images
// https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg
