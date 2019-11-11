import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components/Profile/Profile';
import { getUsers } from 'redux/actions/user';
import { userState } from 'redux/reducers/user';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';

interface LinkStateProps {
  state: userState;
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
// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
//   get: () => dispatch(getUsers),
//   // get: () => bindActionCreators(getUsers, dispatch),
// });
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  // get: () => dispatch(getUsers),
  // console.log(dispatch.toString());
  return {
    get: bindActionCreators(getUsers, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
