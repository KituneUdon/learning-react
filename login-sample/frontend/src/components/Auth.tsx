import React, { createContext, FC, useState } from 'react'

type defaultValueType = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>; 
}

const defautlValue: defaultValueType = {isLogin: false, setIsLogin: () => {}};
const AuthContext = createContext(defautlValue);

const AuthProvider: FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}
