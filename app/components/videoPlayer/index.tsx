import React from 'react';
import {Pressable, StyleSheet, View, Modal} from 'react-native';
import Video from 'react-native-video';

import {Metrics} from '@utils';

export default function index({
  videoURL,
  onPressClose,
}: {
  videoURL: string;
  onPressClose: () => void;
}) {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <Pressable style={styles.wrapper} onPress={onPressClose} />
        <View style={styles.wrapper}>
          <Video source={{uri: videoURL}} style={styles.video} resizeMode="contain" />
        </View>
        <Pressable style={styles.wrapper} onPress={onPressClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.hp(110),
    flex: 1,
    backgroundColor: '#000000aa',
  },

  video: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.wp(210),
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#000000aa',
  },
});
