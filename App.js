import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import jwtDecode from 'jwt-decode'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { AppLoading } from 'expo';
import { navigationRef } from './app/navigation/rootNavigation'
import AppButton from './app/components/AppButton'
import Screen from './app/components/Screen'
import * as Notifications from 'expo-notifications'

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if(user) setUser(user);
  }

  if(!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />

  const showNotification = async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      })
    });
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Title',
        body: 'Lorem ipsum dolor.'
      },
      trigger: {
        seconds: 2
      }
    });
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>   
    // <Screen>
    //   <AppButton title='Tap me' onPress={showNotification} />
    // </Screen>

  );
}