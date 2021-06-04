import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from 'utils';
import Topic, {TopicType} from './Topic';

type Props = {
  topics: Array<TopicType>;
};

export default function UpdatedTopics({topics}: Props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Son Güncellenen Konular</Text>
      </View>

      <View style={styles.activities}>
        {topics.map((topic, index) => (
          <Topic key={index} topic={topic} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {marginBottom: 5, flexDirection: 'row', alignItems: 'center'},

  header: {
    width: Metrics.DEVICE_WIDTH,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E1F0',
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  activities: {
    alignItems: 'center',
  },
});
