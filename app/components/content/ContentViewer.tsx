import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';
import WebView from 'react-native-webview';

import {CommonStyles, Fonts} from '@utils';

interface Props {
  title?: string;
  body?: string;
  path?: string;
}

export default function ContentViewer({title, body, path}: Props) {
  if (body) {
    return (
      <View style={CommonStyles.container}>
        <ScrollView style={CommonStyles.paddingForScroll}>
          <Text style={styles.title}>{title}</Text>

          <HTML source={{html: body}} containerStyle={styles.articleContent} />
        </ScrollView>
      </View>
    );
  } else if (path) {
    return (
      <View style={CommonStyles.container}>
        <Text style={styles.title}>{title}</Text>
        <WebView source={{uri: path}} />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  articleContent: {marginVertical: 25},
});
