import React from 'react';
import { Login } from 'components/Login/Login';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h1>Hello, User !</h1>
      <h2>It's Home page of application</h2>
      <Login />
    </div>
  );
};

export default Home;
