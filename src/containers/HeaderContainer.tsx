import { connect } from 'react-redux';
import { Header } from 'components/Header/Header';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { logOut } from 'redux/actions/auth';
import { bindActionCreators } from 'redux';

interface LinkStateProps {
  userId: string | null;
}
interface LinkDispatchProps {
  logOut: () => void;
}
export type HeaderProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  logOut: bindActionCreators(logOut, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
