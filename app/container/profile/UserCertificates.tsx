import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import TransparentModal from '@components/modals/TransparentModal';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import {CalendarIcon, DeleteIcon, EditIcon} from '@icons';
import {Fonts, Metrics} from '@utils';

export default function UserCertificates() {
  const [showNewCertificateModal, setshowNewCertificateModal] = useState(false);
  const [newCertificateTopic, setnewCertificateTopic] = useState('');
  const [cooparate, setcooparate] = useState('');
  const [year, setyear] = useState('');

  const handleNewCertificate = () => {
    console.log('new certificate creating...');
  };

  const _renderActions = () => (
    <View style={styles.rightActions}>
      <View style={styles.swipeActions}>
        <Pressable style={styles.swipeAction} onPress={() => console.log('onPress edit...')}>
          <EditIcon width={19} height={20} />
          <Text style={styles.actionLabel}>Düzenle</Text>
        </Pressable>

        <View style={styles.columnSeperator} />
        <Pressable style={styles.swipeAction} onPress={() => console.log('onPress delete...')}>
          <DeleteIcon width={19} height={20} />
          <Text style={styles.actionLabel}>Sil</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {showNewCertificateModal && (
        <TransparentModal
          title="Yeni Ekle"
          cancelText="İptal"
          approveText="Kaydet"
          onPressCancel={() => setshowNewCertificateModal(false)}
          onPressApprove={handleNewCertificate}>
          <>
            <Text style={styles.newCertificateTitle}>Konu</Text>
            <Input
              value={newCertificateTopic}
              onChangeText={setnewCertificateTopic}
              width={Metrics.wp(278)}
            />
            <Text style={styles.newCertificateTitle}>Kurum</Text>
            <Input value={cooparate} onChangeText={setcooparate} width={Metrics.wp(278)} />

            <Text style={styles.newCertificateTitle}>Yıl</Text>
            <Input
              value={year}
              onChangeText={setyear}
              width={Metrics.wp(278)}
              keyboardType="numeric"
            />
          </>
        </TransparentModal>
      )}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {CERTIFICATES.map((certificate, index) => (
          <Swipeable key={index} rightThreshold={30} renderRightActions={_renderActions}>
            <View style={styles.certificate}>
              <Text style={styles.certificateTitle}>{certificate.title}</Text>
              <Text style={styles.cooparateLabel}>{certificate.cooparate}</Text>
              <View style={styles.date}>
                <CalendarIcon width={15} height={17} />
                <Text style={styles.yearLabel}>{certificate.year}</Text>
              </View>
            </View>
          </Swipeable>
        ))}

        <FilledButton
          style={styles.addNewCertificate}
          label="Yeni Ekle"
          bgColor="#7E0736"
          onPress={() => setshowNewCertificateModal(true)}
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
    paddingVertical: 25,
  },

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

  certificate: {
    marginLeft: 25,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  certificateTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  cooparateLabel: {
    paddingBottom: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  date: {
    flexDirection: 'row',
  },

  yearLabel: {
    paddingLeft: 7,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  rightActions: {
    flexDirection: 'row',
    width: Metrics.CONTAINER_WIDTH / 2,
    height: '100%',
  },

  swipeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  swipeAction: {
    marginRight: 22,
    alignItems: 'center',
  },

  actionLabel: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: Fonts.robotoRegular,
    color: '#B3B3B3',
  },

  columnSeperator: {
    marginRight: 22,
    width: 1,
    height: 30,
    backgroundColor: '#DEDEDE',
  },

  addNewCertificate: {
    marginLeft: Metrics.horizontalContainerPadding,
  },

  newCertificateTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },
});

const CERTIFICATES = [
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
  {
    id: 1,
    title: 'İŞ HUKUKU UZMAN ARABULUCULUK',
    cooparate: 'ULUDAĞ ÜNİVERSİTESİ',
    year: 2018,
  },
];
