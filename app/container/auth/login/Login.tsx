import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';

export default function Login() {
  return (
    <LoginLayout showBackButton={true}>
      <Header screenTitle="Üye Girişi" dynamicHeight={200} />
    </LoginLayout>
  );
}

const styles = StyleSheet.create({});
