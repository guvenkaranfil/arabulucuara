import React from 'react';
import {StyleSheet, Text, View, Pressable, ViewStyle, TextStyle} from 'react-native';
import {Labels, Metrics} from '@utils';
import {TickIcon} from '@icons';

type Props = {
  id?: number;
  roundStyle?: ViewStyle;
  isVisible: boolean;
  label: string;
  labelStyle?: TextStyle;
  onPress: (id: number) => void;
  openContract?: () => void;
};

const HIT_SLOP = 50;
export default function RoundCheckBox({
  id,
  roundStyle,
  isVisible,
  label,
  labelStyle,
  openContract,
  onPress,
}: Props) {
  return (
    <Pressable
      hitSlop={{left: HIT_SLOP, right: HIT_SLOP}}
      onPress={() => onPress(id ?? -1)}
      style={styles.container}>
      <View
        style={[
          styles.roundBox,
          isVisible ? styles.checkedRound : styles.unCheckedRound,
          roundStyle,
        ]}>
        {isVisible && <TickIcon width={10} height={10} />}
      </View>
      <Text onPress={openContract} style={[styles.label, labelStyle]}>
        {label}
      </Text>
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
    lineHeight: 24,
    ...Labels.label16RegularWhite,
  },
});
