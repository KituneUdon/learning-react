import React, { FC, useState, useEffect } from 'react'
import axios from 'axios';

import Header from './Header';

const HomePage: FC = () => {
  const [user, setUser] = useState({});
  // eslint-disable-next-line
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated]  = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000/auth/login/success", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Controll-Allow-Credentials": true
      }
    })
      .then(response => {
        if(response.status === 200) return response;
        throw new Error("failed to authenticate user")
      })
      .then(responseJson => {
        setAuthenticated(true);
        setUser(responseJson);
      })
      .catch(error => {
        setAuthenticated(false);
        setError("Faild to authenticate user")
      });
  }, []);

  const _handleNotAutenticated = () => {
    setAuthenticated(false);
  };

  return (
    <div>
      <Header 
        authenticated = { authenticated }
        handleNotAuthenticated = {_handleNotAutenticated}
      />
      <div>
        {!authenticated ? (
          <h1>Welcome!</h1>
        ) : (
          <div>
            <h1>You have login successfully!</h1>
            <h2>Welcome {user}</h2>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default HomePage
