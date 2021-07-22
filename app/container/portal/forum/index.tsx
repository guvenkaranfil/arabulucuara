import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {categoriesSample, topicSample} from './mocks';
import NewTopicModal from './components/NewTopicModal';
import FilledButton from '@components/buttons/FilledButton';
import Categories, {Category} from './components/Categories';
import UpdatedTopics from './components/UpdatedTopics';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'forum'>;
}

export default function Forum({navigation}: Props) {
  const [isTopicAdditionModalOpen, setisTopicAdditionModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {isTopicAdditionModalOpen && (
        <NewTopicModal
          onPressCancel={() => setisTopicAdditionModalOpen(false)}
          onPressApprove={topic => console.log('onPress create topic:', topic)}
        />
      )}

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Categories
          categories={categoriesSample}
          onPress={(item: Category) => navigation.navigate('categoryDetail', {...item})}
        />
        <UpdatedTopics topics={topicSample} />

        <View style={styles.footer}>
          <FilledButton
            label="Yeni Konu"
            bgColor="#7E0736"
            onPress={() => setisTopicAdditionModalOpen(true)}
          />
        </View>
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

  footer: {marginTop: 30, alignItems: 'center'},
});
