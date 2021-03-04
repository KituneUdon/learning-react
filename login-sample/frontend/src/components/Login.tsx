import React from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);

  return (
    <div>
      <label>
        ID
        <input type="text" name="id"/>
      </label>
      <label>
        パスワード
        <input type="password" name="password" />
      </label>
      <input type="submit" value="ログイン" onClick={() => handleLink('/mypage')}/>
    </div>
  )
}

export default Login
