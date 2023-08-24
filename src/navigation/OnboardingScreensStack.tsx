import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import KycScreens from '@/screens/Onboarding/KycScreens';
import {SignUpScreen} from '@/screens/Onboarding/AuthScreens';
import WelcomeScreens from '@/screens/Onboarding/WelcomeScreens';
import SecureInputScreen from '@/screens/SecureInputScreen';
import SuccessScreen from '@/screens/SuccessScreen';

export type OnboardingStackParams = {
  SignUpScreen?: undefined;
  WelcomeScreen?: {
    PageTitle: string;
    IntroText: string;
    Image: ReactElement<any, any>;
  };
  KycScreen?: {
    PageTitle: string;
    IntroText: string;
  };
  EnterEmailVerificationCodeScreen?: {
    PageTitle: string;
    IntroText: string;
    InputFieldExtraInfo: string;
    ButtonLabel: string;
    ButtonExtraInfo: string;
  };
  EmailVerifiedScreen?: {
    PageTitle: string;
    IntroText: string;
    ButtonLabel: string;
  };
  CreatePasswordScreen?: {
    PageTitle: string;
    IntroText: string;
    ButtonLabel: string;
  };
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnboardingScreensStack = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen name="WelcomeScreen" component={WelcomeScreens} />
      <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <OnboardingStack.Screen
        name="EnterEmailVerificationCodeScreen"
        component={SecureInputScreen}
      />
      <OnboardingStack.Screen
        name="EmailVerifiedScreen"
        component={SuccessScreen}
      />
      <OnboardingStack.Screen
        name="CreatePasswordScreen"
        component={SecureInputScreen}
      />
      <OnboardingStack.Screen name="KycScreen" component={KycScreens} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingScreensStack;
