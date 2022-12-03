import React from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import HTML from 'react-native-render-html';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from '@routes/stacks/profile/Types';
import {Constants, Fonts, Metrics} from '@utils';
import {MessageDetail as IMessageDetail, useGetMessageDetailQuery} from './messageApi';
import {FlatList} from 'react-native-gesture-handler';
import {TickIcon} from '@icons';

export interface Props {
  route: RouteProp<ProfileNavigatorParamList, 'messageDetail'>;
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'messageDetail'>;
}

export default function MessageDetail({navigation, route}: Props) {
  const {messageId, image, title, name} = route.params;
  const {data: messages} = useGetMessageDetailQuery({id: messageId});
  const user = useSelector((state: RootState) => state.user);
  console.log('user:', user);

  console.log('message id: ', messageId);
  console.log('message details...: ', messages);

  const isMessageOwner = (message: IMessageDetail): Boolean => {
    const username = user?.name + user?.surname;
    console.log('Message.name: ', message.name.toLocaleLowerCase().replace(/\s/g, ''));
    if (
      message.name.toLocaleLowerCase().replace(/\s/g, '') ===
      username?.toLocaleLowerCase().replace(/\s/g, '')
    )
      return true;
    return false;
  };

  const _renderFooterInput = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Pressable style={styles.sendButton}>
          <TickIcon />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        <View style={styles.messageItem}>
          <Image style={styles.profileImage} source={{uri: Constants.USER_IMAGE + image}} />
          <View style={styles.userAndMessage}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.shortMessage}>
              {title}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        // refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        data={[...messages, ...messages, ...messages, ...messages]}
        contentContainerStyle={styles.contentStyle}
        renderItem={({item, index}) => (
          <View>
            <HTML
              key={index}
              source={{html: item.body}}
              containerStyle={isMessageOwner(item) ? styles.messageOwner : styles.messageSender}
              baseFontStyle={styles.htmlFontStyle}
            />
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
      />
      {_renderFooterInput()}
    </View>
  );
}

const MARGIN_HORIZONTAL = 25;
const MESSAGE_ITEM_LEFT_SIDE = 60;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userProfile: {
    width: Metrics.DEVICE_WIDTH,
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  contentStyle: {
    paddingTop: 24,
    paddingHorizontal: 25,
    paddingBottom: 50,
  },

  messageItem: {
    marginLeft: 25,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
    height: 60,
    backgroundColor: 'pink',
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

  htmlFontStyle: {
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  messageOwner: {
    marginBottom: 20,
    padding: 13,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    // backgroundColor: '#F4E1F0',
  },

  messageSender: {
    marginBottom: 20,
    padding: 13,
    alignSelf: 'flex-start',
    borderRadius: 10,
    backgroundColor: 'pink',
    // backgroundColor: '#F5F6FA',
  },

  inputContainer: {
    paddingLeft: 25,
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
  },

  input: {
    width: Metrics.DEVICE_WIDTH - 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  sendButton: {
    width: 50,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#7E0736',
  },
});
