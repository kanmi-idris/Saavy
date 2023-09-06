import colors from '@/assets/Colors';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import InvestmentSuites from '@/lib/components/InvestmentSuitesScroll';
import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import GuideCard from './components/GuideCard';

const AllGuidesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <BasicInput placeholder="Search" iconStart="search" type="text" />
        <InvestmentSuites heading="What to Learn" />
      </View>
      <ScrollView contentContainerStyle={styles.contentWrap}>
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="What are the benefits and risks of investing in mutual funds?"
        />
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="What are the different types of mutual funds and how to choose the best one for your goals?"
        />
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="How to avoid common mistakes and pitfalls when investing in mutual funds?"
        />
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="How to plan for taxes and retirement with mutual funds?"
        />
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="What are mutual funds and how do they work?"
        />
        <GuideCard
          image={require('@/assets/images/ardent-server.png')}
          content="What are mutual funds and how do they work?"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    flex: 1,
  },
  head: {
    marginHorizontal: 24,
    gap: 32,
    marginBottom: 16,
  },
  contentWrap: {
    marginHorizontal: 24,
    gap: 8,
    paddingBottom: 15,
  },
});

export default AllGuidesScreen;
