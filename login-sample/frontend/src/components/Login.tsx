import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { AuthContext } from './Auth';
import login from '../apis/login';

const Login = () => {
  const [stateId, setStateId] = useState<string | null>(null);
  const [statePassword, setStatePassword] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const { changeLoginStatus } = useContext(AuthContext);

  const history = useHistory();
  
  const handleLogin = (id: string | null, password: string | null) => {
    if (typeof id === 'string' && typeof password === 'string') {
      login(id, password).then((value) => {
        if (value) {
          history.push('/mypage');
          changeLoginStatus(true);
          setMessage("")
        } else {
          setMessage("IDかパスワードが違います。")
        }
      });
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateId(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatePassword(e.target.value) 
  }

  return (
    <div>
      <label>
        ID
        <input type="text" name="id" onChange={(e) => handleIdChange(e)}/>
      </label>
      <label>
        パスワード
        <input type="password" name="password" onChange={(e) => handlePasswordChange(e)}/>
      </label>
      <input type="submit" value="ログイン" onClick={() => handleLogin(stateId, statePassword)}/>
      <p>{message}</p>
    </div>
  )
}

export default Login
