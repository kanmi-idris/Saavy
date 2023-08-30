import React, {StrictMode} from 'react';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import colors from './assets/Colors';

function App(): JSX.Element {
  return (
    <StrictMode>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      <StatusBar backgroundColor={colors.activeBtn} />
    </StrictMode>
  );
}

export default App;
