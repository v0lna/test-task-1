import React from 'react';

interface Props {}

export const Login: React.FC<Props> = () => {
  return (
    <div>
      <h3>Login form</h3>
      <form action="">
        <div>
          <label htmlFor="usrname">Your username</label>
          <input type="text" id="usrname" />
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input type="text" id="password" />
        </div>
      </form>
    </div>
  );
};
