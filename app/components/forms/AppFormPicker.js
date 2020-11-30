import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ icon, name, items, numberOfColumns, PickerItemComponent, placeholder, width}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        icon={icon}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
