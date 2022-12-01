import React, {useState, ReactElement} from 'react';
import {StyleSheet, Pressable, Text, ViewStyle} from 'react-native';
import {Fonts, Labels, Metrics} from '@utils';
import {BottomIcon, UpIcon} from '@icons';
import MultiSelectModal from './MultiSelectModal';

interface Props {
  style?: ViewStyle;
  value?: string;
  placeholder: string;
  items: Array<Object>;
  renderItem: (item: any) => ReactElement;
  onPress: (item: any) => void;
  selectedItems: [];
}

export default function DropDownPicker({
  style,
  value,
  placeholder,
  items,
  renderItem,
  onPress,
  selectedItems,
}: Props) {
  const [modalVisible, setmodalVisible] = useState(false);
  console.log('selectedItems: ', selectedItems);

  return (
    <>
      {modalVisible && (
        <MultiSelectModal
          items={items}
          renderItem={renderItem}
          onPress={item => {
            onPress(item);
          }}
          closeModal={() => setmodalVisible(false)}
          selectedItems={selectedItems}
        />
      )}
      <Pressable style={[styles.container, style]} onPress={() => setmodalVisible(true)}>
        <Text
          numberOfLines={2}
          style={[Labels.label16RegularMischka, value ? styles.value : styles.placeholder]}>
          {value ?? placeholder}
        </Text>
        {modalVisible ? <UpIcon width={20} height={14} /> : <BottomIcon width={18} height={18} />}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 17,
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH - 56,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },

  placeholder: {},

  value: {
    maxWidth: Metrics.DEVICE_WIDTH - 56 * 3,
    fontFamily: Fonts.robotoMedium,
    color: '#0F0A39',
  },
});
