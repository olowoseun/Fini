import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'

export default function AppPicker({icon, placeholder}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.darkGrey} style={styles.icon} />}
        <AppText>{placeholder}</AppText>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.lightGrey,
    width: '100%',
    borderRadius: 25,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  }
})
