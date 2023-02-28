import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../store/context/auth-context';
import { createUser, login, logout } from '../../firebase';

export const useAuth = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password, username }) {
    setIsAuthenticating(true);

    try {
      const { user, token } = await createUser(email, password, username);
      authCtx.authenticate(token);
      authCtx.saveUserInfo({ email: user.email, name: user.displayName });
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      const { user, token } = await login(email, password);
      authCtx.authenticate(token);
      authCtx.saveUserInfo({ email: user.email, name: user.displayName });
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  async function logoutHandler() {
    try {
      await logout();
      authCtx.logout();
      authCtx.saveUserInfo({ email: '', name: '' });
    } catch (error) {
      Alert.alert(
        'Logout failed!',
        'Could not log you out. Please try again later!'
      );
    }
  }

  return {
    isAuthenticating,
    signupHandler,
    loginHandler,
    logoutHandler,
  };
};
