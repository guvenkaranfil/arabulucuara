import React from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import {ProfileUser} from '../ProfileLayout';
import styles from '../styles/ProfileLayoutStyle';

export default function MediationCenter({profilePhoto, nameSurname, userType, rate}: ProfileUser) {
  return (
    <View style={styles.infosContainer}>
      <View style={styles.profilePhoto}>
        <Image source={{uri: profilePhoto}} style={styles.userProfile} />
      </View>

      <View style={styles.infos}>
        <Text style={styles.nameLabel}>{nameSurname}</Text>
        <Text style={styles.userTypeLabel}>{userType}</Text>

        <View style={styles.ratingStyle}>
          <AirbnbRating
            count={5}
            size={15}
            defaultRating={rate}
            showRating={false}
            isDisabled={true}
          />
        </View>
      </View>
    </View>
  );
}
