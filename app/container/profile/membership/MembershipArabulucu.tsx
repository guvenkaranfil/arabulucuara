import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import TwoQuestions from '@search/components/TwoQuestions';
import FilledButton from '@components/buttons/FilledButton';
import {
  MembershipArabulucu as IMemberArabulucu,
  useUpdateMembershipMutation,
} from '@profile/ProfileGetApi';
import {Constants} from '@utils';

const uyeMi = {
  true: {id: 1, label: 'Evet'},
  false: {id: 2, label: 'Hayır'},
};

export default function MembershipArabulucu({member}: {member: IMemberArabulucu}) {
  const [merkezUyeMi, setmerkezUyeMi] = useState(uyeMi[member.merkezUyesiMi]);
  const [dernekUyeMi, setdernekUyeMi] = useState(uyeMi[member.dernekUyesiMi]);
  const [merkez, setmerkez] = useState(member.merkezAdi);
  const [dernek, setdernek] = useState(member.dernekAdi);
  const [oda, setoda] = useState(member.odaAdi);

  const [updateMembership, {isLoading}] = useUpdateMembershipMutation();

  const handleSave = () => {
    console.table({
      merkezUyesiMi: merkezUyeMi.id === 1 ? true : false,
      dernekUyesiMi: dernekUyeMi.id === 1 ? true : false,
      odaUyesiMi: false,
      sicilKayitliMi: false,
      merkezAdi: merkez,
      dernekAdi: dernek,
      odaAdi: oda,
    });
    updateMembership({
      merkezUyesiMi: merkezUyeMi.id === 1 ? true : false,
      dernekUyesiMi: dernekUyeMi.id === 1 ? true : false,
      odaUyesiMi: false,
      sicilKayitliMi: false,
      merkezAdi: merkez,
      dernekAdi: dernek,
      odaAdi: oda,
    })
      .then(res => {
        console.log('res update membersip:', res);
        if (res?.data?.result) {
          Alert.alert('Başarılı', 'Bilgiler Başarılı bir şekilde güncellendi');
        } else {
          Alert.alert(Constants.GENERA_ALERT_TITLE, Constants.GENERAL_ALERT_BODY);
        }
      })
      .catch(() => Alert.alert(Constants.GENERA_ALERT_TITLE, Constants.GENERAL_ALERT_BODY));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <TwoQuestions
          question="Arabuluculuk merkezi üyesi misiniz?"
          selectedOption={merkezUyeMi}
          onPressOption={setmerkezUyeMi}
          option1={uyeMi[true]}
          option2={uyeMi[false]}
        />

        <TwoQuestions
          question="Arabuluculuk derneği üyesi misiniz?"
          selectedOption={dernekUyeMi}
          onPressOption={setdernekUyeMi}
          option1={uyeMi[true]}
          option2={uyeMi[false]}
        />

        <View style={styles.formInput}>
          <Text>Arabuluculuk Merkezi</Text>
          <TextInput value={merkez} onChangeText={setmerkez} style={styles.input} />
        </View>

        <View style={styles.formInput}>
          <Text>Dernek</Text>
          <TextInput value={dernek} onChangeText={setdernek} style={styles.input} />
        </View>

        <View style={styles.formInput}>
          <Text>Oda</Text>
          <TextInput value={oda} onChangeText={setoda} style={styles.input} />
        </View>

        <FilledButton label="KAYDET" bgColor="#7E0736" onPress={handleSave} isLoading={isLoading} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: '#fff',
  },

  contentStyle: {
    paddingVertical: 32,
  },

  labelStyle: {
    color: '#000',
  },

  roundStyle: {
    borderColor: '#000',
  },

  formInput: {
    marginBottom: 20,
  },

  input: {
    marginTop: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    height: 45,
    borderWidth: 0.3,
    borderColor: '#000',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
