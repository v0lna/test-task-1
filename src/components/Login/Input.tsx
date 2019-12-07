import React from 'react';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  input: any;
  label: string;
  type: string;
  meta: { touched: boolean; error: string };
  required: boolean;
}

const CustomizedInputs: React.FC<InputProps> = ({
  input,
  label,
  type,
  meta: { touched, error },
  required,
}) => {
  let errorText = ' ';
  if (touched) {
    errorText = error ? error : ' ';
  } else {
    errorText = ' ';
  }
  return (
    <>
      <TextField
        {...input}
        required={required}
        label={label}
        type={type}
        error={error && touched}
        helperText={errorText}
        style={{ marginTop: '-10px', width: "150px" }}
      />
    </>
  );
};

export default CustomizedInputs;
