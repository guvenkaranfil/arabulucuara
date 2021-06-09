import React from 'react';
import {Image, StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';

import HTML from 'react-native-render-html';
import FilledButton from 'components/buttons/FilledButton';
import {Fonts, Metrics} from 'utils';
import {OnlyPersonIcon, ViewsIcon, LikeIcon, DislikeIcon} from '@icons';

export default function TopicDetail() {
  const _renderComments = () => {
    return comments.map((comment, index) => (
      <View key={index} style={styles.comment}>
        <View style={styles.commentHeader}>
          <Image source={{uri: comment.profilePhoto}} style={styles.profilePhoto} />
          <View style={styles.commentByUser}>
            <Text style={styles.commentTitle}>{comment.nameSurname}</Text>
            <Text style={styles.commentDate}>{comment.date}</Text>
          </View>
        </View>

        <View>
          <HTML source={{html: comment.comment}} />
        </View>

        <View style={styles.commentFooter}>
          <Pressable style={styles.commentAction}>
            <LikeIcon width={16} height={16} />
            <Text style={styles.commentCount}>{comment.likedCount}</Text>
          </Pressable>

          <Pressable style={styles.commentAction}>
            <DislikeIcon width={16} height={16} />
            <Text style={styles.commentCount}>{comment.dislikeCount}</Text>
          </Pressable>
        </View>
      </View>
    ));
  };

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

        {_renderComments()}

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

  comment: {
    marginBottom: 20,
    padding: 16,
    width: Metrics.DEVICE_WIDTH - 28 * 2,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  commentHeader: {
    marginBottom: 17,
    flexDirection: 'row',
  },

  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },

  commentByUser: {
    marginLeft: 9,
  },

  commentTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  commentDate: {
    paddingTop: 3,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },

  commentFooter: {
    marginTop: 22,
    paddingTop: 10,
    paddingRight: 35,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#B3B3B3',
  },

  commentAction: {
    marginLeft: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  commentCount: {
    paddingLeft: 9,
    fontSize: 13,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
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
