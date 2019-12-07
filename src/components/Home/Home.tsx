import React from 'react';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello, User !</h1>
      <h2>It's Home page of application</h2>
    </div>
  );
};

export default Home;
