import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import Login from './components/Login';
import Mypage from './components/Mypage';
import {AuthProvider} from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;
