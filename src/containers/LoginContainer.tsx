import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppStore } from 'redux/configureStore';
import { bindActionCreators } from 'redux';
import { setLogStatus } from 'redux/actions/auth';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { LogData } from 'helpers/authCheck';

interface LinkStateProps {
  authStatus: string | null;
}

interface LinkDispatchProps {
  logIn: (id: LogData) => void;
}
type Props = LinkStateProps & LinkDispatchProps;
const LoginContainer: React.FC<Props> = ({ ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (rest.authStatus ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  authStatus: state.auth.userId,
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  logIn: bindActionCreators(setLogStatus, dispatch),
});

export default connect(mapStateToProps)(LoginContainer);
