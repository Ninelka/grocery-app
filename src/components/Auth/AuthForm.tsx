import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import { GlobalStyles } from '../../constants';
import { ICredentialsInvalid } from './AuthContent';
import { Button, Input, Link } from '../UI';

export interface ICredentials {
  email: string;
  password: string;
  username?: string;
}

interface IAuthForm {
  isLogin: boolean;
  onSubmit: (credentials: ICredentials) => void;
  credentialsInvalid: ICredentialsInvalid;
}

function AuthForm({ isLogin, onSubmit, credentialsInvalid }: IAuthForm) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const { email: emailIsInvalid, password: passwordIsInvalid } =
    credentialsInvalid;
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'username':
        setEnteredUsername(enteredValue);
        break;
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }
  function submitHandler() {
    onSubmit({
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View style={styles.root}>
      {!isLogin && (
        <Input
          placeholder="Your Name"
          onUpdateValue={updateInputValueHandler.bind(this, 'username')}
          value={enteredUsername}
        />
      )}
      <Input
        placeholder="Email Address"
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        value={enteredEmail}
        keyboardType="email-address"
        invalid={!!emailIsInvalid}
      />
      <Input
        placeholder="Password"
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        secureText={passwordVisibility}
        iconRight={rightIcon}
        iconRightPress={handlePasswordVisibility}
        value={enteredPassword}
        invalid={!!passwordIsInvalid}
      />
      {isLogin && (
        // TODO: implement sendPasswordResetEmail and show message about it
        <View style={styles.forgotPassword}>
          <Link>Forgot Password?</Link>
        </View>
      )}
      <View style={styles.action}>
        <Button size="large" shape="rounded" onPress={submitHandler}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  action: {
    marginTop: GlobalStyles.spacing.m,
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: GlobalStyles.spacing.s,
  },
});
