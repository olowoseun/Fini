import React from 'react';
import { View } from 'react-native';
import AppText from './app/components/AppText';
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
  return (
  //  <View style={{
  //    backgroundColor: '#f8f4f4',
  //    padding: 20,
  //    paddingTop: 100
  //  }}>
  //   <Card 
  //     title='Couch in good condition for sale.'
  //     subTitle='&#8358;50000'
  //     image={require('./app/assets/couch.jpg')} />
  //  </View>
   <AccountScreen />
  );
}