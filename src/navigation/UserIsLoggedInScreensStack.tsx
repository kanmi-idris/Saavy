import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDashboardScreen from '@/screens/UserDashboardScreen';
import ExploreInvestmentsScreen from '@/screens/Investing/ExploreInvestmentsScreen';
import SaavyAIChatbotScreen from '@/screens/Learning/SaavyAI';

export type UserIsLoggedInStackParams = {
  UserDashboard?: undefined;
  InvestingStack?: undefined;
  LearningStack?: undefined;
  // WelcomeScreen?: {
  //   PageTitle: string;
  //   IntroText: string;
  //   Image: ReactElement<any, any>;
  // };
  // KycScreen?: {
  //   PageTitle: string;
  //   IntroText: string;
  // };
};

const UserIsLoggedInStack =
  createNativeStackNavigator<UserIsLoggedInStackParams>();

const UserIsLoggedInScreensStack = () => {
  return (
    <UserIsLoggedInStack.Navigator
      initialRouteName="UserDashboard"
      screenOptions={{headerShown: false}}>
      <UserIsLoggedInStack.Screen
        name="UserDashboard"
        component={UserDashboardScreen}
      />
      <UserIsLoggedInStack.Screen
        name="InvestingStack"
        component={ExploreInvestmentsScreen}
      />
      <UserIsLoggedInStack.Screen
        name="LearningStack"
        component={SaavyAIChatbotScreen}
      />
      {/* <UserIsLoggedInStack.Screen
        name="UserAccountStack"
        component={KycScreens}
      /> */}
    </UserIsLoggedInStack.Navigator>
  );
};

export default UserIsLoggedInScreensStack;
