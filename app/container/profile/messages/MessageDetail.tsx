/* eslint-disable curly */
import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import HTML from 'react-native-render-html';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileNavigatorParamList} from '@routes/stacks/profile/Types';
import {Constants, Fonts, Metrics} from '@utils';
import {
  MessageDetail as IMessageDetail,
  useGetMessageDetailQuery,
  useReplyMessageMutation,
} from './messageApi';
import {FlatList} from 'react-native-gesture-handler';
import {SendIcon} from '@icons';

export interface Props {
  route: RouteProp<ProfileNavigatorParamList, 'messageDetail'>;
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'messageDetail'>;
}

export default function MessageDetail({navigation, route}: Props) {
  const {messageId, image, title, name} = route.params;
  const user = useSelector((state: RootState) => state.user);

  const [repliedMessasge, setrepliedMessasge] = useState('');

  const {data: messages, refetch} = useGetMessageDetailQuery({id: messageId});
  const [replyMessage, {isLoading: isReplyingMessage}] = useReplyMessageMutation();
  console.log('user:', user);

  console.log('message id: ', messageId);
  console.log('message details...: ', messages);

  const handleReplyMessage = () => {
    if (repliedMessasge.length > 0) {
      replyMessage({messageId: messageId, messageBody: repliedMessasge})
        .then(res => {
          console.log('reply handle message: ', res);
          setrepliedMessasge('');
          refetch();
          Alert.alert('Başarılı', res?.data?.message);
        })
        .catch(err => {
          console.log('reply error message: ', err);
        });
    } else {
      Alert.alert('Lütfen Dikkat', 'Geçerli bir mesaj giriniz');
    }
  };

  const isMessageOwner = (message: IMessageDetail): Boolean => {
    // @ts-ignore
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
      <View style={[styles.inputContainer]}>
        <TextInput value={repliedMessasge} onChangeText={setrepliedMessasge} style={styles.input} />
        <Pressable style={styles.sendButton} onPress={handleReplyMessage}>
          {isReplyingMessage ? <ActivityIndicator size="small" color="#fff" /> : <SendIcon />}
        </Pressable>
      </View>
    );
  };

  if (messages && messages?.length > 0) {
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
          data={messages}
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
        <KeyboardAvoidingView
          style={styles.inputAvoidingStyle}
          keyboardVerticalOffset={120}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {_renderFooterInput()}
        </KeyboardAvoidingView>
      </View>
    );
  }

  return null;
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
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
  },

  contentStyle: {
    paddingTop: 24,
    paddingHorizontal: 25,
    paddingBottom: 50 + 25,
  },

  messageItem: {
    marginLeft: 25,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
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
    // position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 25,
    width: Metrics.DEVICE_WIDTH,
    height: 70,
    backgroundColor: '#B3B3B3',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    padding: 13,
    width: Metrics.DEVICE_WIDTH - 125,
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

  inputAvoidingStyle: {width: '100%'},
});
