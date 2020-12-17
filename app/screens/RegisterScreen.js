import React, { useState, useContext } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'

import usersApi from '../api/users'
import authApi from '../api/auth'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import ErrorMessage from '../components/forms/ErrorMessage'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password')
})

export default function RegisterScreen() {
  const {setUser} = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleSubmit = async (userInfo) => {
    const response = await usersApi.register(userInfo);

    if(!response.ok) {
      if(response.data) setError(response.data.error)
      else {
        setError('An unexpected error has occured.');
        console.log(response);
      }
      return;
    }

    const {data: authToken} = await authApi.signin(userInfo.email, userInfo.password);
    setUser(jwtDecode(authToken));
    console.log(jwtDecode(authToken));
    authStorage.storeToken(authToken);
  }

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={ handleSubmit }
        validationSchema={validationSchema}
      >
          <Image
            style={styles.logo}
            source={require('../assets/logo-primary.png')}
          />
          <ErrorMessage error={error} visible={error} />
           <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
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
            title='Register' 
          />
        
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  screen: {
    padding: 15,
    paddingTop: 0
  }
})