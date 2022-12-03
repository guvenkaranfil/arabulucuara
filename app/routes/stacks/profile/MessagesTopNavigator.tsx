import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Inbox from '@profile/messages/Inbox';
import Outbox from '@profile/messages/Outbox';
import Archives from '@profile/messages/Archives';
import {Fonts} from '@utils';

const Tab = createMaterialTopTabNavigator();

function MessagesTopNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#766B6B',
        labelStyle: {fontSize: 14, fontFamily: Fonts.robotoRegular},
        indicatorStyle: {backgroundColor: '#000000', height: 1},
        indicatorContainerStyle: {borderBottomWidth: 1, borderBottomColor: '#B3B3B3'},
      }}>
      <Tab.Screen name="inbox" component={Inbox} options={{title: 'Mesajlar'}} />
      <Tab.Screen name="outbox" component={Outbox} options={{title: 'Giden Kutusu'}} />
      {/* <Tab.Screen name="archive" component={Archives} options={{title: 'Arşiv'}} /> */}
    </Tab.Navigator>
  );
}

export default MessagesTopNavigator;
