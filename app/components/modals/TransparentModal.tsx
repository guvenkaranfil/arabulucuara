import React, {ReactElement} from 'react';
import {StyleSheet, ScrollView, Modal, View, Text} from 'react-native';

import FilledButton from '../buttons/FilledButton';
import {Fonts, Metrics} from 'utils';

interface TransparentModalProps {
  children: ReactElement;
  title: string;
  cancelText: string;
  approveText: string;
  showCancelButton?: boolean;
  onPressCancel: () => void;
  onPressApprove: () => void;
}

export default function TransparentModal({
  children,
  title,
  cancelText,
  approveText,
  showCancelButton = true,
  onPressCancel,
  onPressApprove,
}: TransparentModalProps) {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
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
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },

  centeredContainer: {
    width: Metrics.DEVICE_WIDTH - 28 * 2,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  modalHeader: {
    marginBottom: 15,
    paddingTop: 26,
    paddingHorizontal: 21,
    width: '100%',
    height: 57,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },

  title: {
    fontSize: 16,
    fontFamily: Fonts.robotoLight,
    color: '#181C32',
  },

  content: {
    paddingBottom: 28,
    paddingHorizontal: 21,
  },

  footer: {
    marginBottom: 11,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#707070',
  },

  cancelButton: {
    width: Metrics.wp(112),
    height: Metrics.hp(44),
    backgroundColor: '#F4E1F0',
  },

  cancelLabel: {color: '#7E0736'},

  approveButton: {
    width: Metrics.wp(112),
    height: Metrics.hp(44),
    backgroundColor: '#7E0736',
  },
});
