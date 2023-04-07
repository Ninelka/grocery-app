import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../store/context/auth-context';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnauthorizedStack from './UnauthorizedStack';
import AuthorizedStack from './AuthorizedStack';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export function Navigation() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    'nunito-bold': require('../../../assets/fonts/Nunito-Bold.ttf'),
    'nunito-bold-italic': require('../../../assets/fonts/Nunito-BoldItalic.ttf'),
    'nunito-semibold': require('../../../assets/fonts/Nunito-SemiBold.ttf'),
    'nunito-semibold-italic': require('../../../assets/fonts/Nunito-SemiBoldItalic.ttf'),
    'nunito-regular': require('../../../assets/fonts/Nunito-Regular.ttf'),
    'nunito-italic': require('../../../assets/fonts/Nunito-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (!isTryingLogin) {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isTryingLogin, fontsLoaded]);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      const storedOnboardingMark = await AsyncStorage.getItem(
        'isOnboardingShow'
      );

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      if (storedUser) {
        authCtx.saveUserInfo(JSON.parse(storedUser));
      }

      if (storedOnboardingMark) {
        authCtx.saveOnboardingMark(storedOnboardingMark);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {authCtx.isAuthenticated && <AuthorizedStack />}
      {!authCtx.isAuthenticated && <UnauthorizedStack />}
    </NavigationContainer>
  );
}
