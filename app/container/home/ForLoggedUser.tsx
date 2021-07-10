import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Metrics} from '@utils';

import Banner from './components/Banner';
import NewsShowecase from './components/NewsShowecase';
import Attendees from './components/Attendees';
import LastMoves from './components/LastMoves';
import FeaturedArticles from './components/FeaturedArticles';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {changeToken, logIn} from '../../stores/features/user/UserSlice';
import {fetchHomeData} from '../../stores/features/home/HomeSlice';
import {useGetHomeDatasQuery} from '../../stores/rtkApi';
import {RootState} from '../../stores/RootStore';

export default function ForLoggedUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.arabulucuara);
  console.log('arabulucuara:', user);

  const {data, error, isLoading} = useGetHomeDatasQuery();

  console.log('data:', data);
  console.log('error:', error);

  console.log('isLoading:', isLoading);

  const fetchArticles = async () => {
    try {
      dispatch(fetchHomeData());
      const res = await axios.get('https://api.arabulucuara.com/Portal/GetArticles');
      console.log('res:', res.status);
      // alert('We got the articles');
    } catch (error) {
      console.log('error on getArticles:', error.response);
      if (error.response.status !== 401) {
        // alert('error on articlesƒ');
      }
    }
  };

  const logInUser = async () => {
    try {
      const res = await axios.post('https://api.arabulucuara.com/Account/login', {
        username: 'uzman123',
        password: '123123',
      });

      // console.log('res of login:', res.data);
      dispatch(logIn({token: res.data.token.token, refreshToken: res.data.refreshToken}));
    } catch (error) {
      console.log('error of login:', error);
    }
  };

  const logUser = () => {
    console.log('log user:', user);
  };

  const changeOnlyToken = () => {
    dispatch(changeToken('token'));
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          fetchArticles();
          fetchArticles();
        }}>
        <Text>Fetch articles</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logInUser}>
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logUser}>
        <Text>Log user</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeOnlyToken}>
        <Text>reset token</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.cotentContainerStyle}>
        <View style={styles.bannerArea}>
          <Banner />
        </View>

        <View style={styles.lastMoves}>
          <LastMoves actions={lastMoves} onPress={item => console.log('pressed item:', item)} />
        </View>

        <View style={styles.attendees}>
          <Attendees attendees={attendees} />
        </View>

        <View style={styles.newsShowCase}>
          <NewsShowecase news={news} openNew={(id: number) => console.log('open new id:', id)} />
        </View>

        <View style={styles.featuredArticles}>
          <FeaturedArticles
            articles={data?.articles}
            openArticle={article => console.log('pressed article + ', article)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  cotentContainerStyle: {paddingBottom: 28},

  bannerArea: {marginTop: Metrics.hp(20), alignItems: 'center'},

  featuredArticles: {marginTop: Metrics.hp(20), alignItems: 'center'},

  lastMoves: {marginTop: Metrics.hp(20), alignItems: 'center'},

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

const lastMoves = [
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
  {
    id: 1,
    time: '22:35',
    nameSurname: 'Emre GEDİKLİ',
    action: 'Profil Bilgilerini Güncelledi.',
  },
];

const articles = [
  {
    id: 1,
    title: 'ARABULUCULUK',
    publisher: 'Hanife Tuba SAĞCAN',
  },
  {
    id: 1,
    title: 'ARABULUCULUK MERKEZLERİ KALİTE STANDARTLARI',
    publisher: 'Hanife Tuba SAĞCAN',
  },
  {
    id: 1,
    title: 'UYUŞMAZLIKLARIN ÇÖZÜMÜNDE ARABULUCULUK',
    publisher: 'Hanife Tuba SAĞCAN',
  },
  {
    id: 1,
    title: 'AİLE HUKUKUNDAN KAYNAKLI NİTELİKLİ BİLİRKİŞİ RAPORU ÖRNEĞİ',
    publisher: 'Hanife Tuba SAĞCAN',
  },
  {
    id: 1,
    title:
      'YARGITAY ve BÖLGE ADLİYE MAHKEMELERİ KARARLARI EŞLİĞİNDE ARABULUCULUK TUTANAKLARININ İPTAL SEBEPLERİ, YARGIYA KONU OLMA GEREKÇELERİ VE ÇÖZÜM ÖNERİLERİ',
    publisher: 'Hanife Tuba SAĞCAN',
  },
];
