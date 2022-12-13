import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Pressable, Platform, Alert} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import {Constants, Fonts, Metrics} from '@utils';
import {DeleteIcon, PlayIcon} from '@icons';
import VideoPlayer from '@components/videoPlayer';
import FilledButton from '@components/buttons/FilledButton';
import {useDeleteGalleryMutation, useGetGalleryQuery, UserMedia} from './ProfileGetApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';
import axios from 'axios';

export default function UserGallery() {
  const [showVideo, setshowVideo] = useState(false);
  const [currentPlayingVideoURL, setcurrentPlayingVideoURL] = useState<string>('');

  const user = useSelector((state: RootState) => state.user);

  const {data: media, isLoading, refetch} = useGetGalleryQuery();
  const [deleteMedia, {isLoading: isMediaDeleting}] = useDeleteGalleryMutation();

  console.log('GALLERY: ', media);

  const choseFromLibrary = async (mediaType: 'photo' | 'video' | 'any') => {
    ImagePicker.openPicker({
      mediaType: mediaType,
      width: 150,
      height: 150,
      cropping: mediaType === 'video' ? false : true,
    }).then(res => {
      console.log(res);
      uploadPhoto(res, mediaType === 'video' ? 'video' : 'fotograf');
    });
  };

  const generalErrroMessage = (error?: any) =>
    Alert.alert(
      Constants.GENERA_ALERT_TITLE,
      error?.response?.data?.message ?? Constants.GENERAL_ALERT_BODY,
    );

  const uploadPhoto = async (file: ImageType, fileType: 'video' | 'fotograf') => {
    const data = new FormData();
    data.append('file', {
      name: file.filename,
      uri: Platform.OS === 'ios' ? file.path?.replace('file://', '') : file.path,
    });

    // video, fotograf
    data.append('type', fileType);
    data.append('title', 'This is a title sample');

    try {
      const response = await axios.post(Constants.API_BASE_URL + '/Gallery/AddGallery', data, {
        headers: {
          Authorization: 'Bearer ' + user.token?.token,
          'Content-Type': 'multipart/form-data',
          accept: 'text/plain',
        },
      });

      console.log('response: ', response);

      if (response.status === 200) {
        console.log('Image has been added successfully');
        Alert.alert('Başarılı', response.data?.message);
        refetch();
      }
    } catch (error: any) {
      console.log('error on photo upload: ', error);
      console.log('error on photo upload response: ', error?.response);
      Alert.alert(
        Constants.GENERA_ALERT_TITLE,
        error?.response?.data?.message ?? Constants.GENERAL_ALERT_BODY,
      );
    }
  };

  const handleDeleteMedia = (id: number, type: 'video' | 'fotograf') => {
    deleteMedia({id: id, type: type})
      .then(res => {
        console.log('media delete res: ', res);
        if (res?.data?.status === 200) {
          Alert.alert('Başarılı!', 'Fotoğraf başarılı bir şekilde silindi');
          refetch();
        } else {
          generalErrroMessage();
        }
      })
      .catch(error => generalErrroMessage(error));
  };

  const _renderPhotos = () => {
    if (media?.fotolar && media.fotolar.length > 0) {
      return (
        <>
          <Text style={styles.screenTitle}>Fotoğraf Galerisi</Text>
          <View style={styles.gallery}>
            {media.fotolar.map((gallery, index) => (
              <GalleryPhoto
                key={index}
                id={gallery.id}
                photo={Constants.USER_GALLERY_PHOTO + gallery.file}
                onPressDelete={deletedPhotoId => handleDeleteMedia(deletedPhotoId, 'fotograf')}
              />
            ))}
          </View>
        </>
      );
    }
  };

  const _renderVideos = () => {
    if (media?.videos && media.videos.length > 0) {
      return (
        <View style={styles.videos}>
          <Text style={styles.screenTitle}>Videonuz</Text>
          {media.videos.map((gallery, index) => (
            <GalleryVideo
              key={index}
              media={gallery}
              onPressDelete={selectedMedia => handleDeleteMedia(selectedMedia.id, 'video')}
              onPressOpen={selectedMedia => {
                setcurrentPlayingVideoURL(Constants.USER_GALLERY_VIDEOS + selectedMedia.file);
                setshowVideo(true);
              }}
            />
          ))}
        </View>
      );
    }
  };

  if (isLoading) return <FullScreenLoader />;

  return (
    <View style={styles.container}>
      {showVideo && (
        <VideoPlayer videoURL={currentPlayingVideoURL} onPressClose={() => setshowVideo(false)} />
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {_renderPhotos()}
        {_renderVideos()}

        <View style={styles.actionButtons}>
          {media?.videos && media?.videos?.length < 1 && (
            <FilledButton
              style={styles.newVideo}
              label="Video Ekle"
              onPress={() => choseFromLibrary('video')}
            />
          )}

          {media?.fotolar && media?.fotolar?.length < 5 && (
            <FilledButton
              style={styles.newPhoto}
              label="Fotoğraf Ekle"
              onPress={() => choseFromLibrary('photo')}
            />
          )}
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
            <DeleteIcon width={19} height={20} stroke="#000" />
          </Pressable>
        </View>
      )}
      <Image source={{uri: photo}} style={styles.photo} />
    </Pressable>
  );
};

interface VideoProps {
  media: UserMedia;
  onPressDelete: (media: UserMedia) => void;
  onPressOpen: (media: UserMedia) => void;
}
const GalleryVideo = ({media, onPressDelete, onPressOpen}: VideoProps) => {
  const [shouldShowDelete, setshouldShowDelete] = useState(true);

  return (
    <Pressable style={styles.photoContainer} onPress={() => setshouldShowDelete(prev => !prev)}>
      <View style={styles.photo}>
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

const styles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
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
});
