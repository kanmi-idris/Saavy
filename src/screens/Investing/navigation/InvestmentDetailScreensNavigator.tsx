/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
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

// dummy APIs
import stocks_api from '@/screens/Investing/api/dummyDB/details/about/Stocks.json';
import startups_api from '@/screens/Investing/api/dummyDB/details/about/startups.json';
import savings_lock_api from '@/screens/Investing/api/dummyDB/details/about/Savings-lock.json';
import real_estate_api from '@/screens/Investing/api/dummyDB/details/about/Real_Estate.json';
import mutual_funds_api from '@/screens/Investing/api/dummyDB/details/about/Mutual_Funds.json';
import {InvestmentContext} from '@/lib/components/InvestmentSuitesScroll';
import {findById} from '../utils/utils';

export type InvestmentDetailParams = {
  About: {
    contentId: string;
  };
  Financials: {
    contentId: string;
  };
  News: {
    contentId: string;
  };
};

interface InvestmentAPIs {
  [key: string]: any[];
}
export const AboutInvestmentAPIs: InvestmentAPIs = {
  realEstate: real_estate_api.real_estate,
  stocks: stocks_api.stocks,
  savingsLock: savings_lock_api.savings_lock,
  startups: startups_api.startups,
  mutualFunds: mutual_funds_api.funds,
};

const Tab = createMaterialTopTabNavigator<InvestmentDetailParams>();
const InvestmentDetailScreensNavigator = () => {
  const PageRoute =
    useRoute<RouteProp<InvestingStackParams, 'InvestmentDetailScreen'>>();
  const InvestmentID: string = PageRoute.params.InvestmentId;
  const {chosenInvestment} = useContext(InvestmentContext);

  let API = AboutInvestmentAPIs[chosenInvestment];
  const content = API.find(findById(InvestmentID));

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
              {chosenInvestment === 'savingsLock' ||
              chosenInvestment === 'startups' ||
              chosenInvestment === 'realEstate'
                ? content.name
                : content.symbol}
            </Text>

            <Pressable onPress={() => {}}>
              <Icon name="share" />
            </Pressable>
          </View>
          <View style={styles.navItems}>
            {props.state.routes.map((route, index) => {
              const isFocused = props.state.index === index;
              const onPress = () => {
                props.navigation.navigate(route.name, {
                  contentId: InvestmentID,
                });
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
        initialParams={{contentId: InvestmentID}}
      />
      <Tab.Screen
        name="Financials"
        component={Financials}
        options={{tabBarLabel: 'Financials'}}
        initialParams={{contentId: InvestmentID}}
      />
      <Tab.Screen
        name="News"
        component={InvestmentNews}
        options={{tabBarLabel: 'News'}}
        initialParams={{contentId: InvestmentID}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    gap: 20,
    paddingTop: 8,
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
    paddingHorizontal: 12,
  },
  indicator: {
    backgroundColor: colors.green_1,
    height: 1.2,
    width: '100%',
  },
});

export default InvestmentDetailScreensNavigator;
