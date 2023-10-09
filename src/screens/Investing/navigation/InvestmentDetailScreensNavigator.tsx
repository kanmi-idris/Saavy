/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import typography from '@/assets/Typography';
import colors from '@/assets/Colors';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import AboutInvestment from '../AboutInvestment';
import Financials from '../Financials';
import InvestmentNews from '../News';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InvestingStackParams} from '@/navigation/InvestingScreensStack';
import Icon from '@/assets/Icons';
import fonts from '@/assets/Fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

export type InvestmentDetailParams = {
  About: {
    investmentName: string;
  };
  Financials: undefined;
  News: undefined;
};

const Tab = createMaterialTopTabNavigator<InvestmentDetailParams>();
const InvestmentDetailScreensNavigator = () => {
  const PageRoute =
    useRoute<RouteProp<InvestingStackParams, 'InvestmentDetailScreen'>>();

  return (
    <Tab.Navigator
      initialRouteName="About"
      // Render a custom tab bar component
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => (
        <SafeAreaView style={styles.container} edges={['top']}>
          <View style={styles.topBar}>
            {/* back icon at the left of the tab bar */}
            <Pressable onPress={() => props.navigation.goBack()}>
              <Icon name="chevronLeft" />
            </Pressable>

            <Text
              style={{
                ...typography.underline.paragraphNormal,
                fontFamily: fonts.semiBold600,
                color: colors.black_1,
                textTransform: 'uppercase',
              }}>
              {PageRoute.params.InvestmentName}
            </Text>

            <Pressable onPress={() => {}}>
              <Icon name="share" />
            </Pressable>
          </View>
          <View style={styles.navItems}>
            {props.state.routes.map((route, index) => {
              const isFocused = props.state.index === index;
              const onPress = () => {
                props.navigation.navigate(route.name);
              };
              return (
                <Pressable
                  key={index}
                  style={{alignItems: 'center'}}
                  onPress={onPress}>
                  <Text
                    style={{
                      color: isFocused ? colors.green_1 : colors.black_1,
                      ...typography.medium.paragraphMid,
                    }}>
                    {route.name === 'About'
                      ? 'About'
                      : route.name === 'Financials'
                      ? 'Financials'
                      : 'News'}
                  </Text>
                  {/* Render a custom indicator for the active tab */}
                  {isFocused ? <View style={styles.indicator} /> : null}
                </Pressable>
              );
            })}
          </View>
        </SafeAreaView>
      )}>
      <Tab.Screen
        name="About"
        component={AboutInvestment}
        options={{tabBarLabel: 'About'}}
      />
      <Tab.Screen
        name="Financials"
        component={Financials}
        options={{tabBarLabel: 'Financials'}}
      />
      <Tab.Screen
        name="News"
        component={InvestmentNews}
        options={{tabBarLabel: 'News'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    gap: 20,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  indicator: {
    backgroundColor: colors.green_1,
    height: 1.2,
    width: '100%',
  },
});

export default InvestmentDetailScreensNavigator;
