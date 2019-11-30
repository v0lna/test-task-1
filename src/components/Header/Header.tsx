import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from 'containers/HeaderContainer';



export const Header: React.FC<HeaderProps> = (props) => {

  const {logOut, userId} = props

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
      {userId && <button onClick={logOut}>Log out</button>}
    </div>
  );
};
