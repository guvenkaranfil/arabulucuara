import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';

import {OnlyPersonIcon} from '@icons';

interface Article {
  id: number;
  title: string;
  publisher: string;
}

type Props = {
  articles?: Array<Article>;
  openArticle: (item: Article) => void;
};

export default function FeaturedArticles({articles, openArticle}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öne Çıkan Makaleler</Text>

      {articles?.map((article, index) => (
        <Pressable key={index} style={styles.item} onPress={() => openArticle(article)}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <View style={styles.publisher}>
            <OnlyPersonIcon width={15} height={15} fill="#a3a0a0" />
            <Text style={styles.articlePublisher}>{article.publisher}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - 50,
  },

  item: {
    marginBottom: 15,
    padding: 16,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  title: {
    paddingBottom: 20,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
    textDecorationLine: 'underline',
  },

  articleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  publisher: {marginTop: 4, flexDirection: 'row', alignItems: 'center'},

  articlePublisher: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});
