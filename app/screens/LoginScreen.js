import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import ErrorMessage from '../components/forms/ErrorMessage'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
import AppPicker from '../components/AppPicker'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password')
})

export default function LoginScreen() {

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ email: '', password: ''}}
        onSubmit={ values => console.log(values) }
        validationSchema={validationSchema}
      >
          <Image
            style={styles.logo}
            source={require('../assets/logo_fini.png')}
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          /> 
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry={true}
            textContentType='password'
          /> 
          <SubmitButton
            title='Sign in' 
          />
        
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  screen: {
    padding: 15
  }
})