import React from 'react';
import LoginForm from './Form';
import { Redirect } from 'react-router';

interface Props {}

export const Login: React.FC<Props> = () => {
  let authorize = localStorage.getItem('auth');

  const formSubmit = ({ username, password }: any) => {
    // console.log(logData)
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('auth', 'true');
      authorize = localStorage.getItem('auth');
    }
  };

  return (
    <div>
      <h3>Login form</h3>
      <LoginForm onSubmit={formSubmit} />
      {authorize === 'true' ? <Redirect to="/profile" /> : null}
      {/* <Redirect to="/profile"/> */}
    </div>
  );
};
