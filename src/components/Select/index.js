import { MenuItem, TextField } from "@material-ui/core";
import React from "react";
import { useField, useFormikContext } from "formik";

export default function Select({ name, options, ...rest }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...rest,
    select: true,
    variant: "outlined",
    fullWidth: true,
    color: "secondary",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {options.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.key}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
