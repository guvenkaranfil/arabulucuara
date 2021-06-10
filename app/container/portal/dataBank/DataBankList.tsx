import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {CommonStyles, Fonts, Metrics} from '@utils';

export interface Props {
  route: RouteProp<PortalNavigatorParamList, 'dataBankList'>;
  navigation: StackNavigationProp<PortalNavigatorParamList, 'dataBankList'>;
}

export interface DataBank {
  id: number;
  name: string;
  content: string;
}

export default function DataBankList({route, navigation}: Props) {
  const {dataBank} = route.params;

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{dataBank.name}</Text>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      <FlatList
        contentContainerStyle={CommonStyles.scrollContentStyle}
        data={SAMPLES_BANKS}
        ListHeaderComponent={_renderHeader}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.dataBank}
            onPress={() => navigation.navigate('dataBankDetail', {dataBankDetail: item})}>
            <Text style={styles.dataBankTitle}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 28,
    padding: 12,
    width: Metrics.DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E1F0',
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  dataBank: {
    marginLeft: Metrics.horizontalContainerPadding,
    marginBottom: 15,
    paddingVertical: 18,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  dataBankTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

const SAMPLES_BANKS = [
  {
    id: 1,
    name: 'Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu Yönetmeliği',
    content: '<b>Line1</b>',
  },
  {
    id: 2,
    name: 'İş Mahkemeleri Kanunu',
    content: '<b>Line1</b>',
  },
  {
    id: 3,
    name: 'Hukuk Muhakemeleri Kanunu İle Bazı Kanunlarda Değişiklik Yapılması Hakkında Kanun',
    content: '<b>Line1</b>',
  },
  {
    id: 4,
    name: 'Hukuk Muhakemeleri Kanunu İle Bazı Kanunlarda Değişiklik Yapılması Hakkında Kanun',
    content: '<b>Line1</b>',
  },
];
