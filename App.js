import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainStack } from './src/routes/MainStack';
import { BottomTab } from './src/routes/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <BottomTab />
    </NavigationContainer>
  );
}
