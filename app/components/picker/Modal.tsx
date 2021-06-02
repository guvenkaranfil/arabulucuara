import React, {ReactElement} from 'react';
import {
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import {Metrics} from 'utils';

type Props = {
  listStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  labelStyle?: TextStyle;
  items: Array<Object>;
  renderItem: (item: any) => ReactElement;
  onPress: (item: any) => void;
  closeModal: () => void;
};

export default function PickModal({
  listStyle,
  itemStyle,
  labelStyle,
  items,
  renderItem,
  onPress,
  closeModal,
}: Props) {
  return (
    <Modal visible={true} transparent={true}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.outOfBox}>
          <View style={[styles.container, listStyle]}>
            <FlatList
              data={items}
              renderItem={({item}) => (
                <Pressable style={[styles.item, itemStyle]} onPress={() => onPress(item)}>
                  <Text style={[styles.label, labelStyle]}>{renderItem(item)}</Text>
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
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CBC9D9',
  },

  label: {},
});
