import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home/Home';
import ProfileContainer from 'containers/ProfileContainer';
import NewsContainer from 'containers/NewsContainer';
import PrivateRouter from 'containers/PrivateRouter';
import LoginContainer from 'containers/LoginContainer';
import HeaderContainer from 'containers/HeaderContainer';
const App: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={NewsContainer} />
        <PrivateRouter path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
