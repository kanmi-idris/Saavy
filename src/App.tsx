import React, {StrictMode} from 'react';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <StrictMode>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
    </StrictMode>
  );
}

export default App;
