import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Linking, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';
import ProfileRouteButtons from './components/ProfileRouteButtons';
import {SearchPage, useGetMemberQuery} from './searchApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import SearchMessageModal, {SendMessageModal} from '@portal/forum/components/SearchMessageModal';
import {useSendMessageMutation} from '@profile/messages/messageApi';

interface ScreenProps {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
}

const mapPageNameToStackName = {
  hakkimizda: 'aboutProfile',
  hakkimda: 'aboutProfile',
  MerkezUyeler: 'centerMembers',
  CozumOrtaklari: 'cooperationAndSolutionPartners',
  MerkezUzmanlik: 'mediationExpertises',
  ArabulucuUzmanlik: 'mediationExpertises',
  MerkezMakaleler: 'mediatorArticles',
  ArabulucuMakaleler: 'mediatorArticles',
  ArabulucuBelgeler: 'mediatorCertificates',
  galeri: 'mediatorGallery',
  ArabulucuUyelik: 'mediatorMembersip',
};
export default function ProfileDetail({route, navigation}: ScreenProps) {
  const {profile} = route.params;
  console.log('profile: ', profile);

  const [showMessageModal, setshowMessageModal] = useState(false);
  const [showContactInformations, setshowContactInformations] = useState(false);
  const {data: member, isLoading} = useGetMemberQuery({username: profile.uri.value});
  const [sendMessage, {isLoading: isMessageSending}] = useSendMessageMutation();

  console.log('member informations: ', member);

  console.log('Profile..');

  const handleMessageSend = (message: SendMessageModal) => {
    if (message.messageTitle.length === 0)
      return Alert.alert('Lütfen Dikkat', 'Lütfen mesaj başlığını giriniz');
    else if (message.messageBody.length === 0)
      return Alert.alert('Lütfen Dikkat', 'Lütfen mesajınızı giriniz');

    if (member && member.email) {
      sendMessage({
        usernameOrMail: member.email,
        messageTitle: message.messageTitle,
        messageBody: message.messageBody,
      })
        .then(res => {
          console.log('res: ', res);
          if (res && res?.data?.message) {
            Alert.alert('Başarılı', res?.data?.message);
            setshowMessageModal(false);
          }
        })
        .catch(err => {
          console.log('err:', err);
          Alert.alert('Lütfen Dikkat', 'Bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz');
        });
    } else {
      Alert.alert('Lütfen Dikkat', 'Bir sorun oluştu. Kullanıcının mail bilgisine ulaşılamadı');
    }
  };

  const _renderContactInformations = () => {
    if (showContactInformations) {
      return (
        <Animatable.View style={styles.contactInformations} animation="fadeIn">
          <Text style={styles.contactLabel}>{member?.email}</Text>
          <Text style={styles.contactLabel}>{member?.phone}</Text>
          <Text style={styles.contactLabel}>
            {member?.il} {member?.ilce}
          </Text>
        </Animatable.View>
      );
    }
  };

  const onPressRouteButton = (pressedRoute: SearchPage) => {
    console.log('pressedRoute.pageName:', pressedRoute.pageName);
    const stackName = mapPageNameToStackName[pressedRoute.pageName];

    if (stackName) {
      navigation.navigate(stackName!, {
        profile,
        member: member,
      });
    } else {
      Linking.openURL(pressedRoute.url);
    }
  };

  return (
    <ProfileLayout
      user={profile}
      onPressMessages={() => navigation.navigate('profile', {screen: 'messagesContainer'})}>
      <>
        {showMessageModal && (
          <SearchMessageModal
            onPressCancel={() => setshowMessageModal(false)}
            onPressApprove={handleMessageSend}
            isLoading={isMessageSending}
          />
        )}

        <View style={styles.actionButtons}>
          <Pressable
            style={styles.actionButton}
            onPress={() => setshowContactInformations(prev => !prev)}>
            <Text style={styles.actionLabel}>İletişim Bilgileri</Text>
          </Pressable>

          <Pressable style={styles.actionButton} onPress={() => setshowMessageModal(true)}>
            <Text style={styles.actionLabel}>Mesaj Gönder</Text>
          </Pressable>
        </View>

        {_renderContactInformations()}

        {isLoading ? (
          <FullScreenLoader />
        ) : (
          member?.linkler && (
            <ProfileRouteButtons routeButtons={member.linkler} onPressRoute={onPressRouteButton} />
          )
        )}
      </>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    marginLeft: Metrics.horizontalContainerPadding,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    justifyContent: 'space-between',
  },

  actionButton: {
    marginTop: 35,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: '#7E0736',
  },

  actionLabel: {
    fontSize: 14,
    fontFamily: Fonts.robotoLight,
    color: '#fff',
  },

  contactInformations: {
    marginTop: 15,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    justifyContent: 'center',
  },

  contactLabel: {
    paddingTop: 8,
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },
});
