import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const RadioButton = ({ name, legend, options, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configRadioButton = {
    ...field,
    ...rest,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup {...configRadioButton}>
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.key}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
