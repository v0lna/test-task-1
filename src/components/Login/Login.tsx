import React from 'react';
import LoginForm from './Form';
import { PropsLogin } from 'containers/LoginContainer';
import { reset } from 'redux-form';
import { Card, Typography, Container } from '@material-ui/core';

export const Login: React.FC<PropsLogin> = (props) => {
  const { authError, logIn, dispatch } = props;

  const formSubmit = (logData: any) => {
    logIn(logData);
    dispatch(reset('login'));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '45px' }}>
      <Card>
        <Typography
          style={{ marginTop: '10px' }}
          align="center"
          color="primary"
          variant="h3"
          component="h4"
        >
          Login form
        </Typography>
        {authError ? (
          <Typography align="center" color="error" variant="subtitle1" component="h5">
            {authError}
          </Typography>
        ) : null}
        <LoginForm onSubmit={formSubmit} />
      </Card>
    </Container>
  );
};
