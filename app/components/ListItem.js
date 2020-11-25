import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors';

export default function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.mediumGrey
  },
  title: {
    fontWeight: '500'
  }
})
