import {OnlyPersonIcon} from '@icons';
import {ProfileLinks} from '@profile/ProfileGetApi';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import styles from '../styles/ProfileLayoutStyle';

const BASE_URL = 'https://arabulucuara.com/uploaded/UserImage/';
export default function IndividualMediator({
  image,
  displayName,
  roleName,
  starPoints,
}: ProfileLinks) {
  return (
    <View style={styles.infosContainer}>
      {image ? (
        <View style={styles.profilePhoto}>
          <Image source={{uri: BASE_URL + image}} style={styles.userProfile} />
        </View>
      ) : (
        <View style={[styles.profilePhoto, styles.profilePhotoWithBg]}>
          <OnlyPersonIcon width={70} height={70} />
        </View>
      )}

      <View style={styles.infos}>
        <Text style={styles.nameLabel}>{displayName}</Text>
        <Text style={styles.userTypeLabel}>{roleName?.toLocaleUpperCase()}</Text>

        <View style={styles.ratingStyle}>
          <AirbnbRating
            count={5}
            size={15}
            defaultRating={starPoints / 20}
            showRating={false}
            isDisabled={true}
            reviewColor="#fff"
          />
        </View>
      </View>
    </View>
  );
}
