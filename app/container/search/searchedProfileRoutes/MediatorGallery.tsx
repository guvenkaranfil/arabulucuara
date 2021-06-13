import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {Fonts, Metrics} from '@utils';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'mediatorGallery'>;
  navigation: StackNavigationProp<SearchNavigatorParamList, 'search'>;
};

export default function MediatorGallery({route, navigation}: ScreenProps) {
  const {profile} = route.params;

  return (
    <ProfileLayout navigation={navigation} user={profile}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Fotoğraf Galerisi</Text>

        <View style={styles.gallery}>
          {GALLERY.map((gallery, index) => (
            <View key={index} style={styles.photoContainer}>
              <Image source={{uri: gallery.photoURL}} style={styles.photo} />
            </View>
          ))}
        </View>
      </View>
    </ProfileLayout>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 30,
    paddingHorizontal: Metrics.horizontalContainerPadding,
  },

  screenTitle: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Metrics.DEVICE_WIDTH - 30,
    justifyContent: 'center',
  },

  photoContainer: {
    marginLeft: 10,
    marginBottom: 10,
    width: (Metrics.CONTAINER_WIDTH - 20) / 3,
    height: Metrics.wp(100),
  },

  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
});

const GALLERY = [
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/4bf55e12-8fbe-40f4-a02d-02b19df5a178.jpg',
  },
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/0686a091-4571-4db1-ac9a-c8ebf967e984.jpg',
  },
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/4bf55e12-8fbe-40f4-a02d-02b19df5a178.jpg',
  },
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/0686a091-4571-4db1-ac9a-c8ebf967e984.jpg',
  },
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/4bf55e12-8fbe-40f4-a02d-02b19df5a178.jpg',
  },
];
