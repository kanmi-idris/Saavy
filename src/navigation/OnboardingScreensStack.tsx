import {SignUpScreen} from '@/screens/Onboarding/AuthScreens';
import KycScreens from '@/screens/Onboarding/KycScreens';
import WelcomeScreen from '@/screens/Onboarding/WelcomeScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type OnboardingStackParams = {
  WelcomeScreen: undefined;
  SignUpScreen: undefined;
  KycScreen: {
    heading: string;
    subheading: string;
    pageId: string;
  };
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <OnboardingStack.Screen name="KycScreen" component={KycScreens} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
