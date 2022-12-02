import {OnlyPersonIcon} from '@icons';
import {SearchResponse} from '@search/searchApi';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import styles from '../styles/ProfileLayoutStyle';

const BASE_URL = 'https://arabulucuara.com/uploaded/UserImage/';
export default function MediationCenter({displayName, image, role, starPoints}: SearchResponse) {
  console.log('MediationCenter >> starPoints: ', starPoints);
  return (
    <View style={styles.infosContainer}>
      <View style={styles.profilePhoto}>
        {image ? (
          <Image source={{uri: BASE_URL + image}} style={styles.userProfile} />
        ) : (
          <View style={[styles.profilePhoto, styles.profilePhotoWithBg]}>
            <OnlyPersonIcon width={70} height={70} />
          </View>
        )}
      </View>

      <View style={styles.infos}>
        <Text style={styles.nameLabel}>{displayName}</Text>
        <Text style={styles.userTypeLabel}>{role}</Text>

        <View style={styles.ratingStyle}>
          <AirbnbRating
            count={5}
            size={15}
            defaultRating={Math.ceil(starPoints / 20)}
            showRating={false}
            isDisabled={true}
            reviewColor="yellow"
            selectedColor="yellow"
          />
        </View>
      </View>
    </View>
  );
}
