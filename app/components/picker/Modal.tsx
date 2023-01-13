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
import {CommonStyles, Fonts, Metrics} from '@utils';
import {BackIcon} from '@icons';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();
  console.log('insets.top:', insets.top);

  return (
    <Modal visible={true} transparent={true}>
      <SafeAreaView style={CommonStyles.f1}>
        <View style={[styles.header]}>
          <Pressable
            style={styles.closeButton}
            hitSlop={{left: 50, right: 100, bottom: 8, top: 16}}
            onPress={closeModal}>
            <BackIcon width={25} height={25} stroke="#fff" />
          </Pressable>
          <Pressable onPress={closeModal}>
            <Text style={styles.closeButtonText}>Geri</Text>
          </Pressable>
        </View>

        <View style={styles.outOfBox}>
          <View style={[styles.container, listStyle]}>
            <FlatList
              data={items}
              contentContainerStyle={styles.listContent}
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
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outOfBox: {
    flex: 1,
    backgroundColor: '#00000aaa',
  },

  header: {
    flexDirection: 'row',
    paddingLeft: 16,
    width: Metrics.DEVICE_WIDTH,
    height: 55,
    alignItems: 'center',
    backgroundColor: '#790633',
  },

  closeButton: {},

  closeButtonText: {
    paddingLeft: 8,
    fontSize: 16,
    fontFamily: Fonts.robotoRegular,
    color: '#fff',
  },

  container: {
    flex: 1,
    width: Metrics.DEVICE_WIDTH,
    // borderRadius: 16,
    backgroundColor: '#fff',
  },

  listContent: {
    paddingVertical: 20,
  },

  item: {
    paddingBottom: 3,
    marginHorizontal: 16,
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
