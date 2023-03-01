import {OnlyPersonIcon} from '@icons';
import {ProfileLinks} from '@profile/ProfileGetApi';
import {Constants} from '@utils';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import styles from '../styles/ProfileLayoutStyle';

export default function MediationCenter({
  displayName,
  image,
  roleName,
  starPoints,
  jobs,
}: ProfileLinks) {
  console.log('MediationCenter >> starPoints: ', starPoints);
  console.log('JOBS: ', jobs);

  return (
    <View style={styles.infosContainer}>
      <View style={styles.profilePhoto}>
        {image ? (
          <Image source={{uri: Constants.USER_IMAGE + image}} style={styles.userProfile} />
        ) : (
          <View style={[styles.profilePhoto, styles.profilePhotoWithBg]}>
            <OnlyPersonIcon width={70} height={70} />
          </View>
        )}
      </View>

      <View style={styles.infos}>
        <Text style={styles.nameLabel}>{displayName}</Text>
        <Text style={styles.userTypeLabel}>{roleName}</Text>

        {jobs &&
          jobs?.length > 0 &&
          jobs.map(job => <Text style={styles.userTypeLabel}>{job}</Text>)}

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
