import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Metrics} from 'utils';
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

import PortalRoute from './components/PortalRoute';

export default function Portal() {
  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <PortalRoute
          icon={<ForumIcon width={40} hieght={40} />}
          label="Forum"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<ArticleIcon width={29} hieght={34} />}
          label="Makaleler"
          onPress={() => console.log('onPress...')}
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
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<MegaphoneIcon width={39} hieght={37} />}
          label="Bakanlık Duyuruları"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<ZoomEventIcon width={39} hieght={39} />}
          label="Konferans Görüşmesi"
          onPress={() => console.log('onPress...')}
        />
        <PortalRoute
          icon={<CalculatorMachineIcon width={32} hieght={37} />}
          label="Arabuluculuk Ücreti Hesaplama"
          onPress={() => console.log('onPress...')}
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
