import React, {useState} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import TransparentModal from '@components/modals/TransparentModal';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import {CalendarIcon, DeleteIcon, EditIcon} from '@icons';
import {Metrics} from '@utils';
import styles from './styles/UserCertificatesStyle';

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
