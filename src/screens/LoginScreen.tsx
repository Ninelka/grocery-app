import { Text, View } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { useAuth } from '../hooks/useAuth';

function LoginScreen() {
  const { isAuthenticating, loginHandler } = useAuth();

  if (isAuthenticating) {
    return (
      // TODO: Replace to Loader component
      <View>
        <Text>Logging you in...</Text>
      </View>
    );
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
