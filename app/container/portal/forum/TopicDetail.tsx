import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';

import HTML from 'react-native-render-html';
import FilledButton from 'components/buttons/FilledButton';
import {Fonts} from 'utils';
import {OnlyPersonIcon, ViewsIcon} from '@icons';
import TopicComment from './components/TopicComment';

export default function TopicDetail() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{content.title}</Text>
        <HTML source={{html: content.htmlContent}} />

        <View style={styles.topicOwner}>
          <View style={styles.publisher}>
            <OnlyPersonIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{content.publisher}</Text>
          </View>
          <View style={styles.views}>
            <ViewsIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{content.views}</Text>
          </View>
        </View>

        {comments.map(comment => (
          <TopicComment comment={comment} />
        ))}

        <FilledButton
          label="Yorum Yap"
          bgColor="#7E0736"
          onPress={() => console.log('Add comment...')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingBottom: 25},

  title: {
    paddingTop: 33,
    paddingBottom: 25,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  topicOwner: {
    marginTop: 16,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  publisher: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  aboutTopicLabels: {
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});

const content = {
  title: 'Med-Arb sürecinde Tahkim şartı ne şekilde yazılmalıdır?',
  htmlContent:
    '<b>Line1</b><br/>line2<br/>line3<br/><a href="http://arabulucuara.com">Arabulucu Ara</a>',
  publisher: 'Mehmet GÜNEY',
  views: 10,
};

const comments = [
  {
    id: 1,
    nameSurname: 'Sevil KOYUNCU',
    profilePhoto:
      'https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    date: '22.Şubat.2021 - 10:33',
    comment: 'Lorem <b>Comment</b>',
    likedCount: 3,
    dislikeCount: 0,
  },

  {
    id: 2,
    profilePhoto:
      'https://arabulucuara.com/uploaded/UserImage/55168eff-df91-430c-ac6b-aaf782db5572.jpg',
    nameSurname: 'Sevil KOYUNCU',
    date: '22.Şubat.2021',
    comment: 'Lorem <b>Comment</b>',
    likedCount: 3,
    dislikeCount: 0,
  },
];
