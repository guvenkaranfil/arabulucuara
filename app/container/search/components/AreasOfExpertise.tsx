import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import {Fonts} from '@utils';

export interface ExpertiseArea {
  id: number;
  label: string;
}

interface ScreenProps {
  expertises: Array<ExpertiseArea>;
  selectedExpertiseAreas: Map<number, boolean>;
  onSelect: (exptertiseArea: ExpertiseArea) => void;
}

export default function AreasOfExpertise({
  expertises,
  selectedExpertiseAreas,
  onSelect,
}: ScreenProps) {
  if (expertises && expertises?.length > 0) {
    return (
      <View>
        <Text style={styles.title}>Uzmanlık Alanları</Text>
        {expertises.map((expertise, index) => (
          <View key={index}>
            <RoundCheckBox
              roundStyle={styles.checkbox}
              labelStyle={styles.checkboxLabel}
              label={expertise.label}
              isVisible={selectedExpertiseAreas?.get(expertise?.id) ?? false}
              onPress={() => onSelect(expertise)}
            />
          </View>
        ))}
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 18,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#000000',
  },

  checkbox: {
    borderColor: '#000',
    borderRadius: 3,
  },

  checkboxLabel: {
    color: '#000',
  },
});
