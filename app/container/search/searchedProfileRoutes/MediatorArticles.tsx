import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CommonStyles, Fonts, Metrics} from '@utils';
import {StackNavigationProp} from '@react-navigation/stack';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'profileDetail'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'mediatorArticles'>;
};

export default function MediatorArticles({navigation, route}: ScreenProps) {
  const {profile, member} = route.params;
  console.log('');

  if (member?.makaleler && member?.makaleler?.length > 0) {
    return (
      <ProfileLayout user={profile}>
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Makaleler</Text>

          {member?.makaleler.map((article, index) => (
            <Pressable onPress={() => navigation.navigate('articleDetail', {article: article})}>
              <View key={index} style={styles.article}>
                <Text style={styles.aritcleTitle}>{article.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout user={profile}>
      <View style={CommonStyles.searchEmptyPage}>
        <Text>Makale bulunamadı</Text>
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
