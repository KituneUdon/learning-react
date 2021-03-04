import React from 'react';
import { Switch, Route } from 'react-router'
import './App.css';

import Login from './components/Login';
import Mypage from './components/Mypage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/mypage">
        <Mypage />
      </Route>
    </Switch>
  );
}

export default App;
