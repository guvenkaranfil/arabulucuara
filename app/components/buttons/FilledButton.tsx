import React from 'react';
import {ActivityIndicator, StyleSheet, Text, Pressable, ViewStyle, TextStyle} from 'react-native';
import {Labels, Metrics} from '@utils';

type Props = {
  style?: ViewStyle[];
  labelStyle?: TextStyle;
  label: string;
  bgColor?: string;
  isLoading?: boolean;
  onPress: () => void;
};

export default function FilledButton({
  style,
  labelStyle,
  label,
  bgColor = '#7C37FA',
  isLoading,
  onPress,
}: Props) {
  return (
    <Pressable style={[styles.container, {backgroundColor: bgColor}, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[Labels.label16BoldWhite, labelStyle]}>{label}</Text>
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
});
