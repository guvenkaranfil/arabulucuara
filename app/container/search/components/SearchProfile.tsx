import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {OnlyPersonIcon} from '@icons';
import styles from './styles/SearchProfileStyle';

export interface Profile {
  id: number;
  accountType: string;
  profilePhoto?: string;
  nameSurname: string;
  userType: string;
  location: string;
  rate: number;
}

interface ScreenProps {
  profile: Profile;
  onPress: (item: Profile) => void;
}

export default function SearchProfile({profile, onPress}: ScreenProps) {
  const _renderProfilePhoto = () => {
    if (profile?.profilePhoto && profile?.profilePhoto?.length) {
      return (
        <View style={styles.profilePhoto}>
          <Image source={{uri: profile?.profilePhoto}} style={styles.userPhoto} />
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
          {profile.nameSurname}
        </Text>
        <Text numberOfLines={1} style={styles.userTypeLabel}>
          {profile.userType}
        </Text>
        <Text numberOfLines={1} style={styles.locationLabel}>
          {profile.location}
        </Text>
        <View style={styles.rateCount}>
          <Rating
            type="star"
            startingValue={profile.rate}
            ratingCount={5}
            imageSize={15}
            readonly={true}
          />
        </View>
      </View>
    </Pressable>
  );
}
