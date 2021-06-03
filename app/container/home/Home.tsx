import React from 'react';
import {StyleSheet, View} from 'react-native';

import RoutingButtons from './components/RoutingButtons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.routingButtons}>
        <RoutingButtons
          searchMediator={() => console.log('onPress..')}
          searchExpertMediator={() => console.log('onPress..')}
          searchMediatorCenter={() => console.log('onPress..')}
          searchPro={() => console.log('onPress..')}
          openCalculator={() => console.log('onPress..')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  routingButtons: {
    alignItems: 'center',
  },
});
