/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SaavyAIChatbotScreen from '../SaavyAI';
import AllGuidesScreen from '../AllGuides';
import typography from '@/assets/Typography';
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import {View, Pressable, Text, StyleSheet, SafeAreaView} from 'react-native';

export type LearningStackParams = {
  SaavyAIChatbotScreen: undefined;
  AllGuidesScreen: undefined;
  SingleGuideScreen: {
    title: string;
    investmentType:
      | 'real estate'
      | 'mutual funds'
      | 'stocks'
      | 'startups'
      | 'savings lock';
  };
};

const Tab = createMaterialTopTabNavigator<LearningStackParams>();
const TopNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="SaavyAIChatbotScreen"
      // Render a custom tab bar component
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => (
        <SafeAreaView style={styles.container}>
          {/* back icon at the left of the tab bar */}
          <Pressable onPress={() => props.navigation.goBack()}>
            <Icon name="chevronLeft" />
          </Pressable>
          {/* Render the Saavy AI and Guides tabs in the middle of the tab bar */}
          <View style={styles.tabs}>
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
                      color: isFocused ? colors.black_1 : colors.black_6,
                      ...typography.semiBold.paragraphNormal,
                    }}>
                    {route.name === 'SaavyAIChatbotScreen'
                      ? 'Saavy AI'
                      : route.name === 'AllGuidesScreen'
                      ? 'Guides'
                      : ''}
                  </Text>
                  {/* Render a custom indicator for the active tab */}
                  {isFocused ? <View style={styles.indicator} /> : null}
                </Pressable>
              );
            })}
          </View>
          {/* menu icon at the right of the tab bar */}
          <Pressable onPress={() => {}}>
            <Icon name="menu" />
          </Pressable>
        </SafeAreaView>
      )}>
      <Tab.Screen
        name="SaavyAIChatbotScreen"
        component={SaavyAIChatbotScreen}
        options={{tabBarLabel: 'Saavy AI'}}
      />
      <Tab.Screen
        name="AllGuidesScreen"
        component={AllGuidesScreen}
        options={{tabBarLabel: 'Guides'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.green_9,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  backButton: {paddingHorizontal: 8},
  tabs: {
    flexDirection: 'row',
    gap: 16,
  },
  indicator: {
    backgroundColor: colors.black_1,
    height: 1.2,
    width: '100%',
  },
});

export default TopNavigator;
