import { Text, View } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { useAuth } from '../hooks/useAuth';

function SignUpScreen() {
  const { isAuthenticating, signupHandler } = useAuth();

  if (isAuthenticating) {
    return (
      // TODO: Replace to Loader component
      <View>
        <Text>Creating user...</Text>
      </View>
    );
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignUpScreen;
