import React from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {CommonStyles, Fonts, Metrics} from '@utils';
import {OnlyPersonIcon} from '@icons';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'articles'>;
}

export default function Articles({navigation}: Props) {
  return (
    <View style={CommonStyles.container}>
      <FlatList
        contentContainerStyle={styles.screenMarginTop}
        data={ARTICLES}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.article}
            onPress={() => navigation.navigate('articleDetail', {article: item})}>
            <Text style={styles.articleTitle}>{item.title}</Text>
            <View style={styles.aritcleOwner}>
              <OnlyPersonIcon width={15} height={15} />
              <Text style={styles.publisher}>{item.publisher}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenMarginTop: {marginTop: 24},

  articleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  article: {
    marginBottom: 15,
    paddingVertical: 16,
    paddingHorizontal: 21,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  aritcleOwner: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  publisher: {
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },
});

const ARTICLES = [
  {
    id: 1,
    title: 'ARABULUCULUK',
    publisher: 'Just & Fair Arabuluculuk Merkezi',
  },
  {
    id: 2,
    title: 'ARABULUCULUK MERKEZLERİ KALİTE STANDARTLARI',
    publisher: 'Just & Fair Arabuluculuk Merkezi',
  },
  {
    id: 3,
    title: 'UYUŞMAZLIKLARIN ÇÖZÜMÜNDE ARABULUCULUK',
    publisher: 'Just & Fair Arabuluculuk Merkezi',
  },
  {
    id: 4,
    title: 'AİLE HUKUKUNDAN KAYNAKLI NİTELİKLİ BİLİRKİŞİ RAPORU ÖRNEĞİ',
    publisher: 'Just & Fair Arabuluculuk Merkezi',
  },
  {
    id: 5,
    title:
      'YARGITAY ve BÖLGE ADLİYE MAHKEMELERİ KARARLARI EŞLİĞİNDE ARABULUCULUK TUTANAKLARININ İPTAL SEBEPLERİ, YARGIYA KONU OLMA GEREKÇELERİ VE ÇÖZÜM ÖNERİLERİ',
    publisher: 'Just & Fair Arabuluculuk Merkezi',
  },
];
