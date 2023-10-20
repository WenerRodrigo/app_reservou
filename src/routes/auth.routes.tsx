import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const Stack = createStackNavigator();

export const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}