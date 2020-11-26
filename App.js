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

    <Screen>
      <AppPicker 
        icon='apps'
        placeholder='Category'
        items={categories}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
      />
      <AppTextInput 
        icon='email'
        placeholder='Username' />
    </Screen>
  );
}