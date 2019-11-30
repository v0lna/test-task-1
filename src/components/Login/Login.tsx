import React from 'react';
import LoginForm from './Form';
import { PropsLogin } from 'containers/LoginContainer';

export const Login: React.FC<PropsLogin> = (props) => {
  const { authError, logIn } = props;

  const formSubmit = (logData: any) => {
    logIn(logData);
  };

  return (
    <div>
      <h3>Login form</h3>
      <LoginForm onSubmit={formSubmit} />
      {authError ? <h3>{authError}</h3> : null}
    </div>
  );
};
