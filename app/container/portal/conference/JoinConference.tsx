import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {Fonts, Metrics} from '@utils';
import FilledButton from '@components/buttons/FilledButton';
import {useLazyCreateConferenceQuery} from '@portal/portalApi';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'joinConference'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'joinConference'>;
}

export default function JoinConference({navigation}: Props) {
  const [meetingId, setmeetingId] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const [isMounted, setisMounted] = useState(false);
  const [createConference, {data: createdConference, isLoading: isCreatingConference, isSuccess}] =
    useLazyCreateConferenceQuery();
  console.log('createdConference:', createdConference);

  useEffect(() => {
    setisMounted(true);

    console.log('isSuccess:', isSuccess);
    if (isMounted) {
      console.log('createdConference:', createdConference);
      navigation.navigate('conferenceRoom', {
        roomURL:
          'https://sanalsinif.omeet.com.tr/bigbluebutton/api/join?fullName=Kadri+Y%c4%b1ld%c4%b1r%c4%b1m&meetingID=273c391b-0086-4465-aa08-c875a84eeae0&password=c9d93f91&joinViaHtml5=true&redirect=false&userID=&logoutURL=https://arabulucuara.com&checksum=ad33b7d9a0b43c1198a121b1adc1008dd590fb79',
      });
    }
  }, [createdConference]);

  const joinConference = () => {};

  const handleConferenceCreate = () => {
    createConference();
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardDismissMode="interactive" contentContainerStyle={styles.p16}>
        <Text style={styles.formTitle}>Konferans id bilgisi</Text>
        <TextInput style={styles.input} value={meetingId} onChangeText={setmeetingId} />

        <Text style={styles.formTitle}>Kullanıcı Adı</Text>
        <TextInput style={styles.input} value={username} onChangeText={setusername} />

        <Text style={styles.formTitle}>Şifre</Text>
        <TextInput style={styles.input} value={password} onChangeText={setpassword} />

        <FilledButton
          style={styles.calculate}
          label="KATIL"
          bgColor="#7E0736"
          onPress={joinConference}
          // isLoading={isLoading}
        />

        <FilledButton
          style={[styles.calculate, styles.mt20]}
          label="KONFERANS OLUŞTUR"
          bgColor="#7E0736"
          onPress={handleConferenceCreate}
          isLoading={isCreatingConference}
        />
      </ScrollView>
    </View>
  );
}

const TABLE_ITEM_WIDTH = (Metrics.DEVICE_WIDTH - 32) / 3;
const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  p16: {padding: 16},
  container: {
    flex: 1,
  },

  formTitle: {
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },

  input: {
    marginBottom: 20,
    padding: 8,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  calculate: {alignSelf: 'center'},

  mt20: {marginTop: 20},

  forumItem: {
    width: TABLE_ITEM_WIDTH,
    height: 70,
    justifyContent: 'center',
  },

  tableTitle: {
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },

  longTitle: {
    alignItems: 'flex-start',
    textAlign: 'center',
  },

  tableContent: {
    width: Metrics.DEVICE_WIDTH - 32,
  },
});
