import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from 'routes/stacks/portal/Types';
import {Fonts, Metrics} from 'utils';
import Topic, {TopicType} from './components/Topic';
import FilledButton from 'components/buttons/FilledButton';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'categoryDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'categoryDetail'>;
}

export default function CategoryDetail({route, navigation}: Props) {
  const {label} = route.params;

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );

  const _renderAddNewTopicButton = () => (
    <FilledButton label="Yeni Konu" bgColor="#7E0736" onPress={() => console.log('onPress..')} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.topics}
        data={topicSample}
        ListHeaderComponent={_renderHeader}
        renderItem={({item}) => (
          <Topic
            topic={item}
            onPress={(topic: TopicType) => navigation.navigate('TopicDetail', {...topic})}
          />
        )}
        ListFooterComponent={_renderAddNewTopicButton}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 28,
    padding: 12,
    width: Metrics.DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E1F0',
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  topics: {
    paddingBottom: 30,
    alignItems: 'center',
  },

  footer: {
    marginTop: 30,
  },
});

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
