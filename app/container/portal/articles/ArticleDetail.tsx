import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {OnlyPersonIcon} from '@icons';
import {Constants, Fonts} from '@utils';
import ContentViewer from '@components/content/ContentViewer';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'articleDetail'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'articleDetail'>;
}

export default function ArticleDetail({route}: Props) {
  const {article} = route.params;
  console.log('article detail:', article);

  return (
    <ContentViewer
      title={article.title}
      body={article?.body}
      path={article?.path ? Constants.ARTICLE_URL + article?.path : undefined}>
      <View style={styles.aritcleOwner}>
        <OnlyPersonIcon width={15} height={15} />
        <Text style={styles.publisher}>{article.createdBy}</Text>
      </View>
    </ContentViewer>
  );
}

const styles = StyleSheet.create({
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
