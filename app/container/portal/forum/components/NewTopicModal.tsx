import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import TransparentModal from '@components/modals/TransparentModal';
import DropDownPicker from '@components/picker/DropDownPicker';
import {Fonts, Metrics} from '@utils';
import Input from '@components/input/Input';
import {Category} from './Categories';
import {Alert} from 'react-native';

export interface NewTopicModel {
  categoryId: number;
  subjectTitle: string;
  subjectBody: string;
}

interface NewTopicModalProps {
  categories: Array<Category>;
  onPressCancel: () => void;
  onPressApprove: (topic: NewTopicModel) => void;
  isLoading?: boolean;
}

export default function NewTopicModal({
  categories,
  onPressCancel,
  onPressApprove,
  isLoading,
}: NewTopicModalProps) {
  console.log('categories:', categories);
  const [selectedTopicCategory, setselectedTopicCategory] = useState<Category>();
  const [topicTitle, settopicTitle] = useState('');
  const [content, setcontent] = useState('');

  const createTopic = () => {
    if (selectedTopicCategory) {
      onPressApprove({
        categoryId: selectedTopicCategory?.kategoriId,
        subjectTitle: topicTitle,
        subjectBody: content,
      });
    } else {
      Alert.alert('Lütfen Dikkat', 'Oluşturmak istediğiniz kategoriyi seçiniz.', [{text: 'Tamam'}]);
    }
  };

  return (
    <TransparentModal
      title="Yeni Konu"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={onPressCancel}
      onPressApprove={createTopic}
      isLoading={isLoading}>
      <>
        <Text style={styles.newTopicFormTitle}>Kategori</Text>
        <DropDownPicker
          style={{width: Metrics.wp(278)}}
          value={selectedTopicCategory?.kategoriAdi}
          placeholder="Kategori Seçiniz"
          items={categories}
          renderItem={item => item.kategoriAdi}
          onPress={setselectedTopicCategory}
        />

        <Text style={styles.newTopicFormTitle}>Konu Başlığı</Text>
        <Input value={topicTitle} onChangeText={settopicTitle} width={Metrics.wp(278)} />

        <Text style={styles.newTopicFormTitle}>İçerik</Text>
        <Input
          value={content}
          onChangeText={setcontent}
          width={Metrics.wp(278)}
          height={Metrics.hp(290)}
          isMultiLine={true}
        />
      </>
    </TransparentModal>
  );
}

const styles = StyleSheet.create({
  newTopicFormTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  footer: {marginTop: 30, alignItems: 'center'},
});
