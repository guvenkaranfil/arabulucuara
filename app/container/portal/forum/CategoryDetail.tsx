import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {Fonts, Metrics} from '@utils';
import Topic, {TopicType} from './components/Topic';
import FilledButton from '@components/buttons/FilledButton';
import NewTopicModal from './components/NewTopicModal';
import {useGetCategoryPostsQuery} from './ForumApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'categoryDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'categoryDetail'>;
}

export default function CategoryDetail({route, navigation}: Props) {
  const {category} = route.params;

  //TODO: change categoryId with backend endpoint id. I'm waiting for addition to getForm endpoint.
  const {data, isLoading, isFetching} = useGetCategoryPostsQuery({categoryId: 1});
  console.log('data dada:', data);

  const [isTopicAdditionModalOpen, setisTopicAdditionModalOpen] = useState(false);

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{category}</Text>
    </View>
  );

  const _renderAddNewTopicButton = () => (
    <FilledButton
      label="Yeni Konu"
      bgColor="#7E0736"
      onPress={() => setisTopicAdditionModalOpen(true)}
    />
  );

  if (isLoading || isFetching) {
    return <FullScreenLoader />;
  }

  return (
    <View style={styles.container}>
      {isTopicAdditionModalOpen && (
        <NewTopicModal
          onPressCancel={() => setisTopicAdditionModalOpen(false)}
          onPressApprove={topic => console.log('onPress create topic:', topic)}
        />
      )}
      <FlatList
        contentContainerStyle={styles.topics}
        data={data}
        ListHeaderComponent={_renderHeader}
        renderItem={({item}) => (
          <Topic
            topic={item}
            onPress={(topic: TopicType) =>
              navigation.navigate('TopicDetail', {subjectId: topic.subjectId})
            }
          />
        )}
        ListFooterComponent={_renderAddNewTopicButton}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 28,
    padding: 12,
    width: Metrics.DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E1F0',
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  topics: {
    paddingBottom: 30,
    alignItems: 'center',
  },

  footer: {
    marginTop: 30,
  },
});
