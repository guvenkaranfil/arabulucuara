import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Labels, Metrics} from '@utils';

type PedometerProps = {
  totalCount: number;
  activeStep: number;
};

export default function Pedometer({totalCount, activeStep}: PedometerProps) {
  console.log('activeStep:', activeStep);
  const _renderSteps = () => {
    return Array.from({length: totalCount}, (_, k) => k + 1).map((step, index) => (
      <View
        key={index}
        style={[styles.step, step <= activeStep ? styles.activeStep : styles.inActiveStep]}>
        <Text style={Labels.label18BoldWhite}>{step}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.stripe} />
      {_renderSteps()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 56,
    height: 33,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  stripe: {
    marginLeft: 17,
    position: 'absolute',
    width: Metrics.DEVICE_WIDTH - 56 - 34,
    height: 6,
    backgroundColor: '#511337',
  },

  step: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },

  activeStep: {
    backgroundColor: '#181C32',
  },

  inActiveStep: {
    backgroundColor: '#501336',
  },

  activeLabel: {
    backgroundColor: '#181C32',
  },

  inActiveLabel: {},
});
