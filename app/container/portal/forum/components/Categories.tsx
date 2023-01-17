import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';

export interface Category {
  kategoriId: number;
  category: string;
  kategoriAdi: string;
}

type Props = {
  categories: Array<Category>;
  onPress: (item: Category) => void;
};

export default function Categories({categories, onPress}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kategoriler</Text>
      </View>

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Pressable key={index} style={styles.category} onPress={() => onPress(category)}>
            <Text style={styles.categoryLabel}>{category.kategoriAdi}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},

  header: {
    width: Metrics.DEVICE_WIDTH,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E1F0',
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  categories: {
    alignItems: 'center',
  },

  category: {
    marginTop: 23,
    paddingVertical: 20,
    paddingHorizontal: 17,
    width: Metrics.DEVICE_WIDTH - 50,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  categoryLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});
