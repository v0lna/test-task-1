import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: 'blue',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'blue',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'gray',
//       },
//       '&:hover fieldset': {
//         borderColor: 'blue',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'blue',
//       },
//     },
//   },
// })(TextField);

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
  return (
    <>
      <TextField
        {...input}
        required={required}
        label={label}
        type={type}
        error={error && touched}
        helperText={touched && error}
      />
    </>
  );
};

export default CustomizedInputs;
