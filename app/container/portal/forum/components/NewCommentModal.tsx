import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import TransparentModal from '@components/modals/TransparentModal';
import Input from '@components/input/Input';
import {Fonts, Metrics} from 'utils';

interface NewCommentModalProps {
  onPressCancel: () => void;
  onPressApprove: (comment: string) => void;
  isLoading?: boolean;
}

export default function NewComment({onPressCancel, onPressApprove, isLoading}: NewCommentModalProps) {
  const [comment, setcomment] = useState('');

  return (
    <TransparentModal
      title="Yorum Yap"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={onPressCancel}
      onPressApprove={() => onPressApprove(comment)}
      isLoading={isLoading}>
      <>
        <Text style={styles.newTopicFormTitle}>Yorumunuz</Text>
        <Input
          value={comment}
          onChangeText={setcomment}
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
});
