import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {OnlyPersonIcon} from '@icons';
import styles from './styles/SearchProfileStyle';
import {SearchResponse} from '@search/searchApi';
import {Constants} from '@utils';

interface ScreenProps {
  profile: SearchResponse;
  onPress: (item: SearchResponse) => void;
}

export default function SearchProfile({profile, onPress}: ScreenProps) {
  console.log('profileimage: ', profile);
  const _renderProfilePhoto = () => {
    if (profile?.image && profile?.image?.length) {
      return (
        <View style={styles.profilePhoto}>
          <Image source={{uri: Constants.USER_IMAGE + profile?.image}} style={styles.userPhoto} />
        </View>
      );
    }

    return (
      <View style={[styles.profilePhoto, styles.profilePhotoWithBg]}>
        <OnlyPersonIcon width={70} height={70} />
      </View>
    );
  };

  return (
    <Pressable style={styles.container} onPress={() => onPress(profile)}>
      {_renderProfilePhoto()}

      <View style={styles.usereInfos}>
        <Text numberOfLines={2} style={styles.nameLabel}>
          {profile.displayName}
        </Text>
        <Text numberOfLines={1} style={styles.userTypeLabel}>
          {profile.role}
        </Text>
        <Text numberOfLines={1} style={styles.locationLabel}>
          {profile.countyShown ?? profile.county} - {profile.city ?? profile.city}
        </Text>
        <View style={styles.rateCount}>
          <Rating
            // tintColor="red"
            type="star"
            startingValue={profile.starPoints / 20}
            ratingCount={5}
            imageSize={15}
            readonly={true}
          />
        </View>
      </View>
    </Pressable>
  );
}
