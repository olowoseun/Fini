import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...otherProps}) {
  const { errors, setFieldTouched, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={item => setFieldValue(name, item)}
        width={width}
        value={values[name]}
        {...otherProps}
      /> 
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
    
  )
}
