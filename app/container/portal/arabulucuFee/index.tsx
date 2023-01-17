import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import DropDownPicker from '@components/picker/DropDownPicker';
import {Fonts, Metrics} from '@utils';
import FilledButton from '@components/buttons/FilledButton';
import {useCalculateFeeMutation} from '@portal/portalApi';

export default function ArabulucuFee() {
  const [uyusmazlikTuru, setuyusmazlikTuru] = useState({id: 1, name: 'İşçi İşveren'});
  const [fee, setfee] = useState('');

  const [calculateFee, {isLoading, data: fees}] = useCalculateFeeMutation();

  const handleCalculateFee = () => {
    calculateFee({ucret: Number(fee), uyusmalikTuru: uyusmazlikTuru.id})
      .then(res => {
        console.log('res of fee: ', res);
      })
      .catch(err => {
        console.log('err:', err);
      });
  };

  const _renderTableTitles = () => {
    return (
      <View style={styles.row}>
        <View style={styles.forumItem}>
          <Text style={styles.tableTitle}>Ücret Dilimi</Text>
        </View>
        <View style={styles.forumItem}>
          <Text style={styles.tableTitle}>ORAN (%)</Text>
        </View>
        <View style={styles.forumItem}>
          <Text style={[styles.tableTitle, styles.longTitle]}>ARABULUCULUK ÜCRETİ</Text>
        </View>
      </View>
    );
  };

  const _renderFeesResult = () => {
    if (fees && fees?.length > 0) {
      const totalFee = fees.map(item => item.ucret2Arabulucu).reduce((prev, next) => prev + next);
      return (
        <ScrollView>
          <View>
            {_renderTableTitles()}
            <View style={styles.tableContent}>
              {fees?.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableItem}>
                    <Text style={styles.alignToRight}>{item.ucretDilimi}</Text>
                  </View>
                  <View style={styles.tableItem}>
                    <Text>{item.oran}</Text>
                  </View>
                  <View style={[styles.tableItem, {alignItems: 'flex-end'}]}>
                    <Text style={styles.alignToRight}>₺{item.ucret2Arabulucu}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableItem}>
                <Text style={styles.totalFee}>Toplam Ücret:</Text>
              </View>
              <View style={styles.tableItem} />
              <View style={[styles.tableItem, {alignItems: 'flex-end'}]}>
                <Text style={styles.alignToRight}>₺{totalFee}</Text>
              </View>
            </View>

            <View>
              <Text>(İşçi İşveren için Min ₺ 1.600)</Text>
              <Text>(Ticari için Min ₺ 3.120)</Text>
              <Text>(Tüketici için Min ₺ 1.600)</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardDismissMode="interactive" contentContainerStyle={styles.p16}>
        <Text style={styles.formTitle}>Uyuşmazlık Türü</Text>
        <DropDownPicker
          value={uyusmazlikTuru.name}
          placeholder="Cinsiyet"
          items={[
            {id: 1, name: 'İşçi İşveren'},
            {id: 2, name: 'Ticari'},
            {id: 3, name: 'Tüketici'},
          ]}
          renderItem={item => item.name}
          onPress={setuyusmazlikTuru}
        />

        <Text style={styles.formTitle}>Hesaplamaya Esas Alınacak Ücret</Text>
        <TextInput
          style={styles.input}
          value={fee}
          onChangeText={setfee}
          keyboardType="number-pad"
          returnKeyLabel="Hesapla"
        />

        <FilledButton
          style={styles.calculate}
          label="HESAPLA"
          bgColor="#7E0736"
          onPress={handleCalculateFee}
          isLoading={isLoading}
        />

        {_renderFeesResult()}
      </ScrollView>
    </View>
  );
}

const TABLE_ITEM_WIDTH = (Metrics.DEVICE_WIDTH - 32) / 3;
const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  p16: {padding: 16},
  container: {
    flex: 1,
  },

  formTitle: {
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },

  input: {
    marginBottom: 20,
    padding: 8,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  calculate: {alignSelf: 'center'},

  forumItem: {
    width: TABLE_ITEM_WIDTH,
    height: 70,
    justifyContent: 'center',
  },

  tableTitle: {
    fontSize: 14,
    fontFamily: Fonts.robotoMedium,
    color: '#181C32',
  },

  longTitle: {
    alignItems: 'flex-start',
    textAlign: 'center',
  },

  tableContent: {
    width: Metrics.DEVICE_WIDTH - 32,
    // height: 100,
  },

  tableItem: {
    width: TABLE_ITEM_WIDTH,
  },

  tableItemTitle: {
    fontSize: 13,
    color: '#181C32',
    fontFamily: Fonts.robotoMedium,
  },

  tableRow: {
    width: Metrics.DEVICE_WIDTH - 32,
    flexDirection: 'row',
    marginBottom: 16,
  },

  alignToRight: {},

  totalFee: {
    fontSize: 18,
    fontFamily: Fonts.robotoBold,
  },
});
