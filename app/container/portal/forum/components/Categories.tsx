import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  id: number;
  label: string;
};

export default function Categories({id, label}: Props) {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
