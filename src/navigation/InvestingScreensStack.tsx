import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import KycScreens from '@/screens/Onboarding/KycScreens';
import {SignUpScreen} from '@/screens/Onboarding/AuthScreens';
import WelcomeScreens from '@/screens/Onboarding/WelcomeScreens';
import SecureInputScreen from '@/screens/SecureInputScreen';
import SuccessScreen from '@/screens/SuccessScreen';

export type InvestingStackParams = {
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

const InvestingStack = createNativeStackNavigator<InvestingStackParams>();

const InvestingScreensStack = () => {
  return (
    <InvestingStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <InvestingStack.Screen name="WelcomeScreen" component={WelcomeScreens} />
      <InvestingStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <InvestingStack.Screen
        name="EnterEmailVerificationCodeScreen"
        component={SecureInputScreen}
      />
      <InvestingStack.Screen
        name="EmailVerifiedScreen"
        component={SuccessScreen}
      />
      <InvestingStack.Screen
        name="CreatePasswordScreen"
        component={SecureInputScreen}
      />
      <InvestingStack.Screen name="KycScreen" component={KycScreens} />
    </InvestingStack.Navigator>
  );
};

export default InvestingScreensStack;
