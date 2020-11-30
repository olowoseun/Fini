import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({icon, width='100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.darkGrey} style={styles.icon} />}
      <TextInput 
        style={defaultStyles.text} 
        placeholderTextColor={ defaultStyles.colors.mediumGrey }
        {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  }
})
