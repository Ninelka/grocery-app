import { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigation } from '../../types/stack-navigation';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import AuthForm from './AuthForm';
import { Button, Link } from '../UI';

interface IAuthContent {
  onAuthenticate: ({ email, password }) => Promise<void>;
  isLogin?: boolean;
}

export interface ICredentialsInvalid {
  email: boolean;
  password: boolean;
}

function AuthContent({ isLogin, onAuthenticate }: IAuthContent) {
  const navigation = useNavigation<StackNavigation>();

  const [credentialsInvalid, setCredentialsInvalid] =
    useState<ICredentialsInvalid>({
      email: false,
      password: false,
    });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('SignUp');
    } else {
      navigation.replace('Login');
    }
  }
  function submitHandler(credentials) {
    let { email, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.root}>
        <Text style={styles.title}>
          {isLogin ? 'Log In to Continue!' : 'Sign Up to Continue!'}
        </Text>
        {/* TODO: add auth with socials */}
        <View>
          <Button
            style={styles.socialBtn}
            isDisabled
            isCentered={false}
            size="large"
            shape="rounded"
          >
            {`${isLogin ? 'Login' : 'Sign Up'} with Facebook`}
          </Button>
          <Button
            style={styles.socialBtn}
            isDisabled
            isCentered={false}
            size="large"
            shape="rounded"
          >
            {`${isLogin ? 'Login' : 'Sign Up'} with Google`}
          </Button>
        </View>
        <View style={styles.divideContainer}>
          <View style={styles.line}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            {isLogin ? "Don't have an account?" : 'Have an account?'}
          </Text>
          <Link
            onPress={switchAuthModeHandler}
            textStyle={styles.switchLinkText}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.bgPrimary,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title1,
    marginBottom: GlobalStyles.spacing.m,
  },
  socialBtn: {
    marginVertical: 4,
  },
  divideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: GlobalStyles.spacing.m,
  },
  dividerText: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: GlobalStyles.fontSize.headline,
    color: COLORS.labelsSecondary,
    marginHorizontal: GlobalStyles.spacing.s,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.grey4,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  switchText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: GlobalStyles.fontSize.headline,
    color: COLORS.labelsPrimary,
  },
  switchLinkText: {
    marginLeft: 4,
  },
});
