import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    bottom: 20,
    borderWidth: 10,
    borderColor: colors.white
  }
})