import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ icon, name, items, numberOfColumns, PickerItemComponent, placeholder, width}) {
  const { errors, selectedFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        icon={icon}
        onSelectItem={(item) => selectedFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
