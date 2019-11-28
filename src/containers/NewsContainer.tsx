import React, { Component } from 'react';
import { connect } from 'react-redux';
import { News } from 'components/News/News';
import { getNews } from 'redux/actions/news';
import { newsState } from 'redux/reducers/news';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';

interface LinkStateProps {
  state: newsState;
}
interface LinkDispatchProps {
  get: () => void;
}
type Props = LinkStateProps & LinkDispatchProps;

class ProfileContainer extends Component<Props> {
  componentDidMount() {
    if (this.props.state.news.length === 0) {
      this.props.get();
    }
  }
  render() {
    const { state } = this.props;
    return (
      <div>
        <News state={state} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  state: state.news,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    get: bindActionCreators(getNews, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
