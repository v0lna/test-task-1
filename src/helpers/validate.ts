const validate = (values: any) => {
  console.log(values);
  const errors: any = {};
  console.log(errors);
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default validate;
