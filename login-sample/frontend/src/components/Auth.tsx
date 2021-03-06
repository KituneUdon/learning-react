import React, { createContext, FC, useState } from 'react'

type defaultValueType = {
  isLogin: boolean;
  changeLoginStatus: (value: boolean) => void; 
}

const defautlValue: defaultValueType = {isLogin: false, changeLoginStatus: () => {}};
const AuthContext = createContext(defautlValue);

const AuthProvider: FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const changeLoginStatus = (value: boolean) => {
    setIsLogin(value);
  }

  return (
    <AuthContext.Provider value={{isLogin, changeLoginStatus}}>
      {children}
    </AuthContext.Provider>
  )
}


export {AuthProvider, AuthContext}
