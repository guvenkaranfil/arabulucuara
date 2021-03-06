import React from 'react';
import {Image, StyleSheet, View, TextInput, KeyboardType, TouchableOpacity} from 'react-native';

import {Labels, Metrics} from '@utils';
import {ViewStyle} from 'react-native';
// import {SecureIcon} from '@icons';

export default function Input({
  viewStyle,
  width,
  height,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize = 'none',
  isPassowordInput = false,
  secureTextEntry = false,
  isMultiLine = false,
  onPressSecure,
}: Props) {
  const hitSlopArea = {top: 15, right: 15, bottom: 15, left: 15};

  const CONTAINER_WIDTH = {width: width ? width : Metrics.DEVICE_WIDTH - 56};
  const CONTAINER_HEIGHT = {height: height ? height : 44};

  return (
    <View style={[styles.container, CONTAINER_WIDTH, CONTAINER_HEIGHT, viewStyle]}>
      <TextInput
        style={[styles.input, CONTAINER_WIDTH, CONTAINER_HEIGHT]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#CBC9D9"
        multiline={isMultiLine}
      />
      {isPassowordInput && (
        <View style={styles.secureIconContainer}>
          <TouchableOpacity onPress={onPressSecure} hitSlop={hitSlopArea}>
            <Image source={require('../../assets/svgs/SecureIcon.png')} style={styles.secureIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  input: {
    textAlignVertical: 'top',
    paddingHorizontal: 20,
    ...Labels.label16RegularViolet,
  },

  secureIconContainer: {
    position: 'absolute',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
  },

  secureIcon: {
    width: 17,
    height: 15,
  },
});

type Props = {
  viewStyle?: ViewStyle;
  width?: number;
  height?: number;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardType;
  autoCapitalize?: 'none' | 'sentences';
  secureTextEntry?: boolean;
  isPassowordInput?: boolean;
  isMultiLine?: boolean;
  onPressSecure?: () => void;
};
