import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
  Text,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import {CommonStyles, Fonts, Metrics} from '@utils';
import {BackIcon} from '@icons';
import SearchProfile from './components/SearchProfile';
import {SearchResponse, useSearchGenelMutation} from './searchApi';
import {isUserLoggedIn} from '@selectors';
import {useSelector} from 'react-redux';

interface Props {
  navigation: StackNavigationProp<SearchNavigatorParamList, 'searchResult'>;
  route: RouteProp<SearchNavigatorParamList, 'searchResult'>;
}

export default function SearchResult({navigation, route}: Props) {
  const haveUser = useSelector(isUserLoggedIn);

  const [searchInput, setsearchInput] = useState('');
  const [searchResult, setsearchResult] = useState<SearchResponse[]>(route.params?.data ?? []);
  const [isFirstLoad, setisFirstLoad] = useState(true);
  console.log('searchResult:', searchResult);

  const [searchGeneral, {isLoading}] = useSearchGenelMutation();

  useLayoutEffect(() => {
    if (haveUser) {
      navigation.setOptions({headerShown: false});
    }
  }, [navigation]);

  const onPressProfile = (profile: SearchResponse) => {
    console.log('pressedProfile:', profile);
    navigation.navigate('profileDetail', {profile});
  };

  const onSubmitSearch = () => {
    if (searchInput?.length > 0) {
      console.log('search..');
      searchGeneral({value: searchInput})
        .then(res => {
          console.log('General search:', res);
          console.log('general search data: ', res?.data);
          if (!res?.error && res?.data) {
            console.log('setting generalll');

            setsearchResult(res.data);
          }
        })
        .catch(err => console.log('general err:', err))
        .finally(() => {
          if (isFirstLoad) {
            setisFirstLoad(false);
          }
        });
    } else {
      Alert.alert('Lütfen Dikkat', 'Aramak istediğiniz arabulucu ismini giriniz');
    }
  };

  return (
    <View style={[CommonStyles.container, {marginTop: 0}]}>
      <View style={styles.searchBar}>
        <Pressable style={styles.back} onPress={navigation.goBack}>
          <BackIcon width={17} height={12} stroke="#7E0736" />
        </Pressable>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={searchInput}
            onChangeText={setsearchInput}
            onSubmitEditing={onSubmitSearch}
          />
        </View>
      </View>

      {searchResult?.length === 0 && !isLoading && !isFirstLoad && (
        <View style={styles.fCenter}>
          <Text>Sonuç bulunamadı</Text>
        </View>
      )}

      {isLoading ? (
        <View style={styles.fCenter}>
          <ActivityIndicator size={'small'} color="black" />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          contentContainerStyle={CommonStyles.paddingForScroll}
          renderItem={({item, index}) => (
            <SearchProfile key={index} profile={item} onPress={onPressProfile} />
          )}
          keyExtractor={(_, index) => String(index)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
