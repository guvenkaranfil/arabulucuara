import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import FilledButton from '@components/buttons/FilledButton';
import {Fonts, Metrics} from '@utils';
import {ProfileRoute} from '@search/helpers/ProflieRoutes';

interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
  routeButtons: Array<ProfileRoute>;
}

export default function ProfileRouteButtons({navigation, routeButtons}: Props) {
  return (
    <View style={styles.routeButtons}>
      {routeButtons.map((routeButton, index) => (
        <FilledButton
          key={index}
          style={styles.routeButton}
          label={routeButton.label}
          labelStyle={styles.routeLabel}
          onPress={() => console.log('navigation to ' + routeButton.stackName + ' ....')}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  routeButtons: {
    marginVertical: 35,
    marginLeft: Metrics.horizontalContainerPadding,
    width: Metrics.CONTAINER_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  routeButton: {
    marginBottom: 15,
    paddingLeft: 21,
    alignItems: 'flex-start',
    height: 55,
    backgroundColor: '#E1E3E9',
  },

  routeLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
