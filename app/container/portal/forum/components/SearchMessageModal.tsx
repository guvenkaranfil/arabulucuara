import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import TransparentModal from '@components/modals/TransparentModal';
import {Fonts, Metrics} from '@utils';
import Input from '@components/input/Input';

export interface SendMessageModal {
  messageTitle: string;
  messageBody: string;
}

interface NewTopicModalProps {
  onPressCancel: () => void;
  onPressApprove: (topic: SendMessageModal) => void;
  isLoading?: boolean;
}

export default function NewTopicModal({
  onPressCancel,
  onPressApprove,
  isLoading,
}: NewTopicModalProps) {
  const [topicTitle, settopicTitle] = useState('');
  const [content, setcontent] = useState('');

  const createTopic = () => {
    onPressApprove({
      messageTitle: topicTitle,
      messageBody: content,
    });
  };

  return (
    <TransparentModal
      title="Mesaj Gönder"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={onPressCancel}
      onPressApprove={createTopic}
      isLoading={isLoading}>
      <>
        <Text style={styles.newTopicFormTitle}>Mesaj Başlığı</Text>
        <Input value={topicTitle} onChangeText={settopicTitle} width={Metrics.wp(278)} />

        <Text style={styles.newTopicFormTitle}>Mesaj</Text>
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
