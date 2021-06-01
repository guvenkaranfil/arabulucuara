import React from 'react';
import {ActivityIndicator, StyleSheet, Text, Pressable} from 'react-native';
import {Metrics} from '@utils';

type Props = {
  label: string;
  bgColor?: string;
  isLoading?: boolean;
  onPress: () => void;
};

export default function FilledButton({label, bgColor = '#7C37FA', isLoading, onPress}: Props) {
  return (
    <Pressable style={[styles.container, {backgroundColor: bgColor}]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - 56,
    height: Metrics.hp(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
});
