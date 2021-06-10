import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {CommonStyles, Fonts, Metrics} from '@utils';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'dataBank'>;
}

export default function DataBank({navigation}: Props) {
  return (
    <View style={CommonStyles.container}>
      <FlatList
        contentContainerStyle={CommonStyles.paddingForScroll}
        data={DATA_BANKS}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.category}
            onPress={() => navigation.navigate('dataBankList', {dataBank: item})}>
            <Text style={styles.categoryTitle}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginBottom: 15,
    padding: 28,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  categoryTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});

const DATA_BANKS = [
  {
    id: 1,
    name: 'MEVZUAT',
    content: '',
  },
  {
    id: 2,
    name: 'TÜM İÇTİHATLAR',
    content: '',
  },
  {
    id: 3,
    name: 'YARGITAY KARARLARI',
    content: '',
  },
  {
    id: 4,
    name: 'BÖLGE ADLİYE MAHKEME KARARLARI',
    content: '',
  },
];
