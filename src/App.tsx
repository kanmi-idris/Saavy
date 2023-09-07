import React, {StrictMode} from 'react';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';

function App(): JSX.Element {
  const colorScheme = useColorScheme();
  return (
    <StrictMode>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
    </StrictMode>
  );
}

export default App;
