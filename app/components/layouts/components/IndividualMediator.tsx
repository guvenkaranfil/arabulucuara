import {OnlyPersonIcon} from '@icons';
import {SearchResponse} from '@search/searchApi';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import styles from '../styles/ProfileLayoutStyle';

const BASE_URL = 'https://arabulucuara.com/uploaded/UserImage/';
export default function IndividualMediator({image, displayName, role, starPoints}: SearchResponse) {
  console.log('IndividualMediator >> starPoints: ', starPoints);
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
        <Text style={styles.userTypeLabel}>{role?.toLocaleUpperCase()}</Text>

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
