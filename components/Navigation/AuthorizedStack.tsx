import { Stack } from "../../utils";
import BottomTabs from "./BottomTabs";

function AuthorizedStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
            />
        </Stack.Navigator>
    );
}

export default AuthorizedStack;
