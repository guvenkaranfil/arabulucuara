import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {useAddSubjectMutation, useGetForumQuery} from './ForumApi';
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

  const [addSubject, {isLoading: isCreatingTopic}] = useAddSubjectMutation();

  const generalError = () => {
    Alert.alert('Bir sorun oluştu', 'Lütfen daha sonra tekrar deneyiniz');
  };

  const createTopic = (topic: NewTopicModel) => {
    addSubject({
      categoryId: topic.categoryId,
      subjectTitle: topic.subjectTitle,
      subjectBody: topic.subjectBody,
    })
      .then(res => {
        console.log('res:', res);
        Alert.alert('Başarılı', 'Konu başarılı bir şekilde eklendi');
      })
      .catch(() => generalError());
  };

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
            onPressApprove={createTopic}
            isLoading={isCreatingTopic}
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
