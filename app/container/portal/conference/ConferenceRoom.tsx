import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {WebView} from 'react-native-webview';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'conferenceRoom'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'conferenceRoom'>;
}

const INJECTED_JAVASCRIPT = `(function() {
  window.ReactNativeWebView.postMessage(document.getElementsByTagName('url')[0].textContent);
})();`;
export default function ConferenceRoom({route}: Props) {
  const roomURL = route.params.roomURL;
  const [url, seturl] = useState('');

  if (!route.params?.roomURL) return null;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{uri: url ? url : roomURL}}
        javaScriptEnabled={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={message => {
          if (!url) {
            seturl(message.nativeEvent.data.replace('http', 'https'));
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
