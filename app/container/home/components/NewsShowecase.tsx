import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';
import {getMonthAndDayName} from '@helpers/DateFormatter';
import {SiteNew} from '@home/Models';

type Props = {
  news: Array<SiteNew>;
  openNew: (id: number) => void;
};

export default function NewsShowecase({news, openNew}: Props) {
  return (
    <View>
      <Text style={styles.title}>Arabulucuara'dan Haberler</Text>
      {news.map((item, index) => (
        <Pressable key={index} onPress={() => openNew(item?.id)}>
          <View style={[styles.new, styles.shadow]}>
            <View style={styles.date}>
              {item?.createdOn && (
                <>
                  <Text style={styles.dateLabel}>{getMonthAndDayName(item?.createdOn)?.day}</Text>
                  <Text style={styles.monthLabel}>
                    {getMonthAndDayName(item?.createdOn)?.month}
                  </Text>
                </>
              )}
            </View>
            <View style={styles.labelContainer}>
              <Text numberOfLines={3} ellipsizeMode="tail" style={styles.newTitle}>
                {item.title}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  new: {
    marginTop: 15,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 50,
    height: 76,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.5,

    elevation: 5,
  },

  date: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#7E0736',
  },

  dateLabel: {
    fontSize: 18,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },

  monthLabel: {
    paddingTop: 2,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  newTitle: {
    paddingHorizontal: Metrics.wp(20),
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  labelContainer: {
    width: Metrics.DEVICE_WIDTH - 50 - 60,
  },
});
