import React from 'react'
import { Keyboard, Alert, View } from 'react-native'

import { AppForm, AppFormField, SubmitButton } from "./forms"
import messagesApi from '../api/messages'
import * as Notifications from 'expo-notifications'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message')
});

export default ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }) => {
    Keyboard.dismiss();

    const response = await messagesApi.send(message, listing.id);
  
    if(!response.ok) {
      console.log(response);
      Alert.alert('Error', 'Could not send message to user.');
    }

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      })
    });
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Success',
        body: 'Your message was sent to seller.'
      },
      trigger: null
    });

  }

  return (
    <View style={{ padding: 20, paddingTop: 0 }}>
      <AppForm
        initialValues={{ message: '' }}
        onSubmit={ handleSubmit }
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          multiline
          name='message'
          numberOfLines={3}
          placeholder='Message...'
        />
        <SubmitButton title='Contact Seller' />
      </AppForm>
    </View>
  )
}