import React from 'react';
import './App.css';
import { Header } from 'components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home/Home';
import ProfileContainer from 'containers/ProfileContainer';
import NewsContainer from 'containers/NewsContainer';
import { Login } from 'components/Login/Login';
import PrivateRouter from 'containers/PrivateRouter';
const App: React.FC = () => {
  // const authorize = localStorage.getItem("auth")
  localStorage.removeItem('auth');
  // if (!authorize) {
  //   localStorage.setItem("auth", "true")
  // }

  // console.log(authorize)
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={NewsContainer} />
        <PrivateRouter path="/profile" component={ProfileContainer} />
        {/* <Route path="/profile" component={ProfileContainer} /> */}
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
