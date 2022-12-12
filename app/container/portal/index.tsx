import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PortalNavigatorParamList} from '@routes/stacks/portal/Types';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from '@selectors';

import {Metrics} from '@utils';
import {
  ForumIcon,
  ArticleIcon,
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

  const onPressRoute = (
    routeName: keyof PortalNavigatorParamList,
    mustSigned: boolean,
    params?: Object,
  ) => {
    if (mustSigned && !isUserSigned) {
      return mustSignDialog(navigation);
    }

    return navigation.navigate(routeName, params);
  };

  const openNegotiator = () => {
    navigation.navigate('arabulucuFee');
    // try {
    //   const webURL = 'https://arabulucuara.com/Ucrethesapla';
    //   Linking.openURL(webURL);
    // } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <PortalRoute
          icon={<ForumIcon width={40} hieght={40} />}
          label="Forum"
          onPress={() => onPressRoute('forum', true)}
        />

        <PortalRoute
          icon={<ArticleIcon width={29} hieght={34} />}
          label="Makaleler"
          onPress={() => onPressRoute('articles', true)}
        />

        <PortalRoute
          icon={<EventsIcon width={37} hieght={37} />}
          label="Etkinlikler"
          onPress={() => onPressRoute('events', true)}
        />
        <PortalRoute
          icon={<DataBaseIcon width={37} hieght={37} />}
          label="Bilgi Bankası"
          onPress={() => onPressRoute('dataBank', true)}
        />
        <PortalRoute
          icon={<MegaphoneIcon width={39} hieght={37} />}
          label="Bakanlık Duyuruları"
          onPress={() => navigation.navigate('ministryAnnouncements')}
        />
        <PortalRoute
          icon={<ZoomEventIcon width={39} hieght={39} />}
          label="Konferans Görüşmesi"
          onPress={() =>
            // onPressRoute('conferenceRoom', true, {
            //   roomURL:
            //     'https://sanalsinif.omeet.com.tr/bigbluebutton/api/join?fullName=Kadri+Y%c4%b1ld%c4%b1r%c4%b1m&meetingID=273c391b-0086-4465-aa08-c875a84eeae0&password=c9d93f91&joinViaHtml5=true&redirect=false&userID=&logoutURL=https://arabulucuara.com&checksum=ad33b7d9a0b43c1198a121b1adc1008dd590fb79',
            // })
            onPressRoute('joinConference', true)
          }
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
