import React from 'react';
import { UserProfile } from 'types/User';
import { LinkStatePropsProfile } from 'containers/ProfileContainer';


const wrapUser = (userObj: UserProfile): JSX.Element => {
  return (
    <>
      <h2>Sergio Lenc</h2>
      <img style={{ width: '250px', height: '250px' }} src={userObj.avatar} alt="user avatar" />
      <p>Sex: {userObj.sex}</p>
      <p>
        <a href={userObj.github_url}>Github url</a>
      </p>
    </>
  );
};
export const Profile: React.FC<LinkStatePropsProfile> = (props) => {
  const {
    user: { users, loading, error: profilEerror }  } = props;
  return (
    <div>
      {profilEerror ? <h2>Error </h2> : loading ? <h2>Loading...</h2> : null}
      {users.length > 0 && wrapUser(users[0])}
    </div>
  );
};
