import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/useAuth'

export const Routes = () => {
    const { signed } = useAuth();

    return (
        <NavigationContainer>
            {signed ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}