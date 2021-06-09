import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {content, comments} from './mocks';
import HTML from 'react-native-render-html';
import FilledButton from 'components/buttons/FilledButton';
import TopicComment from './components/TopicComment';
import styles from './styles/TopicDetailStyle';
import {OnlyPersonIcon, ViewsIcon} from '@icons';

export default function TopicDetail() {
  return (
    <View style={styles.container}>
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

        {comments.map(comment => (
          <TopicComment comment={comment} />
        ))}

        <FilledButton
          label="Yorum Yap"
          bgColor="#7E0736"
          onPress={() => console.log('Add comment...')}
        />
      </ScrollView>
    </View>
  );
}
