import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContext {
    token: string,
    isAuthenticated: boolean,
    authenticate: (token: string) => void,
    logout: () => void
}

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();
    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value: IAuthContext = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
