import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import TransparentModal from '@components/modals/TransparentModal';
import Input from '@components/input/Input';
import FilledButton from '@components/buttons/FilledButton';
import {DeleteIcon, EditIcon} from '@icons';
import {Fonts, Metrics} from '@utils';

export default function UserArticles() {
  const [showNewArticleModal, setshowNewArticleModal] = useState(false);
  const [articleTitle, setarticleTitle] = useState('');

  const handleNewArticle = () => {};

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
    <View style={styles.screenContainer}>
      {showNewArticleModal && (
        <TransparentModal
          title="Yeni Ekle"
          cancelText="İptal"
          approveText="Kaydet"
          onPressCancel={() => setshowNewArticleModal(false)}
          onPressApprove={handleNewArticle}>
          <>
            <Text style={styles.newCertificateTitle}>Konu</Text>
            <Input value={articleTitle} onChangeText={setarticleTitle} width={Metrics.wp(278)} />

            <Text style={styles.newCertificateTitle}>PDF Dosya</Text>
            <FilledButton label="" bgColor="#F5F6FA" onPress={() => console.log('get article')} />
          </>
        </TransparentModal>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenTitle}>Makaleler</Text>

        {ARTICLES.map((article, index) => (
          <Swipeable key={index} rightThreshold={30} renderRightActions={_renderActions}>
            <View style={styles.article}>
              <Text style={styles.aritcleTitle}>{article.articleTitle}</Text>
            </View>
          </Swipeable>
        ))}

        <FilledButton
          style={styles.addNewCertificate}
          label="Yeni Ekle"
          bgColor="#7E0736"
          onPress={() => setshowNewArticleModal(true)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingVertical: 30,
  },

  screenTitle: {
    paddingLeft: Metrics.horizontalContainerPadding,
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
    color: '#181C32',
  },

  article: {
    marginLeft: Metrics.horizontalContainerPadding,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: Metrics.CONTAINER_WIDTH,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  aritcleTitle: {
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
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

const ARTICLES = [
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle: 'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
  {
    id: 1,
    articleTitle:
      'DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI DAVA ŞARTI ARABULUCULUK SÜRECİNDE İŞ AKIŞI',
  },
];
