import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from 'containers/HeaderContainer';
import { AppBar, Button } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

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
          <span style={{ color: 'white' }}>Home </span>
          <HomeIcon style={{ color: 'white' }} />
        </Button>
      </Link>
      <Link to="/news">
        <Button color="secondary" variant="text">
          <span style={{ color: 'white' }}>News </span>
          <ListIcon style={{ color: 'white' }} />
        </Button>
      </Link>
      <Link to="/profile">
        <Button color="secondary" variant="text">
          <span style={{ color: 'white' }}>Profile </span>
          <PersonIcon style={{ color: 'white' }} />
        </Button>
      </Link>
      {userId && <Button onClick={logOut}>Log out</Button>}
    </AppBar>
  );
};
