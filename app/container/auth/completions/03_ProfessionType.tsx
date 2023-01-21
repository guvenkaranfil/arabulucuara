import React, {useState, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {
  useGetJobsQuery,
  useGetProfessionsQuery,
  useLazyGetProfessionsQuery,
  useStepThreeMutation,
} from '@store/auth/AuthApi';
import {useSelector} from 'react-redux';
import {RootState} from '@store/RootStore';

import LoginLayout from '@components/layouts/LoginLayout';
import Header from '@components/auth/Header';
import Pedometer from '@components/auth/Pedometer';
import DropDownPicker from '@components/picker/DropDownPicker';
import MultiSelectDropDownPicker from '@components/picker/MultiSelectDropDownPicker';
import MultiSelectCategoryDropDownPicker from '@components/picker/MultiSelectCategoryDropDownPicker';
import FilledButton from '@components/buttons/FilledButton';
import OutlineButton from '@components/buttons/OutlineButton';
import RoundCheckBox from '@components/checkbox/RoundCheckBox';
import styles from './styles/ProfessionStyle';
import Input from '@components/input/Input';

export default function ProfessionType({navigation}) {
  /* Arabulucu */
  const [registrationYear, setregistrationYear] = useState({id: undefined, year: undefined});
  const [otherProfession, setotherProfession] = useState({id: undefined, name: undefined});
  const [isMeditationCenter, setisMeditationCenter] = useState(true);
  const [isMemberOfMeditationCenter, setisMemberOfMeditationCenter] = useState(true);
  const [years, setyears] = useState<{year: number}[]>();
  const [selectedProffesions, setselectedProffesions] = useState<Array<number>>([]);

  /* Merkez */
  const [ortakSayisi, setortakSayisi] = useState('');
  const [uyeSayisi, setuyeSayisi] = useState('');
  const [odaSayisi, setodaSayisi] = useState('');

  /* Uzman */
  const [uzmanMeslek, setuzmanMeslek] = useState({id: undefined, name: undefined});
  const [selectedUzmanMeslekler, setselectedUzmanMeslekler] = useState([]);
  const [meslekBaslangicYili, setmeslekBaslangicYili] = useState();
  const [uzmanlikAlanlari, setuzmanlikAlanlari] = useState([]);
  const [uzmanlikAlani, setuzmanlikAlani] = useState({id: undefined, name: undefined});

  // const {data: professions} = useGetProfessionsQuery({userType: 'arabulucu'});
  const {data: professions} = useGetJobsQuery();
  const [getUzamnlıkAlanlari, result] = useLazyGetProfessionsQuery();
  const {data: jobs} = useGetJobsQuery();

  const [saveStepThree, {isLoading}] = useStepThreeMutation();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const currentDate = new Date();
    let calculatedYears = [];
    currentDate.getFullYear();
    for (let i = 2013; i <= currentDate.getFullYear(); i++) {
      calculatedYears.push({year: i});
    }
    setyears(calculatedYears.reverse());

    console.log('user.userRole:', user.userRole);

    if (user.userRole === 'uzman' || user.userRole === 'arabulucu') {
      getUzamnlıkAlanlari({userType: 'uzman'});
    }
  }, []);

  const saveAndContinue = () => {
    let response = {};

    if (user.userRole === 'arabulucu') {
      response = {
        arabulucu: {
          meslekler: selectedProffesions,
          sicilKayitYili: registrationYear.year,
          merkezUyesiMi: isMeditationCenter,
          dernekUyesiMi: isMemberOfMeditationCenter,
        },
        merkez: null,
        uzman: null,
      };
    } else if (user.userRole === 'merkez') {
      response = {
        merkez: {
          ortakSayisi: Number(ortakSayisi),
          uyeSayisi: Number(uyeSayisi),
          odaSayisi: Number(odaSayisi),
        },
        arabulucu: null,
        uzman: null,
      };
    } else if (user.userRole === 'uzman') {
      response = {
        arabulucu: null,
        merkez: null,
        uzman: {
          meslekler: selectedUzmanMeslekler,
          meslekBaslangicYili: meslekBaslangicYili?.year,
          uzmanlikAlani: uzmanlikAlanlari,
        },
      };
    }

    console.log('resuest body: ', response);
    saveStepThree(response)
      .then(res => {
        console.info('response of step 3:', res);
        if (res?.data?.status === 200) {
          navigation.replace('completions/profilePhoto');
        } else {
          Alert.alert(
            'Bir sorun oluştu',
            res?.data?.message ?? 'Lütfen daha sonra tekrar deneyiniz',
          );
        }
      })
      .catch(error => {
        console.log('ERR: ', error);
      });
  };

  const onPressProfession = profession => {
    const isProfessionAdded = selectedProffesions?.includes(profession.id);

    if (isProfessionAdded) {
      const temporaryProfessions = selectedProffesions?.filter(x => x !== profession.id);
      setselectedProffesions(temporaryProfessions);

      if (temporaryProfessions.length === 0) {
        setotherProfession({id: undefined, name: undefined});
      }
    } else {
      const oldValue = selectedProffesions;
      oldValue.push(profession.id);
      setselectedProffesions(oldValue);
      setotherProfession({
        id: profession.id,
        name: professions?.find(item => item.id === profession.id).value ?? undefined,
      });
    }
    console.log('selectedItems: ', selectedProffesions);
  };

  const onPressUzmanlıkAlanları = profession => {
    const isProfessionAdded = uzmanlikAlanlari?.includes(profession.alanId);

    if (isProfessionAdded) {
      const temporaryProfessions = uzmanlikAlanlari?.filter(x => x !== profession.alanId);
      setuzmanlikAlanlari(temporaryProfessions);

      if (temporaryProfessions.length === 0) {
        setuzmanlikAlani({id: undefined, name: undefined});
      }
    } else {
      const oldValue = uzmanlikAlanlari;
      oldValue.push(profession.alanId);
      setuzmanlikAlanlari(oldValue);
      setuzmanlikAlani({id: undefined, name: undefined});
    }
    console.log('selectedItems: ', uzmanlikAlanlari);
  };

  const onPressJob = job => {
    const isJobAdded = selectedUzmanMeslekler?.includes(job.id);

    if (isJobAdded) {
      const temporaryUzmanMeslekler = selectedUzmanMeslekler?.filter(x => x === job.id);
      setselectedUzmanMeslekler(temporaryUzmanMeslekler);
    } else {
      const oldValue = selectedUzmanMeslekler;
      oldValue.push(job.id);
      setselectedUzmanMeslekler(oldValue);
      setuzmanMeslek({
        id: job.id,
        name: jobs?.find(item => item.id === job.id).value ?? undefined,
      });
    }
  };

  const _renderArabulucu = () => {
    return (
      <>
        <View style={styles.form}>
          <DropDownPicker
            value={registrationYear?.year}
            placeholder="Arabulucu Sicil Kayıt Yılı"
            items={years ?? []}
            renderItem={item => item.year}
            onPress={setregistrationYear}
          />

          <MultiSelectDropDownPicker
            selectedItems={selectedProffesions}
            value={otherProfession?.name}
            placeholder={'Diğer Mesleğiniz'}
            items={professions ?? []}
            renderItem={item => item.value}
            onPress={onPressProfession}
          />
        </View>

        <View style={styles.formQuestion}>
          <Text style={styles.questionLabel}>Arabuluculuk merkezi üyesi misiniz?</Text>
          <View style={styles.formQuestionRow}>
            <RoundCheckBox
              label="Evet"
              isVisible={isMeditationCenter}
              onPress={() => setisMeditationCenter(true)}
            />
            <RoundCheckBox
              label="Hayır"
              isVisible={!isMeditationCenter}
              onPress={() => setisMeditationCenter(false)}
            />
          </View>
        </View>

        <View style={styles.formQuestion}>
          <Text style={styles.questionLabel}>Arabuluculuk derneği üyesi misiniz?</Text>
          <View style={styles.formQuestionRow}>
            <RoundCheckBox
              label="Evet"
              isVisible={isMemberOfMeditationCenter}
              onPress={() => setisMemberOfMeditationCenter(true)}
            />
            <RoundCheckBox
              label="Hayır"
              isVisible={!isMemberOfMeditationCenter}
              onPress={() => setisMemberOfMeditationCenter(false)}
            />
          </View>
        </View>
      </>
    );
  };

  const _renderMerkez = () => {
    return (
      <View style={styles.form}>
        <Input
          value={ortakSayisi}
          onChangeText={setortakSayisi}
          placeholder="Ortak Sayısı"
          keyboardType="number-pad"
        />
        <Input
          value={uyeSayisi}
          onChangeText={setuyeSayisi}
          placeholder="Üye Sayısı"
          keyboardType="number-pad"
        />
        <Input
          value={odaSayisi}
          onChangeText={setodaSayisi}
          placeholder="Oda sayısı"
          keyboardType="number-pad"
        />
      </View>
    );
  };

  const _renderUzman = () => {
    return (
      <>
        <View style={styles.form}>
          <MultiSelectDropDownPicker
            selectedItems={selectedUzmanMeslekler}
            value={uzmanMeslek?.name}
            placeholder={'Meslekler'}
            items={jobs ?? []}
            renderItem={item => item.value}
            onPress={onPressJob}
          />

          <DropDownPicker
            value={meslekBaslangicYili?.year}
            placeholder="Meslek Başlangıc Yılı"
            items={years ?? []}
            renderItem={item => item.year}
            onPress={setmeslekBaslangicYili}
          />

          <MultiSelectCategoryDropDownPicker
            selectedItems={uzmanlikAlanlari}
            value={uzmanlikAlani?.name}
            placeholder={'Uzmanlık alanı'}
            items={result.data ?? []}
            renderItem={item => item.alanAdi}
            onPress={onPressUzmanlıkAlanları}
          />
        </View>
      </>
    );
  };

  const _renderContent = () => {
    console.log('user.userRole:', user.userRole);
    if (user.userRole === 'merkez') {
      return _renderMerkez();
    } else if (user.userRole === 'arabulucu') {
      return _renderArabulucu();
    } else if (user.userRole === 'uzman') {
      return _renderUzman();
    }
  };

  return (
    <LoginLayout enableKeyboardDismiss={false} showHomeButton={true}>
      <Header screenTitle="Üyelik Tamamlama Adımları" dynamicHeight={170} />

      <View style={styles.step}>
        <Pedometer activeStep={3} totalCount={7} />
        <Text style={styles.stepInfo}>
          Aşağıda yer alan bilgileri girdiğinizde{'\n'}üyelik işleminiz tamamlanacaktır.
        </Text>
      </View>

      {_renderContent()}
      <View style={styles.footer}>
        <FilledButton label="Devam Et" onPress={saveAndContinue} isLoading={isLoading} />

        <OutlineButton label="Geri" onPress={() => console.log('onPress...')} />
      </View>
    </LoginLayout>
  );
}
