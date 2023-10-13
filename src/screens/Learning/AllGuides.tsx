import colors from '@/assets/Colors';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import InvestmentSuites, {
  InvestmentContext,
} from '@/lib/components/InvestmentSuitesScroll';
import React, {useContext} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import GuideCard from './components/GuideCard';
import guides from './api/learning_guides.json';

const AllGuidesScreen = () => {
  const {chosenInvestment} = useContext(InvestmentContext);

  interface Prop {
    [key: string]: any[];
  }
  let guidesAPI: Prop = {
    realEstate: guides.real_estate,
    stocks: guides.stocks,
    savingsLock: guides.savings_lock,
    startups: guides.startups,
    mutualFunds: guides.mutual_funds,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <BasicInput placeholder="Search" iconStart="search" type="text" />
        <InvestmentSuites heading="What to Learn" noEndSpacing />
      </View>
      <ScrollView
        contentContainerStyle={styles.contentWrap}
        showsVerticalScrollIndicator={false}>
        {guidesAPI[chosenInvestment].map(guide => (
          <GuideCard
            image={require('@/assets/images/ardent-server.png') || guide.image}
            content={guide.title}
          />
        ))}
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
