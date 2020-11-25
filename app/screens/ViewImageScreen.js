import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
   <View style={styles.container}>
     <View style={styles.closeButton}>
        <MaterialCommunityIcons
          name='close'
          size={40}
          color={colors.white} />
     </View>
     <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={40}
          color={colors.white} />
     </View>
     <Image style={styles.image} resizeMode='contain' source={require('../assets/chair.jpg')} />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 30
  },
  deleteButton: {
    position: 'absolute',
    top: 50,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})