/* eslint-disable react-native/no-inline-styles */
import colors from '@/assets/Colors';
import strings from '@/assets/Strings';
import MiniInvestmentDetailCard from '@/lib/components/Cards/MiniInvestmentDetailCard';
import RecommendationCard from '@/lib/components/Cards/RecommendationCard';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import InvestmentSuites, {
  InvestmentContext,
} from '@/lib/components/InvestmentSuitesScroll';
import {ScrollableSection} from '@/lib/layout/Section';
import {UserIsLoggedInStackParams} from '@/navigation/UserIsLoggedInScreensStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useContext, useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// dummy APIs
import stocks_api from './api/dummyDB/explore/stocks.json';
import startups_api from './api/dummyDB/explore/startups.json';
import savings_lock_api from './api/dummyDB/explore/savings_lock.json';
import real_estate_api from './api/dummyDB/explore/real_estate.json';
import mutual_funds_api from './api/dummyDB/explore/mutual_funds.json';

const ExploreInvestmentsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<UserIsLoggedInStackParams>>();

  // amt of cards in a screen increases as screen length increases
  const {height} = useWindowDimensions();
  const [screenHeight, setScreenHeight] = useState(600);
  const [amtOfCardsShown, setAmtOfCardsShown] = useState(3);

  const cardsToBeShown = useCallback(() => {
    if (screenHeight < height) {
      setAmtOfCardsShown(amtOfCardsShown + 1);
      setScreenHeight(screenHeight + 100);
    }
  }, [screenHeight, amtOfCardsShown, height]);
  cardsToBeShown();

  // use the investments suites scroll to set the  investment type
  const {chosenInvestment} = useContext(InvestmentContext);
  interface InvestmentAPIs {
    [key: string]: any[];
  }
  let investmentAPIs: InvestmentAPIs = {
    realEstate: real_estate_api.estates,
    stocks: stocks_api.stocks,
    savingsLock: savings_lock_api.fixed,
    startups: startups_api.startups,
    mutualFunds: mutual_funds_api.funds,
  };
  let API: any[] = investmentAPIs[chosenInvestment];

  // render the columns for horizontal scroll
  const amtOfColumns = API.length / amtOfCardsShown;
  const AllColumns = Array(Math.floor(amtOfColumns)).fill(null);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.search}>
        <BasicInput iconStart="search" placeholder="Search" type="text" />
      </View>
      <View style={styles.investmentSuites}>
        <InvestmentSuites heading="Investment Suites" auxButton />
      </View>
      <View style={styles.margin}>
        <ScrollableSection heading="Highest Investors" horizontal>
          {strings.recommendations.map(recommendation => (
            <RecommendationCard
              key={recommendation.id}
              title={recommendation.name}
              subtitle={recommendation.company}
              subtext1={
                recommendation.type === 'Stock'
                  ? recommendation.price
                  : recommendation.type === 'Startup'
                  ? recommendation.amount
                  : recommendation.type === 'Fixed Return'
                  ? recommendation.frequency
                  : recommendation.return
              }
              subtext2={16.96}
              type={recommendation.type}
              image={recommendation.image}
            />
          ))}
        </ScrollableSection>
        <View style={styles.live}>
          <ScrollableSection
            heading="Live Opportunities"
            horizontal
            auxBtn
            fillScreen
            scrollData={AllColumns}
            gap={4}>
            {AllColumns.map((val, index) => {
              let start = index * amtOfCardsShown;
              let end = start + amtOfCardsShown;
              return (
                <View style={{gap: 8}} key={index}>
                  {API.slice(start, end).map((content, id) => {
                    return (
                      <MiniInvestmentDetailCard
                        key={id}
                        name={
                          chosenInvestment === 'realEstate' ||
                          chosenInvestment === 'savingsLock' ||
                          chosenInvestment === 'startups'
                            ? content.name
                            : content.symbol
                        }
                        issuer={
                          chosenInvestment === 'realEstate'
                            ? content.maintained_by
                            : chosenInvestment === 'savingsLock'
                            ? content.provider
                            : content.name
                        }
                        image={content.logo}
                        amtRaised={content.funds_raised}
                        price={
                          chosenInvestment === 'stocks'
                            ? content.price
                            : content.min_investment
                        }
                        rate={
                          chosenInvestment === 'stocks'
                            ? content.percent_change
                            : chosenInvestment === 'savingsLock'
                            ? content.interest_rate
                            : content.return_rate
                        }
                        type={
                          chosenInvestment === 'stocks'
                            ? 'stocks'
                            : chosenInvestment === 'realEstate'
                            ? 'realEstate'
                            : chosenInvestment === 'startups'
                            ? 'startups'
                            : chosenInvestment === 'savingsLock'
                            ? 'savingsLock'
                            : 'mutualFunds'
                        }
                        valueCap={content.valuation}
                        term={
                          chosenInvestment === 'savingsLock'
                            ? content.duration
                            : content.distribution_frequency
                        }
                        maturityStructure={content.maturity_structure}
                        onPress={() =>
                          navigation.navigate('InvestingStack', {
                            screen: 'InvestmentDetailScreen',
                            params: {
                              InvestmentId: content.id,
                              InvestmentType: chosenInvestment,
                            },
                          })
                        }
                      />
                    );
                  })}
                </View>
              );
            })}
          </ScrollableSection>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flex: 1,
    backgroundColor: colors.green_9,
  },
  search: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  investmentSuites: {
    marginStart: 24,
    marginBottom: 32,
  },
  margin: {
    marginStart: 24,
  },
  live: {
    marginTop: 32,
  },
});

export default ExploreInvestmentsScreen;
