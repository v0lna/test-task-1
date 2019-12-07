import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components/Profile/Profile';
import { getUsers } from 'redux/actions/user';
import { UserState } from 'redux/reducers/user';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';

export interface LinkStatePropsProfile {
  user: UserState;
  authId: string | null
}
interface LinkDispatchProps {
  get: () => void;
}
type Props = LinkStatePropsProfile & LinkDispatchProps;

class ProfileContainer extends Component<Props> {
  componentDidMount() {
    console.log(this.props.user);

    if (!this.props.user.user) this.props.get();
    else {
      if(this.props.user.user.id !== this.props.authId) {
        this.props.get()
      }
    }
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Profile user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore): LinkStatePropsProfile => ({
  user: state.user,
  authId: state.auth.userId
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
