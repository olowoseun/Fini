import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.darkGrey} style={styles.icon} />}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
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
