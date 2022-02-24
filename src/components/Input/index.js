import { TextField } from "@material-ui/core";
import React from "react";
import { useField } from "formik";

export default function Input(props) {
  const { name, ...rest } = props;

  const [field, meta] = useField(name);

  const configInput = {
    ...field,
    ...rest,
    fullWidth: true,
    variant: "outlined",
    color: "secondary",
  };

  if (meta && meta.touched && meta.error) {
    configInput.error = true;
    configInput.helperText = meta.error;
  }

  return <TextField {...configInput} />;
}
