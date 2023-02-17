import { StatusBar } from 'react-native';
import AuthContextProvider from './src/store/context/auth-context';
import { Navigation } from './src/components/Navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { setupStore } from './src/store/redux';
// prevent error "Unsupported top level event type "onGestureHandlerStateChange" dispatched"
import 'react-native-gesture-handler';

const queryClient = new QueryClient();

const store = setupStore();

export default function App() {
  return (
    <>
      <StatusBar />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}
