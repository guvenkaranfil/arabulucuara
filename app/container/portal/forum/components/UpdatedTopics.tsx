import {OnlyPersonIcon} from 'icons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from 'utils';
import {ViewsIcon} from '@icons';

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
            <View style={styles.row}>
              <View style={styles.border} />
              <Text style={styles.dateLabel}>{activity.date}</Text>
            </View>
            <Text style={styles.activityLabel}>{activity.label}</Text>
            <View style={styles.footer}>
              <View style={styles.row}>
                <OnlyPersonIcon width={15} height={15} />
                <Text style={styles.labelForIcon}>{activity.nameSurname}</Text>
              </View>
              <View style={styles.row}>
                <ViewsIcon width={15} height={10} />
                <Text style={styles.labelForIcon}>{activity.views}</Text>
              </View>
            </View>
          </View>
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

  activity: {
    marginTop: 23,
    paddingVertical: 20,
    paddingHorizontal: 17,
    width: Metrics.DEVICE_WIDTH - 50,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  border: {
    marginTop: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1BC5BD',
  },

  dateLabel: {
    paddingLeft: 4,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#7E0736',
  },

  activityLabel: {
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  footer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  labelForIcon: {
    paddingLeft: 3,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});
