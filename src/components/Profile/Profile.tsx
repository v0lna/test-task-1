import React from 'react';
import { UserProfile } from 'types/User';
import { UserState } from 'redux/reducers/user';
import { Container, Card, Typography, Avatar, Link } from '@material-ui/core';

interface LinkStatePropsProfile {
  user: UserState;
}
const wrapUser = (userObj: UserProfile): JSX.Element => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '25px' }}>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Typography align="center" variant="h3" component="p">
            {userObj.name}
          </Typography>
          <Avatar
            style={{ width: '120px', height: '120px', objectFit: 'cover', display: 'inline-block' }}
            src={userObj.avatar}
            alt="user avatar"
          />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            margin: '10px auto',
            width: '265px',
          }}
        >
          <Typography align="center" variant="h4" component="span">
            Age:
          </Typography>
          <Typography align="center" variant="h4" component="span">
            {userObj.age}
          </Typography>
          <Typography align="center" variant="h4" component="span">
            Sex:
          </Typography>
          <Typography align="center" variant="h4" component="span">
            {userObj.sex}
          </Typography>
        </div>
        <Typography align="center" variant="h4" component="p">
          <Link href={userObj.github_url}>Github url</Link>
        </Typography>
      </Card>
    </Container>
  );
};
export const Profile: React.FC<LinkStatePropsProfile> = (props) => {
  const {
    user: { user, loading, error: profilEerror },
  } = props;
  return (
    <div>
      {profilEerror ? (
        <Typography color="error" align="center" variant="h5">
          Error{' '}
        </Typography>
      ) : loading ? (
        <Typography color="primary" align="center" variant="h5">
          Loading...
        </Typography>
      ) : null}
      {user && wrapUser(user)}
    </div>
  );
};
