import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';
import {NewlyJoinedUser} from '@home/Models';
import {getHourAndMinute} from '@helpers/DateFormatter';

type Props = {
  attendees: Array<NewlyJoinedUser>;
};

export default function Attendees({attendees}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aramıza Katılanlar</Text>
      {attendees.map((attendee, index) => (
        <Pressable key={index}>
          <View style={styles.attendee}>
            <Image style={styles.profilePhoto} source={{uri: attendee.image}} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {attendee.name} <Text style={styles.welcomeMessage}>aramıza hoşgedin!</Text>
              </Text>
              <Text style={styles.time}>{getHourAndMinute(attendee.createdOn)}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - 50,
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  attendee: {
    marginTop: 15,
    flexDirection: 'row',
    width: '100%',
  },

  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  userInfo: {
    paddingTop: 5,
    paddingLeft: 10,
  },

  name: {
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#7E0736',
  },

  welcomeMessage: {
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  time: {
    paddingTop: 3,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});
