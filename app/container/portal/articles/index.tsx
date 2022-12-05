import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';

import {CommonStyles, Fonts, Metrics} from '@utils';
import {OnlyPersonIcon} from '@icons';
import {useGetArticlesQuery} from './ArticleApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import {RouteProp} from '@react-navigation/native';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'articles'>;
  route: RouteProp<PortalNavigatorParamList, 'articles'>;
}

export default function Articles({navigation, route}: Props) {
  const {data, isLoading, isError} = useGetArticlesQuery();

  useEffect(() => {
    if (data && route.params?.articleId) {
      // @ts-ignore
      const article = data.filter(item => item.id === route.params.articleId);
      navigation.navigate('articleDetail', {article: article[0]});
    }
  }, [navigation, route, data]);

  if (isLoading) {
    return <FullScreenLoader />;
  } else if (isError) {
    return (
      <View>
        <Text>Bir sorun Olutşu</Text>
      </View>
    );
  } else if (data && Array.isArray(data)) {
    return (
      <View style={CommonStyles.container}>
        <FlatList
          contentContainerStyle={styles.screenMarginTop}
          data={data}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={styles.article}
              onPress={() => navigation.navigate('articleDetail', {article: item})}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <View style={styles.aritcleOwner}>
                <OnlyPersonIcon width={15} height={15} fill="#B3B3B3" />
                <Text style={styles.publisher}>{item.createdBy}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  screenMarginTop: {marginVertical: 24},

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
