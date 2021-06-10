import {CommonStyles, Fonts, Metrics} from '@utils';
import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

export default function MinistryAnnouncements() {
  return (
    <View style={CommonStyles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={SAMPLE_ANNOUNCEMENTS}
        renderItem={({item, index}) => (
          <View key={index} style={[styles.announcement, styles.shadow]}>
            <View style={styles.date}>
              <Text style={styles.day}>{item.date.day}</Text>
              <Text style={styles.month}>{item.date.month}</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 43,
    paddingLeft: 25,
  },

  announcement: {
    marginBottom: 15,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    height: 76,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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
    backgroundColor: '#7E0736',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  day: {
    fontSize: 18,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },

  month: {
    paddingTop: 10,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  title: {
    paddingHorizontal: 15,
    maxWidth: Metrics.CONTAINER_WIDTH - 76,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

const SAMPLE_ANNOUNCEMENTS = [
  {
    id: 1,
    date: {
      day: 11,
      month: 'Nisan',
    },
    title: 'Uzman Arabuluculuk Puanlaması',
  },
  {
    id: 1,
    date: {
      day: 11,
      month: 'Nisan',
    },
    title: 'Uzman Arabuluculuk Puanlaması',
  },
  {
    id: 1,
    date: {
      day: 11,
      month: 'Nisan',
    },
    title: 'Dava Şartı Arabuluculukta Uzmanlık Alanlarının Uygulanmasına İlişkin İlan',
  },
  {
    id: 1,
    date: {
      day: 5,
      month: 'Nisan',
    },
    title: 'Arabuluculuk Görüşmelerine Asillerin Bizzat Katılımının Sağlanmasının Önemi',
  },
  {
    id: 1,
    date: {
      day: 11,
      month: 'Nisan',
    },
    title: 'Arabuluculuk Müzakere Süreçlerinde Normalleşme Dönemi',
  },
  {
    id: 1,
    date: {
      day: 28,
      month: 'Nisan',
    },
    title:
      '"Sigorta Uyuşmazlıklarında Dava, Hasar ve Tahkim Aşamalarında Arabuluculuk" konulu eğitim ...',
  },
];
