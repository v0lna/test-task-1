import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from 'containers/HeaderContainer';
import { AppBar, Button } from '@material-ui/core';

export const Header: React.FC<HeaderProps> = (props) => {
  const { logOut, userId } = props;

  return (
    <AppBar
      style={{
        flexDirection: 'row',
        gap: '10px',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'sticky',
      }}
    >
      <Link to="/">
        <Button color="secondary" variant="text">
          <span style={{ color: 'white' }}>Home</span>
        </Button>
      </Link>
      <Link to="/news">
        <Button color="secondary" variant="text">
          <span style={{ color: 'white' }}>News</span>
        </Button>
      </Link>
      <Link to="/profile">
        <Button color="secondary" variant="text">
          <span style={{ color: 'white' }}>Profile</span>
        </Button>
      </Link>
      {userId && <Button onClick={logOut}>Log out</Button>}
    </AppBar>
  );
};
