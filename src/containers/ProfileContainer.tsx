import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components/Profile/Profile';
import { getUsers } from 'redux/actions/user';
import { UserState } from 'redux/reducers/user';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

interface LinkStateProps {
  state: UserState;
}
interface LinkDispatchProps {
  get: () => void;
}
type Props = LinkStateProps & LinkDispatchProps;

class ProfileContainer extends Component<Props> {
  componentDidMount() {
    if (this.props.state.users.length === 0) {
      this.props.get();
    }
  }
  render() {
    const authorize = localStorage.getItem("auth");
    if (authorize !== "true") {
      return <Redirect to="/login"/>
    }
    const { state } = this.props;
    return (
      <div>
        <Profile state={state} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  state: state.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    get: bindActionCreators(getUsers, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
