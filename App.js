import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}