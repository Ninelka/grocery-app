import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/compat';
import User = firebase.User;

interface IUser {
  email: string;
  name: string;
}

interface IAuthContext {
  token: string;
  isAuthenticated: boolean;
  userInfo: IUser;
  authenticate: (token: string) => void;
  logout: () => void;
  saveUserInfo: ({ email, displayName }: User) => void;
}

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  userInfo: { email: '', name: '' },
  authenticate: (token) => {},
  logout: () => {},
  saveUserInfo: (user) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState();
  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  function saveUserInfo(userInfo) {
    setUser(userInfo);
  }

  const value: IAuthContext = {
    token: authToken,
    isAuthenticated: !!authToken,
    userInfo: user,
    authenticate: authenticate,
    logout: logout,
    saveUserInfo: saveUserInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
