import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';

import {Fonts, Metrics} from '@utils';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import {useAboutMeQuery} from './ProfileGetApi';
import FullScreenLoader from '@components/loader/FullScreenLoader';

export default function AboutUser() {
  const [aboutMe, setaboutMe] = useState('');

  const {data, isFetching, isLoading} = useAboutMeQuery();

  useEffect(() => {
    if (data) {
      setaboutMe(data);
    }
  }, [data]);

  if (isFetching || isLoading) {
    return <FullScreenLoader />;
  }

  if (aboutMe) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.formTitle}>Hakkımda</Text>

          {/* <Input
          value={aboutMe}
          onChangeText={setaboutMe}
          viewStyle={styles.input}
          isMultiLine={true}
          height={469}
        /> */}

          <HTML source={{html: aboutMe}} />

          <FilledButton
            label="Hakkımda Güncelle"
            labelStyle={styles.saveLabel}
            bgColor="#7E0736"
            onPress={() => console.log('Save Button')}
          />
        </ScrollView>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    padding: Metrics.horizontalContainerPadding,
  },

  formTitle: {
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  input: {
    paddingVertical: 17,
  },

  saveLabel: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#fff',
  },
});
