import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {SearchNavigatorParamList} from '@routes/stacks/search/types';

import ProfileLayout from '@components/layouts/ProfileLayout';
import {CommonStyles, Constants, Fonts, Metrics} from '@utils';
import {USER_GALLERY_PHOTO} from '@constants';
import {DeleteIcon, PlayIcon} from '@icons';
import VideoPlayer from '@components/videoPlayer';
import {SearchVideo} from '@search/searchApi';

type ScreenProps = {
  route: RouteProp<SearchNavigatorParamList, 'mediatorGallery'>;
};

interface VideoProps {
  media: SearchVideo;
  onPressDelete: (media: SearchVideo) => void;
  onPressOpen: (media: SearchVideo) => void;
  shouldShowDeleteIcon?: boolean;
}
const GalleryVideo = ({
  media,
  onPressDelete,
  onPressOpen,
  shouldShowDeleteIcon = true,
}: VideoProps) => {
  const [shouldShowDelete, setshouldShowDelete] = useState(shouldShowDeleteIcon);

  return (
    <Pressable style={styles.photoContainer} onPress={() => setshouldShowDelete(prev => !prev)}>
      <View style={styles.videoPhoto}>
        {shouldShowDelete ? (
          <Pressable onPress={() => onPressDelete(media)}>
            <DeleteIcon />
          </Pressable>
        ) : (
          <Pressable style={styles.deleteContainer} onPress={() => onPressOpen(media)}>
            <PlayIcon width={60} height={60} />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};
export default function MediatorGallery({route}: ScreenProps) {
  const {profile, member} = route.params;
  console.log('MEMBER RESIMLER: ', member.resimler);

  const [showVideo, setshowVideo] = useState(false);
  const [currentPlayingVideoURL, setcurrentPlayingVideoURL] = useState<string>('');

  const _renderPhotoGallery = () => {
    if (member && member?.resimler && member?.resimler.length > 0)
      return (
        <>
          <Text style={styles.screenTitle}>Fotoğraf Galerisi</Text>
          <View style={styles.gallery}>
            {member.resimler.map((gallery, index) => (
              <View key={index} style={styles.photoContainer}>
                <Image source={{uri: USER_GALLERY_PHOTO + gallery.path}} style={styles.photo} />
              </View>
            ))}
          </View>
        </>
      );
  };

  const _renderVideoGallery = () => {
    if (member?.videolar && member.videolar.length > 0) {
      return (
        <>
          <Text style={styles.screenTitle}>Video Galerisi</Text>
          <View style={styles.videolar}>
            {member.videolar.map((gallery, index) => (
              <GalleryVideo
                key={index}
                media={gallery}
                shouldShowDeleteIcon={false}
                // onPressDelete={selectedMedia => handleDeleteMedia(selectedMedia.id, 'video')}
                onPressOpen={selectedMedia => {
                  setcurrentPlayingVideoURL(
                    Constants.SEARCHUSER_GALLERY_VIDEOS + selectedMedia.path,
                  );
                  setshowVideo(true);
                }}
              />
            ))}
          </View>
        </>
      );
    }
  };

  if ((member && member?.resimler && member?.resimler.length > 0) || member.videolar) {
    return (
      <ProfileLayout user={profile}>
        {showVideo && (
          <VideoPlayer videoURL={currentPlayingVideoURL} onPressClose={() => setshowVideo(false)} />
        )}

        <View style={styles.screenContainer}>
          {_renderPhotoGallery()}
          {_renderVideoGallery()}
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

  videoPhoto: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  deleteContainer: {
    width: 60,
    height: 60,
  },

  scrollContent: {
    padding: Metrics.horizontalContainerPadding,
  },

  video: {
    marginTop: 25,
    width: Metrics.DEVICE_WIDTH - 30,
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
    borderRadius: 20,
    backgroundColor: '#CFCFCF',
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

  videolar: {
    marginTop: 15,
  },
});
