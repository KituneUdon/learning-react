import React, { FC, useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';

import Header from './Header';

type User = {
  name: string;
  screenName: string;
  twitterId: string;
  profileImageUrl: string;
}

type ResponseJsonType = {
  success: boolean;
  message: string;
  user: User;
  cookies: string;
}

const HomePage: FC = () => {
  const defaultUserValue = {
    name: "",
    screenName: "",
    twitterId: "",
    profileImageUrl: ""
  }
  const [user, setUser] = useState<User>(defaultUserValue);
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
      .then((responseJson: AxiosResponse<ResponseJsonType>) => {
        setAuthenticated(true);
        setUser(responseJson.data.user);
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
            <h2>Welcome {user.name}</h2>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default HomePage
