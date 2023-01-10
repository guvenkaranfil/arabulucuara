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
  SafeAreaView,
} from 'react-native';
import {Metrics} from '@utils';
import {BackIcon} from '@icons';

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
      <SafeAreaView style={{flex: 1}}>
        <Pressable
          style={styles.closeButton}
          hitSlop={{left: 16, right: 16, bottom: 8, top: 16}}
          onPress={closeModal}>
          {/* <Text style={styles.closeButtonText}>X</Text> */}
          <BackIcon width={25} height={25} stroke="#000" />
        </Pressable>
        <TouchableWithoutFeedback onPress={closeModal}>
          {/* <TouchableWithoutFeedback> */}
          <View style={styles.outOfBox}>
            <View style={[styles.container, listStyle]}>
              <FlatList
                data={items}
                renderItem={({item}) => (
                  <Pressable
                    style={[styles.item, itemStyle]}
                    // onLongPress={() => onPress(item)}
                    onPress={() => onPress(item)}>
                    <Text numberOfLines={2} style={[styles.label, labelStyle]}>
                      {renderItem(item)}
                    </Text>
                  </Pressable>
                )}
                keyExtractor={(_, index) => String(index)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
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

  closeButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 9999,
  },

  closeButtonText: {
    fontSize: 30,
  },

  container: {
    paddingTop: 40,
    paddingVertical: 28,
    width: Metrics.DEVICE_WIDTH,
    // borderRadius: 16,
    backgroundColor: '#fff',
  },

  item: {
    paddingLeft: 16,
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CBC9D9',
  },

  label: {
    paddingBottom: 4,
    maxWidth: Metrics.DEVICE_WIDTH - 56 * 2,
    textAlign: 'center',
  },
});
