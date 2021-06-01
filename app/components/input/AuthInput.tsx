import React from 'react';
import {Image, StyleSheet, View, TextInput, KeyboardType, TouchableOpacity} from 'react-native';

import {Fonts, Metrics} from '@utils';
// import {SecureIcon} from '@icons';

export default function AuthInput({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize = 'none',
  isPassowordInput = false,
  secureTextEntry = false,
  onPressSecure,
}: Props) {
  const hitSlopArea = {top: 15, right: 15, bottom: 15, left: 15};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#CBC9D9"
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
    width: Metrics.DEVICE_WIDTH - 56,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  input: {
    paddingHorizontal: 20,
    width: Metrics.DEVICE_WIDTH - 56,
    height: 44,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#0F0A39',
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
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardType;
  autoCapitalize?: 'none' | 'sentences';
  secureTextEntry?: boolean;
  isPassowordInput?: boolean;
  onPressSecure?: () => void;
};
