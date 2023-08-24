import {SignInScreen} from '@/screens/Onboarding/AuthScreens';
import {SplashScreen} from '@/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreensStack, {
  OnboardingStackParams,
} from './OnboardingScreensStack';
import UserIsLoggedInScreensStack, {
  UserIsLoggedInStackParams,
} from './UserIsLoggedInScreensStack';

export type RootStackParams = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  OnboardingStack: OnboardingStackParams;
  UserIsLoggedInStack: UserIsLoggedInStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingScreensStack}
        />
        <RootStack.Screen
          name="UserIsLoggedInStack"
          component={UserIsLoggedInScreensStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
