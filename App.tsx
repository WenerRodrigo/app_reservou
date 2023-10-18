import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [FontsLoader] = useFonts([Roboto_400Regular, Roboto_700Bold]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {FontsLoader ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>

  );
}

