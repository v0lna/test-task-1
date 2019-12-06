import React from 'react';
import LoginForm from './Form';
import { PropsLogin } from 'containers/LoginContainer';
import { reset } from 'redux-form';

export const Login: React.FC<PropsLogin> = (props) => {
  const { authError, logIn, dispatch} = props;

  const formSubmit = (logData: any) => {
    logIn(logData);
    dispatch(reset('login'))
  };

  return (
    <div>
      <h3>Login form</h3>
      {authError ? <h3>{authError}</h3> : null}
      <LoginForm onSubmit={formSubmit}/>
    </div>
  );
};
