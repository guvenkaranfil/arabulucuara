import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from 'utils';

interface Activity {
  id: number;
  date: string;
  label: string;
  nameSurname: string;
  views: number;
}

type Props = {
  topics: Array<Activity>;
};

export default function UpdatedTopics({topics}: Props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Son Güncellenen Konular</Text>
      </View>

      <View style={styles.activities}>
        {topics.map((activity, index) => (
          <View key={index} style={styles.activity}>
            <Text style={styles.activityLabel}>{activity.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  activity: {
    marginTop: 23,
    paddingVertical: 20,
    paddingHorizontal: 17,
    width: Metrics.DEVICE_WIDTH - 50,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  activityLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },
});
