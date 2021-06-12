import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, FlatList, View, TextInput, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {SEARCH_RESULT} from './mocks';
import {CommonStyles, Fonts, Metrics} from '@utils';
import {BackIcon} from '@icons';
import SearchProfile, {Profile} from './components/SearchProfile';

interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'searchResult'>;
}

export default function SearchResult({navigation}: Props) {
  const [searchInput, setsearchInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const onPressProfile = (profile: Profile) => {
    console.log('pressedProfile:', profile);
  };

  return (
    <View style={CommonStyles.container}>
      <View style={styles.searchBar}>
        <Pressable style={styles.back} onPress={navigation.goBack}>
          <BackIcon width={17} height={12} stroke="#7E0736" />
        </Pressable>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} value={searchInput} onChangeText={setsearchInput} />
        </View>
      </View>

      <FlatList
        data={SEARCH_RESULT}
        contentContainerStyle={CommonStyles.paddingForScroll}
        renderItem={({item, index}) => (
          <SearchProfile key={index} profile={item} onPress={onPressProfile} />
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH,
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
  },

  back: {
    paddingLeft: 25,
    width: 58,
    height: '100%',
    justifyContent: 'center',
  },

  inputArea: {
    width: Metrics.DEVICE_WIDTH - 58 - 28,
    justifyContent: 'center',
  },

  input: {
    paddingHorizontal: 16,
    width: '100%',
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',

    fontSize: 16,
    fontFamily: Fonts.robotoMedium,
    color: '#0F0A39',
  },
});
