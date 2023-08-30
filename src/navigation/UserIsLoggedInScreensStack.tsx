import React from 'react';
import UserDashboardScreen from '@/screens/UserDashboardScreen';
import ExploreInvestmentsScreen from '@/screens/Investing/ExploreInvestmentsScreen';
import SaavyAIChatbotScreen from '@/screens/Learning/SaavyAI';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@/assets/Icons';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import AccountScreen from '@/screens/UserAccount/AccountScreen';

export type UserIsLoggedInStackParams = {
  UserDashboard?: undefined;
  InvestingStack?: undefined;
  LearningStack?: undefined;
  UserAccountStack?: undefined;
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
  createBottomTabNavigator<UserIsLoggedInStackParams>();

const UserIsLoggedInScreensStack = () => {
  const iconProps = {
    width: 32,
    height: 32,
    pathStrokeWidth: 1.7,
  };

  return (
    <UserIsLoggedInStack.Navigator
      initialRouteName="UserDashboard"
      // screenOptions={{headerShown: false}}
      screenOptions={({route}) => ({
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'UserDashboard') {
            iconName = focused ? 'home_2' : 'home';
          } else if (route.name === 'InvestingStack') {
            iconName = focused ? 'plusCircle_2' : 'plusCircle_1';
          } else if (route.name === 'LearningStack') {
            iconName = focused ? 'ai_icon_active' : 'ai_icon';
          } else {
            iconName = focused ? 'userActive' : 'user';
          }

          return <Icon name={iconName} {...iconProps} />;
        },
        tabBarActiveTintColor: colors.green_1,
        tabBarInactiveTintColor: colors.black_1,
        tabBarLabelStyle: {
          ...typography.semiBold.paragraphMid,
          paddingBottom: 8,
        },
        tabBarStyle: {
          height: 68,
          paddingTop: 8,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        },
      })}>
      <UserIsLoggedInStack.Screen
        name="UserDashboard"
        component={UserDashboardScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <UserIsLoggedInStack.Screen
        name="InvestingStack"
        component={ExploreInvestmentsScreen}
        options={{tabBarLabel: 'Invest'}}
      />
      <UserIsLoggedInStack.Screen
        name="LearningStack"
        component={SaavyAIChatbotScreen}
        options={{tabBarLabel: 'Learn'}}
      />
      <UserIsLoggedInStack.Screen
        name="UserAccountStack"
        component={AccountScreen}
        options={{tabBarLabel: 'Account'}}
      />
    </UserIsLoggedInStack.Navigator>
  );
};

export default UserIsLoggedInScreensStack;
