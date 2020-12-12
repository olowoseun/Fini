import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({ item, onPress }) {
  return  (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    marginTop: 5,
    textAlign: 'center'
  }
})
