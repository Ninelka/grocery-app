import { StatusBar } from 'react-native';
import AuthContextProvider from './src/store/context/auth-context';
import { Navigation } from './src/components/Navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}
