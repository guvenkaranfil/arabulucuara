import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Fonts, Metrics} from '@utils';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';

export default function AboutUser() {
  const [aboutMe, setaboutMe] = useState(ABOUT_ME);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.formTitle}>Hakkımda</Text>

        <Input
          value={aboutMe}
          onChangeText={setaboutMe}
          viewStyle={styles.input}
          isMultiLine={true}
          height={469}
        />

        <FilledButton
          label="Kaydet"
          labelStyle={styles.saveLabel}
          bgColor="#7E0736"
          onPress={() => console.log('Save Button')}
        />
      </ScrollView>
    </View>
  );
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

const ABOUT_ME =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dignissim est, at vestibulum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent massa ipsum, auctor at nunc quis, ultricies luctus neque. Nulla consectetur, elit at feugiat congue, quam urna sodales enim, sed consectetur turpis ligula nec quam. Quisque mattis non ipsum vel scelerisque. Suspendisse accumsan sodales pulvinar. In quis metus congue, iaculis eros vel, mollis nisl. In quam quam, interdum quis mi blandit, auctor gravida sapien. Cras ut eleifend arcu, ac pharetra elit. Maecenas sit amet ';
