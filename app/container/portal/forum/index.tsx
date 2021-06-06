import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from 'routes/stacks/portal/Types';

import {categoriesSample, topicSample, topics} from './mocks';
import TransparentModal from '@components/modals/TransparentModal';
import FilledButton from '@components/buttons/FilledButton';
import DropDownPicker from '@components/picker/DropDownPicker';
import Categories, {Category} from './components/Categories';
import UpdatedTopics from './components/UpdatedTopics';
import {Fonts, Metrics} from 'utils';
import AuthInput from 'components/input/AuthInput';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'forum'>;
}

export default function Forum({navigation}: Props) {
  const [isTopicAdditionModalOpen, setisTopicAdditionModalOpen] = useState(false);
  const [selectedTopicCategory, setselectedTopicCategory] = useState({topicName: ''});
  const [topicTitle, settopicTitle] = useState('');

  const _renderTopicAdditionModal = () => (
    <TransparentModal
      title="Yeni Konu"
      cancelText="İptal"
      approveText="Gönder"
      onPressCancel={() => setisTopicAdditionModalOpen(false)}
      onPressApprove={() => console.log('onPress approve...')}>
      <>
        <Text style={styles.newTopicFormTitle}>Kategori</Text>
        <DropDownPicker
          style={{width: Metrics.wp(278)}}
          value={selectedTopicCategory?.topicName}
          placeholder="İl Seçiniz"
          items={topics}
          renderItem={item => item.topicName}
          onPress={setselectedTopicCategory}
        />

        <Text style={styles.newTopicFormTitle}>Konu Başlığı</Text>
        <AuthInput value={topicTitle} onChangeText={settopicTitle} width={Metrics.wp(278)} />

        <Text style={styles.newTopicFormTitle}>İçerik</Text>
        <AuthInput
          value={topicTitle}
          onChangeText={settopicTitle}
          width={Metrics.wp(278)}
          height={Metrics.hp(290)}
          isMultiLine={true}
        />
      </>
    </TransparentModal>
  );

  return (
    <View style={styles.container}>
      {isTopicAdditionModalOpen && _renderTopicAdditionModal()}

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Categories
          categories={categoriesSample}
          onPress={(item: Category) => navigation.navigate('categoryDetail', {...item})}
        />
        <UpdatedTopics topics={topicSample} />

        <View style={styles.footer}>
          <FilledButton
            label="Yeni Konu"
            bgColor="#7E0736"
            onPress={() => setisTopicAdditionModalOpen(true)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {paddingVertical: 30},

  newTopicFormTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: '#181C32',
  },

  footer: {marginTop: 30, alignItems: 'center'},
});
