import React from 'react';
import { UserProfile } from 'types/User';
import { UserState } from 'redux/reducers/user';

interface LinkStatePropsProfile {
  user: UserState;
}
const wrapUser = (userObj: UserProfile): JSX.Element => {
  return (
    <>
      <h2>{userObj.name}</h2>
      <img style={{ width: '250px', height: '250px' }} src={userObj.avatar} alt="user avatar" />
      <p>Age: {userObj.age}</p>
      <p>Sex: {userObj.sex}</p>
      <p>
        <a href={userObj.github_url}>Github url</a>
      </p>
    </>
  );
};
export const Profile: React.FC<LinkStatePropsProfile> = (props) => {
  const {
    user: { user, loading, error: profilEerror },
  } = props;
  return (
    <div>
      {profilEerror ? <h2>Error </h2> : loading ? <h2>Loading...</h2> : null}
      {user && wrapUser(user)}
    </div>
  );
};
