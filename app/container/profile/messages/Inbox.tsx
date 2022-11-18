import {Fonts, Metrics} from '@utils';
import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from '@routes/stacks/profile/Types';

const messages = [
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage:
      'Mesaj başlığı buraya gelecekMesaj başlığı buraya gelecekMesaj başlığı buraya gelecekMesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage:
      'Mesaj başlığı buraya gelecekMesaj başlığı buraya gelecekMesaj başlığı buraya gelecekMesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
  {
    id: 1,
    name: 'Emre Gedikli',
    shortMessage: 'Mesaj başlığı buraya gelecek',
    profileImage: 'https://arabulucuara.com/uploaded/UserImage/blank.png',
  },
];

export interface Props {
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'messagesContainer'>;
}

export default function Inbox({navigation}: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        contentContainerStyle={styles.contentStyle}
        renderItem={({item, index}) => (
          <Pressable onPress={() => navigation.navigate('messageDetail', {messageId: item.id})}>
            <View key={index} style={styles.messageItem}>
              <Image style={styles.profileImage} source={{uri: item.profileImage}} />
              <View style={styles.userAndMessage}>
                <Text style={styles.name}>{item.name}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.shortMessage}>
                  {item.shortMessage}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}

const MARGIN_HORIZONTAL = 25;
const MESSAGE_ITEM_LEFT_SIDE = 60;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },

  contentStyle: {
    paddingTop: 24,
    paddingHorizontal: 25,
  },

  messageItem: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    height: 60,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  userAndMessage: {
    width: Metrics.DEVICE_WIDTH - MARGIN_HORIZONTAL * 2 - MESSAGE_ITEM_LEFT_SIDE,
    paddingLeft: 12,
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#000000',
  },

  shortMessage: {
    paddingTop: 3,
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#B3B3B3',
  },
});
