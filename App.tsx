import { StatusBar } from 'react-native';
import AuthContextProvider from './src/store/context/auth-context';
import { Navigation } from './src/components/Navigation';

export default function App() {
  return (
    <>
      <StatusBar />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
