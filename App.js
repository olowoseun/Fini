import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  
  return <Button title='Click me' onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
}


const Tweets = ({ navigation: { navigate } }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Button title='View Tweets' onPress={() => navigate('TweetDetails', {id: 1, name: 'Dave'})} /> */}
    <Link />
  </Screen>
)

const TweetDetails = ({ route: { params } }) => (
  <Screen>
    <Text>Tweet Details { params.id }</Text>
  </Screen>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: 'tomato'},
      headerTintColor: 'white'
      
    }}>
    <Stack.Screen name='Tweets' component={Tweets} 
      options={{
        
      }}
    />
    <Stack.Screen name='TweetDetails' component={TweetDetails}
      options={{
       title: 'Tweet Details',
      }} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={StackNavigator} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
);

export default function App() {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}