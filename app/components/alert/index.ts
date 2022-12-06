import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert} from 'react-native';

export const mustSignDialog = (navigation: StackNavigationProp<ParamListBase, string>) => {
  return Alert.alert(
    'Sayfayı Görüntüleme Yetkiniz Yok',
    'Lütfen sayfayı görüntüleyebilmek için giriş yapın ya da kayıyt olun',
    [
      {text: 'Giriş Yap', onPress: () => navigation.navigate('auth', {screen: 'login'})},
      {
        text: 'Kayıt Ol',
        onPress: () => navigation.navigate('auth', {screen: 'registerIdentities'}),
      },
      {text: 'Vazgeç'},
    ],
  );
};
