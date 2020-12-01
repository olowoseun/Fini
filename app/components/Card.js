import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import colors from '../config/colors'
import AppText from './AppText'


export default function Card({title, subTitle, image, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7
  }
})