import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppStore } from 'redux/configureStore';
import { ReactComponentLike } from 'prop-types';

interface LinkStateProps {
  authStatus: string | null;
}

interface PropsOuter {
  component: ReactComponentLike;
  path: string;
}
type Props = LinkStateProps & PropsOuter;

const PrivateRouter: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (rest.authStatus ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  authStatus: state.auth.userId,
});

export default connect(mapStateToProps)(PrivateRouter);
