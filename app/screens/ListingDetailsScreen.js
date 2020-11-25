import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/couch.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Couch in good condition for sale.</AppText>
        <AppText style={styles.price}>&#8358;50000</AppText>
        <ListItem 
          title='Seun Olowogoke'
          subTitle='10 Listings'
          image={require('../assets/olowogoke_seun.jpg')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
})
