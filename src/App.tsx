import React, {StrictMode} from 'react';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {InvestmentProvider} from './lib/components/InvestmentSuitesScroll';

function App(): JSX.Element {
  return (
    <InvestmentProvider>
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
    </InvestmentProvider>
  );
}

export default App;
