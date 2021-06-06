import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from 'routes/stacks/portal/Types';

import {categoriesSample, topicSample} from './mocks';
import Categories, {Category} from './components/Categories';
import UpdatedTopics from './components/UpdatedTopics';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'forum'>;
}

export default function Forum({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Categories
          categories={categoriesSample}
          onPress={(item: Category) => navigation.navigate('categoryDetail', {...item})}
        />
        <UpdatedTopics topics={topicSample} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingVertical: 30},
});
