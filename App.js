import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(true);

  return (

    <Screen>
      <AppPicker 
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput 
        icon='email'
        placeholder='Username' />
    </Screen>
  );
}