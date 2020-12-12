import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'
import { StyleSheet } from 'react-native'


export default FormPicker = ({ items, name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        selectedValue={values[name]}
        onValueChange={(itemValue, itemIndex) => setFieldValue(name, itemValue)}
        style={styles.picker}
      >
        { items.map(item => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: '100%'
  }
})