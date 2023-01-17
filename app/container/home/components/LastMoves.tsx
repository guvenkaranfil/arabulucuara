import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';
import {NewlyOperation} from '@home/Models';
import {getHourAndMinute} from '@helpers/DateFormatter';

type Props = {
  actions: Array<NewlyOperation>;
  onPress: (item: NewlyOperation) => void;
};

export default function LastMoves({actions, onPress}: Props) {
  console.log('actions:', actions);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Son Hareketler</Text>
      {actions &&
        actions?.length > 0 &&
        actions?.map((move, index) => (
          <Pressable key={index} style={styles.moveAction} onPress={() => onPress(move)}>
            <Text style={styles.date}>{getHourAndMinute(move.time)}</Text>
            {index + 1 !== actions?.length ? (
              <View style={styles.stripe}>
                <View style={styles.actionBorder} />
              </View>
            ) : (
              <View style={[styles.stripe, styles.latestStripe]}>
                <View style={styles.actionBorder} />
              </View>
            )}
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {move.user?.name} <Text style={styles.welcomeMessage}>{move.operationName}</Text>
            </Text>
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
    paddingBottom: 20,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  moveAction: {
    flexDirection: 'row',
    width: '100%',
    height: 38,
  },

  date: {
    fontSize: 14,
    width: 40,
  },

  stripe: {
    marginTop: 5,
    marginHorizontal: 14,
    width: 1,
    height: 38,
    backgroundColor: '#B3B3B3',
  },

  actionBorder: {
    left: -6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F4E1F0',
  },

  latestStripe: {
    marginTop: 3,
    height: 12,
  },

  name: {
    maxWidth: Metrics.DEVICE_WIDTH - 50 - 70,
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#7E0736',
  },

  welcomeMessage: {
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
