import React from 'react'
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ListItem({title, subTitle, image, IconComponent, numberOfLines, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name='chevron-right' size={30} color={colors.mediumGrey} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1
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
