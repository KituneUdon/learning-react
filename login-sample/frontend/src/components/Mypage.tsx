import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import mypage from '../apis/mypage';
import logout from '../apis/logout';
import { AuthContext } from './Auth';

const Mypage = () => {
  const [text, setText] = useState("");
  const { setIsLogin } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    mypage().then((res) => setText(res));
  }, [setText])

  const handleLogout = () => {
    logout().then((value) => {
      if (value) {
        setIsLogin(false);
        history.push("/");
      }
    })
  }

  return (
    <>
      <p>{text}</p>
      <button onClick={handleLogout}>ログアウト</button>
    </>
  )
}

export default Mypage
