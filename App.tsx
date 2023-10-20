import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  const [FontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        {FontsLoader ? <Routes /> : <Loading />}
      </ThemeProvider>
    </AuthProvider>
  );
}

