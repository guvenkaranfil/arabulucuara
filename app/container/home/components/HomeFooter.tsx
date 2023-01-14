import React from 'react';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '@utils';

export default function HomeFooter() {
  const openContactPage = () => {
    try {
      Linking.openURL('https://arabulucuara.com/home/iletisim');
    } catch (error) {}
  };

  const openLivesupport = () => {
    try {
      Linking.openURL('https://tawk.to/arabulucuara');
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={openContactPage}>
        <Text style={styles.label}>Arabulucuara Kurumsal</Text>
      </Pressable>
      <Pressable style={styles.supportButton} onPress={openLivesupport}>
        <Text style={styles.label}>Canlı Destek</Text>
      </Pressable>

      <Text style={styles.appVersion}>APP VERSION: 0.0.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    width: '100%',
    height: 100,
    alignItems: 'center',
  },

  button: {
    width: 212,
    borderRadius: 10,
    paddingVertical: 9,
    alignItems: 'center',
    backgroundColor: '#E1E3E9',
  },

  supportButton: {
    marginTop: 16,
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 18,
    backgroundColor: '#E1E3E9',
  },

  label: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  appVersion: {
    paddingTop: 20,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});
