import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import HTML from 'react-native-render-html';

import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {content} from '../forum/mocks';
import {OnlyPersonIcon} from '@icons';
import {CommonStyles, Fonts} from '@utils';

export interface Article {
  title: string;
  publisher: string;
}

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'articleDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'articleDetail'>;
}

export default function ArticleDetail({route}: Props) {
  const {article} = route.params;

  return (
    <View style={CommonStyles.container}>
      <ScrollView
        contentContainerStyle={[CommonStyles.scrollContentStyle, CommonStyles.paddingForScroll]}>
        <Text style={styles.articleTitle}>{article.title}</Text>

        <HTML source={{html: content.htmlContent}} containerStyle={styles.articleContent} />

        <View style={styles.aritcleOwner}>
          <OnlyPersonIcon width={15} height={15} />
          <Text style={styles.publisher}>{article.publisher}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  articleContent: {marginTop: 25},

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
