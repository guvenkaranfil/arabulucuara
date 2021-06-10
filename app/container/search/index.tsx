import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import RoutingButtons from '@home/components/RoutingButtons';
import {CommonStyles, Fonts, Metrics} from '@utils';
import {SearchPath} from '@icons';

export default function Search() {
  return (
    <View style={CommonStyles.container}>
      <ScrollView contentContainerStyle={CommonStyles.paddingForScroll} bounces={false}>
        <View style={styles.inputArea}>
          <View style={styles.inputLabel}>
            <Text style={styles.searchLabel}>Hızlı Arama</Text>
          </View>

          <SearchPath width={170} height={40} />

          <Pressable style={styles.searchButton}>
            <Text style={styles.searchButtonLabel}>Arabulucuara'da Ara</Text>
          </Pressable>
        </View>

        <View style={styles.routingButtons}>
          <RoutingButtons
            searchMediator={() => console.log('onPress..')}
            searchExpertMediator={() => console.log('onPress..')}
            searchMediatorCenter={() => console.log('onPress..')}
            searchPro={() => console.log('onPress..')}
            showCalculator={false}
            openCalculator={() => console.log('onPress..')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    width: Metrics.CONTAINER_WIDTH,
    alignItems: 'center',
  },

  inputLabel: {
    position: 'absolute',
    zIndex: 99,
    width: 172,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchLabel: {
    fontSize: 14,
    fontFamily: Fonts.robotoBold,
    color: '#7E0736',
  },

  searchButton: {
    paddingLeft: 28,
    width: Metrics.CONTAINER_WIDTH,
    height: 44,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  searchButtonLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#CBC9D9',
  },

  routingButtons: {
    marginTop: 40,
  },
});
