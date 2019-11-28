import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

const Form: React.FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="input" name="username" type="text" placeholder="Your username" />
      </div>
      <div>
        <Field component="input" name="password" type="password" placeholder="Your password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginForm = reduxForm({ form: 'login' })(Form);
export default LoginForm;
