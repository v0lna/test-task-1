import React from 'react';

interface Props {}

export const Profile: React.FC<Props> = () => {
  return (
    <div>
      <h1>Sergio Lenc</h1>
      <img
        style={{ width: '250px', height: '250px' }}
        src="http://www.vokrugsveta.ru/img/bx/medialibrary/967/967bb606758586d2c562713f121d6f3b.jpg"
        alt="user avatar"
      />
      <p>Sex: male</p>
      <p>
        <a href="github.com/v0lna">Github url</a>
      </p>
    </div>
  );
};
