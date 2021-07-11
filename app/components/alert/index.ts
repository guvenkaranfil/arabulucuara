import {NavigationProp} from '@react-navigation/native';
import {Alert} from 'react-native';

export const mustSignDialog = (navigation?: NavigationProp) => {
  return Alert.alert(
    'Sayfayı Görüntüleme Yetkiniz Yok',
    'Lütfen sayfayı görüntüleyebilmek için giriş yapın ya da kayıyt olun',
    [
      {text: 'Giriş Yap', onPress: () => navigation.navigate('auth', {screen: 'login'})},
      {text: 'Kayıt Ol'},
      {text: 'Vazgeç'},
    ],
  );
};
