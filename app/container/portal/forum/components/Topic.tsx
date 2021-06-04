import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Fonts, Metrics} from 'utils';
import {OnlyPersonIcon, ViewsIcon} from '@icons';

export interface TopicType {
  id: number;
  date: string;
  label: string;
  nameSurname: string;
  views: number;
}

type Props = {
  topic: TopicType;
};

export default function Topic({topic}: Props) {
  const {date, label, nameSurname, views} = topic;

  return (
    <View style={styles.activity}>
      <View style={styles.row}>
        <View style={styles.border} />
        <Text style={styles.dateLabel}>{date}</Text>
      </View>
      <Text style={styles.activityLabel}>{label}</Text>
      <View style={styles.footer}>
        <View style={styles.row}>
          <OnlyPersonIcon width={15} height={15} />
          <Text style={styles.labelForIcon}>{nameSurname}</Text>
        </View>
        <View style={styles.row}>
          <ViewsIcon width={15} height={10} />
          <Text style={styles.labelForIcon}>{views}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {marginBottom: 5, flexDirection: 'row', alignItems: 'center'},

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
