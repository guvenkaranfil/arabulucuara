import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HTML from 'react-native-render-html';

import {content, comments} from './mocks';
import NewCommentModal from './components/NewCommentModal';
import FilledButton from '@components/buttons/FilledButton';
import TopicComment from './components/TopicComment';
import styles from './styles/TopicDetailStyle';
import {OnlyPersonIcon, ViewsIcon} from '@icons';

export default function TopicDetail() {
  const [showNewCommentModal, setshowNewCommentModal] = useState(false);

  const approveComment = (comment: string) => {
    console.log('comment:', comment);
    setshowNewCommentModal(false);
  };

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
        <Text style={styles.title}>{content.title}</Text>
        <HTML source={{html: content.htmlContent}} />

        <View style={styles.topicOwner}>
          <View style={styles.publisher}>
            <OnlyPersonIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{content.publisher}</Text>
          </View>
          <View style={styles.views}>
            <ViewsIcon width={15} hieght={10} />
            <Text style={styles.aboutTopicLabels}>{content.views}</Text>
          </View>
        </View>

        {comments.map((comment, index) => (
          <TopicComment key={index} comment={comment} />
        ))}

        <FilledButton
          label="Yorum Yap"
          bgColor="#7E0736"
          onPress={() => setshowNewCommentModal(true)}
        />
      </ScrollView>
    </View>
  );
}
