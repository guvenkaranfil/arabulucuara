import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from 'routes/stacks/portal/Types';

import Categories, {Category} from './components/Categories';
import UpdatedTopics from './components/UpdatedTopics';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'forum'>;
}

export default function Forum({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Categories
          categories={categoriesSample}
          onPress={(item: Category) => navigation.navigate('categoryDetail', {...item})}
        />
        <UpdatedTopics topics={topicSample} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingBottom: 30},
});

const categoriesSample = [
  {
    id: 1,
    label: 'SON ETKİLEŞİM ALAN KONULAR',
  },

  {
    id: 1,
    label: 'ARABULUCULUK HAKKINDA GENEL KONULAR',
  },

  {
    id: 1,
    label: 'ARABULUCULUK UYGULAMALARINDA AKLIMIZA TAKILANLAR',
  },

  {
    id: 1,
    label: 'ARABULUCUARA’YA BİR ÖNERİM VAR!',
  },
];

const topicSample = [
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
  {
    id: 1,
    date: '16.4.2021',
    label: 'ARABULUCULUK UZMANLIK EĞİTİMLERİNİN GEREKLİLİĞİ HAKKINDA NE DÜŞÜNÜYORSUNUZ?',
    nameSurname: 'Murat GÜNEY',
    views: 152,
  },
];
