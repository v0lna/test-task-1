import React from 'react';
import LoginForm from './Form';

interface Props {}

export const Login: React.FC<Props> = () => {
  let authorize = localStorage.getItem('auth');
  console.log(authorize)
  const formSubmit = ({ username, password }: any) => {
    // console.log(logData)
    // if (username === 'admin' && password === '123456') {
    //   localStorage.setItem('auth', 'true');
    //   authorize = localStorage.getItem('auth');
    // }
  };

  return (
    <div>
      <h3>Login form</h3>
      <LoginForm onSubmit={formSubmit} />
      {/* <Redirect to="/profile"/> */}
    </div>
  );
};
