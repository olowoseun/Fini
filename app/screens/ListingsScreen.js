import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import AppActivityIndicator from '../components/AppActivityIndicator'
import useApi from '../hooks/useApi'

export default function ListingsScreen({ navigation: { navigate }}) {
  const {data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);
  
  useEffect(() => {
    loadListings();
  }, [])

  return (
    <Screen style={styles.screen}>
      { error && <>
        <AppText>Couldn't retrieve listings from server.</AppText>
        <AppButton title='Retry' onPress={loadListings} />
      </> }
      <AppActivityIndicator visible={loading} />
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