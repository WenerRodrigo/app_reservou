
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { SignUp } from "../screens/SignUp";
import theme from "../theme";
import { View, Image } from 'react-native';
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

const customHeaderRight = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8 }}
        >
            <View 
                style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    width: 120
                }}>
                <Image
                    source={require('../../src/assets/image_header.png')}
                    style={{ width: 80, height: 50, right: 120}}
                    resizeMode='contain'
                />
                <Image
                    source={require('../../src/assets/Filtro.png')}
                    style={{ width: 30, height: 20, right: 11 }}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
}


export const AppRoutes: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: theme.colors.white,
                headerRight: customHeaderRight,
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