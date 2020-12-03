import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'

export default function ListingsScreen({ navigation: { navigate }}) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const result = await listingsApi.getListings();
    // if(!result.ok) re2
    setListings(result.data);
  }

  useEffect( () => {
    loadListings();
  }, [])

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
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