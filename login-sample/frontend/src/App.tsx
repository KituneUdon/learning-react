import React, { useContext } from 'react';
import { Switch, Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Mypage from './components/Mypage';
import {AuthProvider, AuthContext} from './components/Auth';

function App() {
  const { isLogin } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/mypage">
          {isLogin ? <Mypage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;
