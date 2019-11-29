import React, { ReactElement, Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppStore } from 'redux/configureStore';

interface LinkStateProps {
  authStatus: string | null;
}

interface PropsOuter {
  component: ReactElement;
}
type Props = LinkStateProps & PropsOuter;
const PrivateRouter: React.FC<Props> = ({ component, ...rest }) => {
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

export default connect(mapStateToProps)(PrivateRouter);
