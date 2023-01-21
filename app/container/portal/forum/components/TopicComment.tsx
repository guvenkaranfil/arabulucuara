/* eslint-disable curly */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import HTML from 'react-native-render-html';
import {LikeIcon, DislikeIcon} from '@icons';
import {Fonts, Metrics} from 'utils';
import moment from 'moment';
import {Constants} from '@utils';

interface TopicComment {
  comment: {
    mesajId: number;
    adiSoyadi: string;
    resim: string;
    duzenlemeTarihi: string;
    mesaj: string;
    likeCount: number;
    dislikeCount: number;
  };
}

export default function TopicComment({comment}: TopicComment) {
  const [likedCount, setlikedCount] = useState(comment.likeCount);
  const [dislikeCount, setdislikeCount] = useState(comment.dislikeCount);
  const [lastEditedType, setlastEditedType] = useState<'plus' | 'minus' | undefined>();

  console.log('COMMENT: ', comment);

  const updateCount = (type: 'plus' | 'minus') => {};

  return (
    <View style={styles.comment}>
      <View style={styles.commentHeader}>
        <Image source={{uri: Constants.USER_IMAGE + comment.resim}} style={styles.profilePhoto} />
        <View style={styles.commentByUser}>
          <Text style={styles.commentTitle}>{comment.adiSoyadi}</Text>
          <Text style={styles.commentDate}>
            {moment(comment.duzenlemeTarihi).format('DD-MM-YYYY')}
          </Text>
        </View>
      </View>

      <View>
        <HTML source={{html: comment.mesaj}} />
      </View>

      <View style={styles.commentFooter}>
        <Pressable style={styles.commentAction} onPress={() => updateCount('plus')}>
          <LikeIcon width={16} height={16} />
          <Text style={styles.commentCount}>{likedCount}</Text>
        </Pressable>

        <Pressable style={styles.commentAction} onPress={() => updateCount('minus')}>
          <DislikeIcon width={16} height={16} />
          <Text style={styles.commentCount}>{dislikeCount}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
