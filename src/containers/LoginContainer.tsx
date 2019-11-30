import React from 'react';
import { connect } from 'react-redux';
import { AppStore } from 'redux/configureStore';
import { bindActionCreators } from 'redux';
import { setLogStatus } from 'redux/actions/auth';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { LogData } from 'helpers/authCheck';
import { Login } from 'components/Login/Login';
import { Redirect } from 'react-router';

interface LinkStateProps {
  authError: string | null | Error;
  userId?: null | string;
}

interface LinkDispatchProps {
  logIn: (id: LogData) => void;
}
export type PropsLogin = LinkStateProps & LinkDispatchProps;

const LoginContainer: React.FC<PropsLogin> = (props) => {
  const { authError, logIn, userId } = props;

  return userId === null ? (
    <Login authError={authError} logIn={logIn} />
  ) : (
    <Redirect to="/profile" />
  );
};

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  authError: state.auth.error,
  userId: state.auth.userId,
});
// console.log(setLogStatus)
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  logIn: bindActionCreators(setLogStatus, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
