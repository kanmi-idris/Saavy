import FeedbackScreen from '@/screens/FeedbackScreen';
import EnterInvestmentAmountScreen from '@/screens/Investing/EnterInvestmentAmountScreen';
import ExploreInvestmentsScreen from '@/screens/Investing/ExploreInvestmentsScreen';
import InvestmentSummaryScreen from '@/screens/Investing/InvestmentSummaryScreen';
import InvestmentDetailScreensNavigator from '@/screens/Investing/navigation/InvestmentDetailScreensNavigator';
import SecureInputScreen from '@/screens/SecureInputScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type InvestingStackParams = {
  ExploreInvestmentsScreen: undefined;
  InvestmentDetailScreen: {
    InvestmentName: string;
  };
  EnterInvestmentAmountScreen: {
    MinimumInvestmentAmount: number;
  };
  InvestmentSummaryScreen: {
    InvestmentName: string;
    AmountInvested: number;
  };
  EnterUserPasswordScreen: {
    AmountInvested: number;
  };
  PaymentSuccessfulScreen: {
    AmountInvested: number;
  };
};

const InvestingStack = createNativeStackNavigator<InvestingStackParams>();

const InvestingScreensStack = () => {
  return (
    <InvestingStack.Navigator
      initialRouteName="ExploreInvestmentsScreen"
      screenOptions={{headerShown: false}}>
      <InvestingStack.Screen
        name="ExploreInvestmentsScreen"
        component={ExploreInvestmentsScreen}
      />
      <InvestingStack.Screen
        name="InvestmentDetailScreen"
        component={InvestmentDetailScreensNavigator}
      />
      <InvestingStack.Screen
        name="EnterInvestmentAmountScreen"
        component={EnterInvestmentAmountScreen}
      />
      <InvestingStack.Screen
        name="InvestmentSummaryScreen"
        component={InvestmentSummaryScreen}
      />
      <InvestingStack.Screen
        name="EnterUserPasswordScreen"
        component={SecureInputScreen}
      />
      <InvestingStack.Screen
        name="PaymentSuccessfulScreen"
        component={FeedbackScreen}
      />
    </InvestingStack.Navigator>
  );
};

export default InvestingScreensStack;
