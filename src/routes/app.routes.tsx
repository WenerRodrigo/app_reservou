
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { SignUp } from "../screens/SignUp";
import theme from "../theme";
import { View } from 'react-native';
import LogoutButton from "../components/LogoutButton";

const Drawer = createDrawerNavigator();

const customDrawerContent = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8 }}
        >
            <LogoutButton />
        </View>
    );
}


export const AppRoutes: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{
            title: "",
            headerStyle: {
                backgroundColor: theme.colors.yellow,
                height: 120
            }

        }}
            drawerContent={customDrawerContent}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Navigator>
    );
}