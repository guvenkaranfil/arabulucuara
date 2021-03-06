import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HTML from 'react-native-render-html';

import {content, comments} from './mocks';
import NewCommentModal from './components/NewCommentModal';
import FilledButton from '@components/buttons/FilledButton';
import TopicComment from './components/TopicComment';
import styles from './styles/TopicDetailStyle';
import {OnlyPersonIcon, ViewsIcon} from '@icons';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {RouteProp} from '@react-navigation/native';
import {useGetSubjectDetailsQuery} from './ForumApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'TopicDetail'>;
}

export default function TopicDetail({route}: Props) {
  const {subjectId} = route.params;

  const [showNewCommentModal, setshowNewCommentModal] = useState(false);

  const {data, isLoading, isFetching} = useGetSubjectDetailsQuery({subjectId});

  const approveComment = (comment: string) => {
    console.log('comment:', comment);
    setshowNewCommentModal(false);
  };

  if (isLoading || isFetching) {
    return <FullScreenLoader />;
  }

  return (
    <View style={styles.container}>
      {showNewCommentModal && (
        <NewCommentModal
          onPressCancel={() => setshowNewCommentModal(false)}
          onPressApprove={approveComment}
        />
      )}

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{data?.konuBaslik}</Text>
        {data?.konuBody && data?.konuBody?.length > 0 && <HTML source={{html: data?.konuBody}} />}

        <View style={styles.topicOwner}>
          <View style={styles.publisher}>
            <OnlyPersonIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{data?.konuYazar}</Text>
          </View>
          <View style={styles.views}>
            <ViewsIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{content.views}</Text>
          </View>
        </View>

        {data?.konuMesajlar &&
          data?.konuMesajlar.length > 0 &&
          comments.map((comment, index) => <TopicComment key={index} comment={comment} />)}

        <FilledButton
          label="Yorum Yap"
          bgColor="#7E0736"
          onPress={() => setshowNewCommentModal(true)}
        />
      </ScrollView>
    </View>
  );
}
