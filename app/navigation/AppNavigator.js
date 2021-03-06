import React, {useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import expoPushTokensApi from '../api/expoPushTokens'
import navigation from './rootNavigation'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  
  const registerForPushNotifications = async () => {
    const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(!granted) return;

    const token = await Notifications.getExpoPushTokenAsync();
    expoPushTokensApi.register(token);
    console.log(token);
  }
  
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener(notification => {
      navigation.navigate('Account');
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={FeedNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='home' color={color} size={size} />
        }}
      />
      <Tab.Screen name='ListingEdit' component={ListingEditScreen} 
        options={({ navigation: { navigate }}) => (
          {
          tabBarButton: () => <NewListingButton onPress={() => navigate('ListingEdit')} />,
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
        })}
      />
      <Tab.Screen name='Account' component={AccountNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='account' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;