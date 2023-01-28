import { Stack } from '../../utils';
import { LoginScreen, SignUpScreen } from '../../screens';

function UnauthorizedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default UnauthorizedStack;
