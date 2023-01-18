import {StatusBar} from 'react-native';
import AuthContextProvider from "./store/context/auth-context";
import {Navigation} from "./components/Navigation";

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
