import React from 'react';
import {
  FormHelperText,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const RadioButton = ({
  name,
  legend,
  options,
  ...rest
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = e => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configRadioButton = {
    ...field,
    ...rest,
      onChange: handleChange
  };

  const formControlConfig = {};
  if (meta && meta.touched && meta.error) {
    formControlConfig.error = true;
    
  }

  return (
    <FormControl {...formControlConfig}>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup {...configRadioButton} >
      {options.map(option => {
          return (
        <FormControlLabel 
        key={option.value}
            value = {option.value}
          control={<Radio  />}
          label={option.key}
        />

          )
      })}
      </RadioGroup>
      <FormHelperText>{meta.error}</FormHelperText>
    </FormControl>
  );
};

export default RadioButton;