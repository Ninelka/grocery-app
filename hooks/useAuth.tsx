import {useContext, useState} from "react";
import {Alert} from "react-native";
import {AuthContext} from "../store/context/auth-context";
import {createUser, login, logout} from "../firebaseConfig";

export const useAuth = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    async function signupHandler({email, password}) {
        setIsAuthenticating(true);

        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed',
                'Could not create user, please check your input and try again later.'
            )
            setIsAuthenticating(false);
        }
    }

    async function loginHandler({email, password}) {
        setIsAuthenticating(true);

        try {
            const token = await login(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            )
            setIsAuthenticating(false);
        }
    }

    async function logoutHandler() {
        try {
            await logout();
            authCtx.logout();
        } catch (error) {
            Alert.alert(
                'Logout failed!',
                'Could not log you out. Please try again later!'
            )
        }
    }

    return {
        isAuthenticating,
        signupHandler,
        loginHandler,
        logoutHandler
    }
}
