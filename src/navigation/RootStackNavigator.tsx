import {SignInScreen} from '@/screens/Onboarding/AuthScreens';
import {SplashScreen} from '@/screens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import UserIsLoggedInScreensStack, {
  UserIsLoggedInStackParams,
} from './UserIsLoggedInScreensStack';
import OnboardingNavigator, {
  OnboardingStackParams,
} from './OnboardingScreensStack';
import FeedbackScreen from '@/screens/FeedbackScreen';
import SecureInputScreen from '@/screens/SecureInputScreen';

export type RootStackParams = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  OnboardingStack: NavigatorScreenParams<OnboardingStackParams>;
  UserIsLoggedInStack: NavigatorScreenParams<UserIsLoggedInStackParams>;
  SecureInputScreen: {
    variant: 'OtpScreen' | 'PasswordInputScreen';
    heading: string;
    subheading: string;
    pageId: string;
  };
  FeedbackScreen: {
    heading: string;
    subheading: string;
    ButtonLabel: string;
    pageId: string;
    variant: 'successful' | 'failed';
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen
        name="OnboardingStack"
        component={OnboardingNavigator}
      />
      <RootStack.Screen
        name="UserIsLoggedInStack"
        component={UserIsLoggedInScreensStack}
      />
      <RootStack.Screen
        name="SecureInputScreen"
        component={SecureInputScreen}
      />
      <RootStack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
