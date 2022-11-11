import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';

import {Metrics} from '@utils';
import {
  ForumIcon,
  ArticleIcon,
  InvitationDocumentIcon,
  EventsIcon,
  DataBaseIcon,
  MegaphoneIcon,
  ZoomEventIcon,
  CalculatorMachineIcon,
} from '@icons';
import {mustSignDialog} from '@components/alert';

import PortalRoute from './components/PortalRoute';

export interface Props {
  navigation: StackNavigationProp<PortalNavigatorParamList, 'portal'>;
}

export default function Portal({navigation}: Props) {
  const isUserSigned = useSelector(isUserLoggedIn);

  const onPressRoute = (routeName: keyof PortalNavigatorParamList, mustSigned: boolean) => {
    if (mustSigned && !isUserSigned) {
      return mustSignDialog(navigation);
    }

    return navigation.navigate(routeName);
  };

  const openNegotiator = () => {
    try {
      const webURL = 'https://arabulucuara.com/Ucrethesapla';
      Linking.openURL(webURL);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <PortalRoute
          icon={<ForumIcon width={40} hieght={40} />}
          label="Forum"
          onPress={() => navigation.navigate('forum')}
        />
        <PortalRoute
          icon={<ArticleIcon width={29} hieght={34} />}
          label="Makaleler"
          onPress={() => onPressRoute('articles', true)}
        />
        <PortalRoute
          icon={<InvitationDocumentIcon width={26} hieght={35} />}
          label="Davet Mektubu"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<EventsIcon width={37} hieght={37} />}
          label="Etkinlikler"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<DataBaseIcon width={37} hieght={37} />}
          label="Bilgi Bankası"
          onPress={() => navigation.navigate('dataBank')}
        />
        <PortalRoute
          icon={<MegaphoneIcon width={39} hieght={37} />}
          label="Bakanlık Duyuruları"
          onPress={() => navigation.navigate('ministryAnnouncements')}
        />
        <PortalRoute
          icon={<ZoomEventIcon width={39} hieght={39} />}
          label="Konferans Görüşmesi"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<CalculatorMachineIcon width={32} hieght={37} />}
          label="Arabuluculuk Ücreti Hesaplama"
          onPress={openNegotiator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  routes: {
    marginTop: 68,
    marginLeft: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Metrics.DEVICE_WIDTH - 50,
    justifyContent: 'space-between',
  },
});
