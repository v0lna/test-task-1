import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
