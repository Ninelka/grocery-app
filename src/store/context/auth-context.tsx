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
  isOnboardingDone: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
  saveUserInfo: ({ email, displayName }: User) => void;
  saveOnboardingMark: (onboardingMark: boolean) => void;
}

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  userInfo: { email: '', name: '' },
  isOnboardingDone: false,
  authenticate: (token) => {},
  logout: () => {},
  saveUserInfo: (user) => {},
  saveOnboardingMark: (onboardingMark) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState();
  const [isOnboardingShow, setIsOnboardingShow] = useState();
  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('isOnboardingShow');
  }

  function saveUserInfo(userInfo) {
    setUser(userInfo);
    AsyncStorage.setItem('user', JSON.stringify(userInfo));
  }

  function saveOnboardingMark(onboardingMark) {
    setIsOnboardingShow(onboardingMark);
    AsyncStorage.setItem('isOnboardingShow', String(onboardingMark));
  }

  const value: IAuthContext = {
    token: authToken,
    isAuthenticated: !!authToken,
    userInfo: user,
    isOnboardingDone: !!isOnboardingShow,
    authenticate: authenticate,
    logout: logout,
    saveUserInfo: saveUserInfo,
    saveOnboardingMark: saveOnboardingMark,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
