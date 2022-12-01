import React, {ReactElement} from 'react';
import {
  StyleSheet,
  Modal,
  Pressable,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  SectionList,
} from 'react-native';
import {Fonts, Metrics} from '@utils';

type Props = {
  listStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  labelStyle?: TextStyle;
  items: Array<Array<Object>>;
  renderItem: (item: any) => ReactElement;
  onPress: (item: any) => void;
  closeModal: () => void;
  selectedItems: [];
};

export default function PickModal({
  listStyle,
  itemStyle,
  labelStyle,
  items,
  renderItem,
  onPress,
  closeModal,
  selectedItems,
}: Props) {
  const categories = items.map(item => {
    return {
      title: item.kategoriAdi,
      data: item.alanlar,
    };
  });
  console.info('categories:', categories);
  console.info('selectedItems >> multiple:', selectedItems);

  return (
    <Modal visible={true} transparent={true}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.outOfBox}>
          <View style={[styles.container, listStyle]}>
            <SectionList
              sections={categories}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
              )}
              renderItem={({item}) => (
                <Pressable style={[styles.item, itemStyle]} onPress={() => onPress(item)}>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.label,
                      selectedItems.includes(item.alanId) ? {color: 'green'} : {},
                      labelStyle,
                    ]}>
                    {renderItem(item)}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(_, index) => String(index)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 30,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.robotoBold,
    backgroundColor: '#F4E1F0',
  },
  outOfBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000aaa',
  },

  container: {
    paddingVertical: 28,
    width: Metrics.DEVICE_WIDTH - 56,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  item: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CBC9D9',
  },

  label: {
    maxWidth: Metrics.DEVICE_WIDTH - 56 * 2,
    textAlign: 'center',
  },
});
