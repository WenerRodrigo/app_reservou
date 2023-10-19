
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { SignUp } from "../screens/SignUp";
import theme from "../theme";


const Drawer = createDrawerNavigator();


export const AppRoutes: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{
            title: "",
            headerStyle: {
                backgroundColor: theme.colors.yellow,
                height: 120
            }
        }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Navigator>
    );
}