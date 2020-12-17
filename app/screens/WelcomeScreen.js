import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native'
import AppButton from '../components/AppButton';

import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require('../assets/office_bg.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('../assets/logo-primary.png')} />
        <Text style={styles.tagline}>Sell what you don't need.</Text>
      </View>
      <View style={styles.buttonsBackground}>
        <AppButton title='Sign in' onPress={() => navigation.navigate('Sign in')}/>
        <AppButton title='Register' color='secondary' onPress={() => navigation.navigate('Register')}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  buttonsBackground: {
    padding: 15,
    width: '100%'
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 70,
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10
  }
});