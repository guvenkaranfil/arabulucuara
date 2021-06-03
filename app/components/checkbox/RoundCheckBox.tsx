import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Fonts, Metrics} from 'utils';
import {TickIcon} from '@icons';

type Props = {
  id?: number;
  isVisible: boolean;
  label: string;
  onPress: (id: number) => void;
};

export default function RoundCheckBox({id, isVisible, label, onPress}: Props) {
  return (
    <Pressable onPress={() => onPress(id ?? -1)} style={styles.container}>
      <View style={[styles.roundBox, isVisible ? styles.checkedRound : styles.unCheckedRound]}>
        {isVisible && <TickIcon width={10} height={10} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
  },

  roundBox: {
    marginTop: 4,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  unCheckedRound: {
    borderWidth: 2,
    borderColor: '#fff',
  },

  checkedRound: {
    backgroundColor: '#000',
  },

  label: {
    paddingLeft: Metrics.hp(9),
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
    lineHeight: 24,
  },
});
