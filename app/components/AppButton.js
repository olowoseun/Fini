import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors';

export default function AppButton({title, color='primary', onPress}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform:  'uppercase'
  }
})
