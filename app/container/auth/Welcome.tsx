import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamList} from 'routes/stacks/auth/Types';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import FilledButton from '@components/buttons/FilledButton';
import {StartsIcon, StarParticles} from '@icons';
import {Fonts, Metrics} from 'utils';

export interface WelcomeProps {
  navigation: StackNavigationProp<AuthNavigatorParamList, 'welcome'>;
}

export default function Welcome({navigation}: WelcomeProps) {
  return (
    <LoginLayout>
      <Animatable.View
        animation={{
          from: {translateY: Metrics.DEVICE_HEIGHT + Metrics.DEVICE_HEIGHT / 3},
          to: {translateY: -300},
        }}
        duration={5000}
        delay={0}
        easing="ease-out-circ"
        useNativeDriver
        style={styles.starParticles}>
        <StarParticles width={Metrics.DEVICE_WIDTH} height={Metrics.hp(200)} />
      </Animatable.View>
      <Header screenTitle={`Arabulucuara ailesine${'\n'}hoşgedin sevil!`} dynamicHeight={200} />

      <View style={styles.infos}>
        <Text style={styles.info}>Arabulucuara dünyasını{'\n'}keşfetmene çok az kaldı.</Text>
        <Text style={styles.info}>
          Şimdi seni daha yakından tanıyabilmemiz için önemli bir kaç bilgiyi profiline eklemelisin.{' '}
        </Text>
        <Text style={styles.info}>Hadi başlayalım.</Text>
      </View>

      <View style={styles.footer}>
        <Animatable.View
          animation={{
            from: {translateY: 0, scaleY: 0, scaleX: 0},
            to: {translateY: -80, scaleY: 1, scaleX: 1},
          }}
          // transition={}
          duration={3000}
          easing="ease-out-circ"
          useNativeDriver
          style={styles.starParticles}>
          <StartsIcon width={250} height={90} />
        </Animatable.View>

        <FilledButton
          label="Hadi Başlayalım"
          onPress={() => navigation.navigate('completions/address')}
        />
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  infos: {
    marginBottom: 90,
    paddingHorizontal: Metrics.wp(50),
    alignItems: 'center',
  },

  info: {
    paddingTop: Metrics.hp(30),
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  footer: {
    marginTop: Metrics.hp(65),
    alignItems: 'center',
  },

  starParticles: {
    top: 0,
    position: 'absolute',
  },
});
