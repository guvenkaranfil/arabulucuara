import {Fonts, Metrics} from '@utils';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import RoundCheckBox from '@components/checkbox/RoundCheckBox';

interface Option {
  id: number;
  label: string;
}

interface ScreenProps {
  question: string;
  option1: Option;
  option2: Option;
  option3: Option;
  selectedOption: Option;
  onPressOption: (option: Option) => void;
}

export default function TripleQuestion({
  question,
  option1,
  option2,
  option3,
  selectedOption,
  onPressOption,
}: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.questionLabel}>{question}</Text>
      <View style={styles.options}>
        <RoundCheckBox
          roundStyle={styles.option}
          labelStyle={styles.optionLabel}
          isVisible={selectedOption?.id === option1.id}
          label={option1.label}
          onPress={() => onPressOption(option1)}
        />
        <RoundCheckBox
          roundStyle={styles.option}
          labelStyle={styles.optionLabel}
          isVisible={selectedOption?.id === option2.id}
          label={option2.label}
          onPress={() => onPressOption(option2)}
        />
        <RoundCheckBox
          roundStyle={styles.option}
          labelStyle={styles.optionLabel}
          isVisible={selectedOption?.id === option3.id}
          label={option3.label}
          onPress={() => onPressOption(option3)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: Metrics.CONTAINER_WIDTH,
  },

  questionLabel: {
    paddingBottom: 14,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#000000',
  },

  options: {
    paddingRight: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  option: {
    borderColor: '#000',
  },

  optionLabel: {
    color: '#000000',
  },
});
