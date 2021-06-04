import React, {ReactElement} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Fonts, Metrics} from 'utils';

type Props = {
  icon: ReactElement;
  label: string;
  onPress: () => void;
};

export default function PortalRoute({icon, label, onPress}: Props) {
  return (
    <Pressable style={[styles.container, styles.shadow]} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    width: Metrics.wp(147),
    height: 91,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.5,

    elevation: 5,
  },

  label: {
    paddingTop: 7,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});
