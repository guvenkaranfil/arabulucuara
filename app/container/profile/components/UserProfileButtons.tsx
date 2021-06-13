import {UserProfileRoute} from '@routes/stacks/profile/Types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import FilledButton from '@components/buttons/FilledButton';
import {Fonts, Metrics} from '@utils';

interface Props {
  routeButtons: Array<UserProfileRoute>;
  onPressRoute: (stackName: UserProfileRoute) => void;
}

export default function ProfileRouteButtons({routeButtons, onPressRoute}: Props) {
  return (
    <View style={styles.routeButtons}>
      {routeButtons.map((routeButton, index) => (
        <FilledButton
          key={index}
          style={styles.routeButton}
          label={routeButton.label}
          labelStyle={styles.routeLabel}
          onPress={() => onPressRoute(routeButton)}
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
