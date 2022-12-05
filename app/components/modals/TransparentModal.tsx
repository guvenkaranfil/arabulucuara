import React, {ReactElement} from 'react';
import {ScrollView, Modal, View, Text} from 'react-native';
import FilledButton from '../buttons/FilledButton';
import styles from './styles/TransparentModalStyle';
import {Labels} from '@utils';

interface TransparentModalProps {
  children: ReactElement;
  title: string;
  cancelText: string;
  approveText: string;
  showCancelButton?: boolean;
  onPressCancel: () => void;
  onPressApprove: () => void;
  isLoading?: boolean;
}

export default function TransparentModal({
  children,
  title,
  cancelText,
  approveText,
  showCancelButton = true,
  onPressCancel,
  onPressApprove,
  isLoading = false,
}: TransparentModalProps) {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <View style={styles.modalHeader}>
            <Text style={Labels.label16LightMirage}>{title}</Text>
          </View>
          <View style={styles.content}>
            <ScrollView bounces={false}>{children}</ScrollView>
          </View>
          <View style={styles.footer}>
            {showCancelButton ? (
              <FilledButton
                style={styles.cancelButton}
                labelStyle={styles.cancelLabel}
                label={cancelText}
                onPress={onPressCancel}
              />
            ) : (
              <View />
            )}

            <FilledButton
              style={styles.approveButton}
              label={approveText}
              onPress={onPressApprove}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
