import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {CommonStyles, Fonts, Metrics} from '@utils';
import {useGetDataBankCategoriesQuery} from './DataBankApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'dataBank'>;
}

export default function DataBank({navigation}: Props) {
  const {data, isLoading} = useGetDataBankCategoriesQuery();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (data && Array.isArray(data)) {
    return (
      <View style={CommonStyles.container}>
        <FlatList
          contentContainerStyle={CommonStyles.paddingForScroll}
          data={data}
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

  return null;
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
