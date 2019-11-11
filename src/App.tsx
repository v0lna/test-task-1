import React from 'react';
import './App.css';
import { Header } from 'components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home/Home';
import { News } from 'components/News/News';
import ProfileContainer from 'containers/ProfileContainer';
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/profile" component={ProfileContainer} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
