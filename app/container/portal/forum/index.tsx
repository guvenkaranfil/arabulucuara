import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {useGetForumQuery} from './ForumApi';
import NewTopicModal, {NewTopicModel} from './components/NewTopicModal';
import FilledButton from '@components/buttons/FilledButton';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import Categories, {Category} from './components/Categories';
import UpdatedTopics from './components/UpdatedTopics';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'forum'>;
}

export default function Forum({navigation}: Props) {
  const [isTopicAdditionModalOpen, setisTopicAdditionModalOpen] = useState(false);

  const {data, isLoading, isFetching} = useGetForumQuery();
  console.log('Category forum: ', data);

  if (isLoading || isFetching) {
    return <FullScreenLoader />;
  }

  if (data) {
    return (
      <View style={styles.container}>
        {data?.categories && data?.categories?.length > 0 && isTopicAdditionModalOpen && (
          <NewTopicModal
            categories={data?.categories}
            onPressCancel={() => setisTopicAdditionModalOpen(false)}
            onPressApprove={(topic: NewTopicModel) => console.log('onPress create topic:', topic)}
          />
        )}

        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {data && data?.categories && data?.categories?.length > 0 && (
            <Categories
              categories={data.categories}
              onPress={(item: Category) => navigation.navigate('categoryDetail', {...item})}
            />
          )}

          {data && data?.lastUpdateSubjects && data?.lastUpdateSubjects?.length > 0 && (
            <UpdatedTopics
              topics={data?.lastUpdateSubjects}
              onPress={topic => navigation.navigate('TopicDetail', {subjectId: topic.subjectId})}
            />
          )}

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

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingVertical: 30},

  footer: {marginTop: 30, alignItems: 'center'},
});
