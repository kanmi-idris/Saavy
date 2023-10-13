/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SaavyAIChatbotScreen from '../SaavyAI';
import AllGuidesScreen from '../AllGuides';
import typography from '@/assets/Typography';
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import {View, Pressable, Text, StyleSheet, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
const LearningScreensNavigator = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const toggleModal = () => setModalIsVisible(!modalIsVisible);

  return (
    <Tab.Navigator
      initialRouteName="SaavyAIChatbotScreen"
      // Render a custom tab bar component
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => (
        <SafeAreaView edges={['top']} style={styles.container}>
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
          <Pressable onPress={toggleModal}>
            <Icon name="menu" />
          </Pressable>
          {/* Modal Component */}
          <Modal
            onRequestClose={toggleModal}
            visible={modalIsVisible}
            animationType="none"
            transparent={true}>
            <Pressable onPress={toggleModal} style={styles.modalBackground}>
              <Menu />
            </Pressable>
          </Modal>
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

const Menu = () => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => setPressed(!pressed);

  return (
    <View style={styles.menu}>
      <View style={{gap: 16}}>
        <Pressable
          onPress={handlePress}
          style={[
            styles.btn,
            {backgroundColor: pressed ? colors.black_6 : colors.white},
          ]}>
          <Icon name="plus" />
          <Text
            style={[
              styles.text,
              {color: pressed ? colors.white : colors.black_1},
            ]}>
            New Chat
          </Text>
        </Pressable>
        <View style={{gap: 12}}>
          <Pressable style={styles.row}>
            <Icon name="square-message" />
            <Text style={[styles.text]}>What are mutual Funds</Text>
          </Pressable>
          <Pressable style={styles.row}>
            <Icon name="square-message" />
            <Text style={[styles.text]}>
              Why should I invest in tesla stocks
            </Text>
          </Pressable>
          <Pressable style={styles.row}>
            <Icon name="square-message" />
            <Text style={[styles.text]}>
              This startups invest that you have, how does it work
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{gap: 12}}>
        <Pressable style={styles.row}>
          <Icon name="trash" />
          <Text style={[styles.text]}>Clear Conversations</Text>
        </Pressable>
        <Pressable style={styles.row}>
          <Icon name="list" />
          <Text style={[styles.text]}>Terms of use</Text>
        </Pressable>
        <Pressable style={styles.row}>
          <Icon name="shield" />
          <Text style={[styles.text]}>Privacy Policies</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.green_9,
    paddingHorizontal: 20,
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
  menu: {
    gap: 48,
    borderRadius: 8,
    borderWidth: 0.7,
    borderColor: colors.black_6,
    backgroundColor: colors.white,
    width: '80%',
    padding: 16,
    alignSelf: 'flex-end',
    marginTop: '15%',
    marginRight: '5%',
  },
  btn: {
    borderRadius: 8,
    borderWidth: 0.7,
    borderColor: colors.black_6,
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default LearningScreensNavigator;
