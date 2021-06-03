import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Metrics} from 'utils';

import Banner from './components/Banner';
import NewsShowecase from './components/NewsShowecase';
import RoutingButtons from './components/RoutingButtons';
import Attendees from './components/Attendees';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cotentContainerStyle}>
        <View style={styles.bannerArea}>
          <Banner />
        </View>

        <View style={styles.newsShowCase}>
          <NewsShowecase news={news} openNew={(id: number) => console.log('open new id:', id)} />
        </View>

        <View style={styles.routingButtons}>
          <RoutingButtons
            searchMediator={() => console.log('onPress..')}
            searchExpertMediator={() => console.log('onPress..')}
            searchMediatorCenter={() => console.log('onPress..')}
            searchPro={() => console.log('onPress..')}
            openCalculator={() => console.log('onPress..')}
          />
        </View>

        <View style={styles.attendees}>
          <Attendees attendees={attendees} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  cotentContainerStyle: {paddingBottom: 28},

  bannerArea: {marginTop: Metrics.hp(20), alignItems: 'center'},

  newsShowCase: {marginTop: Metrics.hp(20), alignItems: 'center'},

  routingButtons: {alignItems: 'center'},

  attendees: {marginTop: Metrics.hp(35), alignItems: 'center'},
});

const news = [
  {
    id: 1,
    date: 26,
    month: 'Ağustos',
    title: 'YILDIZLARINIZ PARLASIN',
  },
  {
    id: 2,
    date: 26,
    month: 'Ağustos',
    title: 'Arabulucuara ana sayfasında yerinizi aldınız mı? 3. satır demesi 3. satır demesi',
  },
  {
    id: 3,
    date: 26,
    month: 'Ağustos',
    title: 'Arabulucuara Forum yayında',
  },
  {
    id: 4,
    date: 26,
    month: 'Ağustos',
    title: '2021 yılı Arabuluculuk aidatlarınızı ödediniz mi?',
  },
  {
    id: 5,
    date: 26,
    month: 'Ağustos',
    title: 'Her Anlaşma Bir Fidan - Arabulucular Ormanı',
  },
];

const attendees = [
  {
    id: 'ademgul',
    nameSurname: 'Adem Gül',
    profilePhotoUrl: 'https://arabulucuara.com/uploaded/userimage/blank.png',
    time: '22:46',
  },

  {
    id: 'serkanAricanl',
    nameSurname: 'Serkan ARICAN',
    profilePhotoUrl:
      'https://arabulucuara.com/uploaded/userimage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    time: '22:46',
  },
  {
    id: 'ademgul',
    nameSurname: 'Adem Gül',
    profilePhotoUrl: 'https://arabulucuara.com/uploaded/userimage/blank.png',
    time: '22:46',
  },

  {
    id: 'serkanAricanl',
    nameSurname: 'Serkan ARICAN',
    profilePhotoUrl:
      'https://arabulucuara.com/uploaded/userimage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    time: '22:46',
  },
  {
    id: 'ademgul',
    nameSurname: 'Adem Gül',
    profilePhotoUrl: 'https://arabulucuara.com/uploaded/userimage/blank.png',
    time: '22:46',
  },

  {
    id: 'serkanAricanl',
    nameSurname: 'Serkan ARICAN',
    profilePhotoUrl:
      'https://arabulucuara.com/uploaded/userimage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    time: '22:46',
  },
  {
    id: 'ademgul',
    nameSurname: 'Adem Gül',
    profilePhotoUrl: 'https://arabulucuara.com/uploaded/userimage/blank.png',
    time: '22:46',
  },

  {
    id: 'serkanAricanl',
    nameSurname: 'Serkan ARICAN',
    profilePhotoUrl:
      'https://arabulucuara.com/uploaded/userimage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    time: '22:46',
  },
];
