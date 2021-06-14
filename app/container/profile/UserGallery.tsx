import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';

import {Fonts, Metrics} from '@utils';
import {DeleteIcon} from '@icons';
import VideoPlayer from '@components/videoPlayer';
import FilledButton from '@components/buttons/FilledButton';

export default function UserGallery() {
  const [showVideo, setshowVideo] = useState(true);

  return (
    <View style={styles.container}>
      {showVideo && (
        <VideoPlayer
          videoURL="https://arabulucuara.com/uploaded/Videos/tanitim.mp4"
          onPressClose={() => setshowVideo(false)}
        />
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenTitle}>Fotoğraf Galerisi</Text>

        <View style={styles.gallery}>
          {GALLERY.map((gallery, index) => (
            <GalleryPhoto
              key={index}
              id={gallery.id}
              photo={gallery.photoURL}
              onPressDelete={deletedPhotoId => console.log('deletedPhotoId:', deletedPhotoId)}
            />
          ))}
        </View>

        <View style={styles.videos}>
          <Text style={styles.screenTitle}>Videonuz</Text>
          {VIDEO.map((gallery, index) => (
            <Pressable key={index} style={styles.photoContainer} onPress={() => setshowVideo(true)}>
              <Image source={{uri: gallery.photoURL}} style={styles.photo} />
            </Pressable>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <FilledButton
            style={styles.newVideo}
            label="Video Ekle"
            onPress={() => console.log('new Video')}
          />
          <FilledButton
            style={styles.newPhoto}
            label="Fotoğraf Ekle"
            onPress={() => console.log('new photo')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const GalleryPhoto = ({
  photo,
  id,
  onPressDelete,
}: {
  photo: string;
  id: number;
  onPressDelete: (id: number) => void;
}) => {
  const [showDeleteOption, setshowDeleteOption] = useState(false);

  return (
    <Pressable style={styles.photoContainer} onPress={() => setshowDeleteOption(prev => !prev)}>
      {showDeleteOption && (
        <View style={styles.deletePreview}>
          <Pressable style={styles.deletebutton} onPress={() => onPressDelete(id)}>
            <DeleteIcon width={19} height={20} stroke="black" />
          </Pressable>
        </View>
      )}
      <Image source={{uri: photo}} style={styles.photo} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    padding: Metrics.horizontalContainerPadding,
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

  video: {
    marginTop: 25,
    width: Metrics.DEVICE_WIDTH - 30,
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

  deletePreview: {
    zIndex: 99,
    position: 'absolute',
    width: (Metrics.CONTAINER_WIDTH - 20) / 3,
    height: Metrics.wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.7,
  },

  deletebutton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    position: 'absolute',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT / 3,
    backgroundColor: 'yellow',
  },

  videos: {
    marginTop: 35,
  },

  actionButtons: {
    marginTop: 25,
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH,
    justifyContent: 'space-between',
  },

  newVideo: {
    width: 154,
    backgroundColor: '#7E0736',
  },

  newPhoto: {
    width: 137,
    backgroundColor: '#7E0736',
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

const VIDEO = [
  {
    id: 1,
    photoURL:
      'https://arabulucuara.com/uploaded/UserImage/4bf55e12-8fbe-40f4-a02d-02b19df5a178.jpg',
  },
];
