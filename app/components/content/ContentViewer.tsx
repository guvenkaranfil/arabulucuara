import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';
import WebView from 'react-native-webview';

import {CommonStyles, Labels} from '@utils';

interface Props {
  title?: string;
  body?: string;
  path?: string;
  children?: ReactNode;
}

export default function ContentViewer({title, body, path, children}: Props) {
  if (body) {
    return (
      <View style={CommonStyles.container}>
        <ScrollView
          style={CommonStyles.paddingForScroll}
          contentContainerStyle={styles.contentStyle}>
          <Text style={Labels.label16BoldMirage}>{title}</Text>

          <HTML source={{html: body}} containerStyle={styles.articleContent} />

          {children}
        </ScrollView>
      </View>
    );
  } else if (path) {
    return (
      <View style={CommonStyles.container}>
        <WebView source={{uri: path}} />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  articleContent: {marginVertical: 25},

  contentStyle: {
    paddingBottom: 40,
  },
});
