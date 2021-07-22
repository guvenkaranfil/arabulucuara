import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {Labels, Metrics} from '@utils';

type Props = {
  label: string;
  onPress: () => void;
};

export default function FilledButton({label, onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={Labels.label16BoldWhite}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - 56,
    height: Metrics.hp(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
  },
});
