import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import validate from 'helpers/validate';
import CustomizedInputs from './Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { CardContent, List, ListItem, Button } from '@material-ui/core';

const Form: React.FC<InjectedFormProps> = (props) => {
  const { handleSubmit, invalid,} = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <form onSubmit={handleSubmit} style={{ margin: '0 auto', width: '200px' }}>
          <CardContent>
            <List>
              <ListItem>
                <Field
                  component={CustomizedInputs}
                  name="username"
                  type="text"
                  label="Your username"
                  required={true}
                />
              </ListItem>
              <ListItem>
                <Field
                  component={CustomizedInputs}
                  name="password"
                  type="password"
                  label="Your password"
                  required={true}
                />
              </ListItem>
              <div style={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" disabled={invalid}>
                  Submit
                </Button>
              </div>
            </List>
          </CardContent>
        </form>
      </Container>
    </>
  );
};
const LoginForm = reduxForm({ form: 'login', validate })(Form);
export default LoginForm;
