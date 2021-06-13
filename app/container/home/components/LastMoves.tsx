import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';

type Props = {
  actions: Array<{id: number; time: string; nameSurname: string; action: string}>;
  onPress: (item: {id: number; time: string; nameSurname: string; action: string}) => void;
};

export default function LastMoves({actions, onPress}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Son Hareketler</Text>
      {actions.map((move, index) => (
        <Pressable key={index} style={styles.moveAction} onPress={() => onPress(move)}>
          <Text>{move.time}</Text>
          {index + 1 !== actions.length ? (
            <View style={styles.stripe}>
              <View style={styles.actionBorder} />
            </View>
          ) : (
            <View style={[styles.stripe, styles.latestStripe]}>
              <View style={styles.actionBorder} />
            </View>
          )}
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {move.nameSurname} <Text style={styles.welcomeMessage}>{move.action}</Text>
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
