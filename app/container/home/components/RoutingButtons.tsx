import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';

import {CalculatorIcon, SearchPersonIcon} from '@icons';
import {Fonts, Metrics} from '@utils';

type RoutingButtonsTypes = {
  searchMediator: () => void;
  searchMediatorCenter: () => void;
  searchPro: () => void;
  showCalculator?: boolean;
  openCalculator: () => void;
};

type RoutingButtonTypes = {
  label: string;
  onPress: () => void;
};

export default function RoutingButtons({
  searchMediator,
  searchMediatorCenter,
  searchPro,
  showCalculator = true,
  openCalculator,
}: RoutingButtonsTypes) {
  return (
    <View style={styles.container}>
      <RoutingButton label="Arabulucu Ara" onPress={searchMediator} />
      <RoutingButton label="Arabuluculuk Merkezi Ara" onPress={searchMediatorCenter} />
      <RoutingButton label="Uzman Ara" onPress={searchPro} />

      {showCalculator && (
        <Pressable style={styles.calculator} onPress={openCalculator}>
          <CalculatorIcon width={Metrics.hp(75)} height={Metrics.hp(80)} />
          <Text style={styles.calculatorLabel}>Arabuluculuk Ücreti Hesapla</Text>
        </Pressable>
      )}
    </View>
  );
}

const RoutingButton = ({label, onPress}: RoutingButtonTypes) => (
  <Pressable style={styles.button} onPress={onPress}>
    <SearchPersonIcon width={Metrics.hp(50)} height={Metrics.hp(52)} />
    <Text style={styles.butonLabel}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.hp(26),
  },

  button: {
    marginBottom: Metrics.hp(20),
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
    height: Metrics.hp(55),
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E1E3E9',
  },

  butonLabel: {
    paddingLeft: Metrics.wp(13),
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  calculator: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
    height: Metrics.hp(80),
    alignItems: 'center',
    backgroundColor: '#F4E1F0',
  },

  calculatorLabel: {
    paddingLeft: Metrics.wp(11),
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});
