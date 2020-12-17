import React from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Image, Platform, ScrollView } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import ContactSellerForm from '../components/ContactSellerForm'
import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    // <ScrollView>
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={ Platform.OS === 'ios' ? 0 : 100 }>
      <View>
        <Image style={styles.image} source={{uri: listing.images[0].url}} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>&#8358;{listing.price}</AppText>
          <ListItem 
            title='Seun Olowogoke'
            subTitle='10 Listings'
            image={require('../assets/olowogoke_seun.jpg')}
          />
        </View>
        <ContactSellerForm listing={listing} />
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 9.0543071,
            longitude: 7.254269,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}          
        />
      </View>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 240
  },
  map: {
    height: 200
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 5
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
})
