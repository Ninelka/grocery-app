import { StatusBar } from 'react-native';
import AuthContextProvider from './src/store/context/auth-context';
import { Navigation } from './src/components/Navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/redux';
// prevent error "Unsupported top level event type "onGestureHandlerStateChange" dispatched"
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navigation />
            </PersistGate>
          </Provider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}
