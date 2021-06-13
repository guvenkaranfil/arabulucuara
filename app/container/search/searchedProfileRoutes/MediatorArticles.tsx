import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
};

export default function MediatorArticles({route}: ScreenProps) {
  const {profile} = route.params;

  return (
    <ProfileLayout user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Makaleler</Text>

        {ARTICLES.map((article, index) => (
          <View key={index} style={styles.article}>
            <Text style={styles.aritcleTitle}>{article.articleTitle}</Text>
          </View>
        ))}
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 30,
    paddingHorizontal: Metrics.horizontalContainerPadding,
  },

  screenTitle: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  article: {
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  aritcleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});

const ARTICLES = [
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
];
