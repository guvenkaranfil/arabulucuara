import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HomeIcon, SearchIcon, PortalIcon} from '@icons';

import styles from './styles/TabBarStyle';
import {Metrics} from '@utils';

export default function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.container, styles.shadow]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabBar}>
            {TabIcon(index, isFocused)}
            <Text
              style={[
                styles.tabLabel,
                isFocused ? styles.activeTabLabel : styles.inActiveTabLabel,
              ]}>
              {label}
            </Text>

            {isFocused && <View style={styles.bottomStripe} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabIcon(index: number, isFocused: boolean) {
  if (index === 0) {
    return (
      <HomeIcon
        width={Metrics.hp(23)}
        height={Metrics.hp(25)}
        stroke={isFocused ? '#7E0736' : '#B3B3B3'}
      />
    );
  } else if (index === 1) {
    return (
      <SearchIcon
        width={Metrics.hp(27)}
        height={Metrics.hp(26)}
        stroke={isFocused ? '#7E0736' : '#B3B3B3'}
      />
    );
  } else if (index === 2) {
    return (
      <PortalIcon
        width={Metrics.hp(26)}
        height={Metrics.hp(26)}
        stroke={isFocused ? '#7E0736' : '#B3B3B3'}
      />
    );
  }
}
