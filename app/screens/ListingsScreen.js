import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    title: 'Couch in good condition for sale',
    price: 50000,
    image: require('../assets/couch.jpg')
  },
  {
    id: 2,
    title: 'Playstation 5',
    price: 200000,
    image: require('../assets/playstation.jpg')
  },
]

export default function ListingsScreen({ navigation: { navigate }}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
            onPress={() => navigate('ListingDetails', item)}
            />
        )}
       />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey
  }
})