import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import TransparentModal from '@components/modals/TransparentModal';
import AuthInput from '@components/input/AuthInput';
import {Fonts, Metrics} from 'utils';

interface NewCommentModalProps {
  onPressCancel: () => void;
  onPressApprove: (comment: string) => void;
}

export default function NewComment({onPressCancel, onPressApprove}: NewCommentModalProps) {
  const [comment, setcomment] = useState('');

  return (
    <TransparentModal
      title="Yorum Yap"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={onPressCancel}
      onPressApprove={() => onPressApprove(comment)}>
      <>
        <Text style={styles.newTopicFormTitle}>Yorumunuz</Text>
        <AuthInput
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
