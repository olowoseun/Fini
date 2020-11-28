import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const categories = [
  {
    label: 'Furniture',
    value: 1
  },
  {
    label: 'Clothing',
    value: 2
  },
  {
    label: 'Games',
    value: 3
  },
]

export default function App() {
  const [category, setCategory] = useState(categories[2]);
 

  return (
    <MessagesScreen />
  );
}