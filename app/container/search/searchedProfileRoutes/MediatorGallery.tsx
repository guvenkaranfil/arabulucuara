import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CommonStyles, Fonts, Metrics} from '@utils';
import {USER_IMAGE} from '@constants';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'mediatorGallery'>;
};

export default function MediatorGallery({route}: ScreenProps) {
  const {profile, member} = route.params;

  if (member && member?.resimler && member?.resimler.length > 0) {
    return (
      <ProfileLayout user={profile}>
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Fotoğraf Galerisi</Text>

          <View style={styles.gallery}>
            {member.resimler.map((gallery, index) => (
              <View key={index} style={styles.photoContainer}>
                <Image source={{uri: USER_IMAGE + gallery.path}} style={styles.photo} />
              </View>
            ))}
          </View>
        </View>
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout user={profile}>
      <View style={CommonStyles.searchEmptyPage}>
        <Text>Kullanıcıya ait resim bulunamadı</Text>
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
