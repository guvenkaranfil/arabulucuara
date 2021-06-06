import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import {topics} from '../mocks';
import TransparentModal from '@components/modals/TransparentModal';
import DropDownPicker from '@components/picker/DropDownPicker';
import {Fonts, Metrics} from 'utils';
import AuthInput from 'components/input/AuthInput';

interface NewTopicModel {
  category: {topicName: string};
  title: string;
  content: string;
}

interface NewTopicModalProps {
  onPressCancel: () => void;
  onPressApprove: (topicModel: NewTopicModel) => void;
}

export default function NewTopicModal({onPressCancel, onPressApprove}: NewTopicModalProps) {
  const [selectedTopicCategory, setselectedTopicCategory] = useState({topicName: ''});
  const [topicTitle, settopicTitle] = useState('');
  const [content, setcontent] = useState('');

  const createTopic = () =>
    onPressApprove({category: selectedTopicCategory, title: topicTitle, content});

  return (
    <TransparentModal
      title="Yeni Konu"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={onPressCancel}
      onPressApprove={createTopic}>
      <>
        <Text style={styles.newTopicFormTitle}>Kategori</Text>
        <DropDownPicker
          style={{width: Metrics.wp(278)}}
          value={selectedTopicCategory?.topicName}
          placeholder="İl Seçiniz"
          items={topics}
          renderItem={item => item.topicName}
          onPress={setselectedTopicCategory}
        />

        <Text style={styles.newTopicFormTitle}>Konu Başlığı</Text>
        <AuthInput value={topicTitle} onChangeText={settopicTitle} width={Metrics.wp(278)} />

        <Text style={styles.newTopicFormTitle}>İçerik</Text>
        <AuthInput
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
