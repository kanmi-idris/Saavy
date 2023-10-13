import colors from '@/assets/Colors';
import strings from '@/assets/Strings';
import MiniInvestmentDetailCard from '@/lib/components/Cards/MiniInvestmentDetailCard';
import RecommendationCard from '@/lib/components/Cards/RecommendationCard';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import InvestmentSuites from '@/lib/components/InvestmentSuitesScroll';
import {ScrollableSection} from '@/lib/layout/Section';
import {UserIsLoggedInStackParams} from '@/navigation/UserIsLoggedInScreensStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

// dummy APIs
// import * as stocks_api from './api/dummyDB/explore/stocks.json';
// import * as startups_api from './api/dummyDB/explore/startups.json';
// import * as savings_lock_api from './api/dummyDB/explore/savings_lock.json';
// import * as real_estate_api from './api/dummyDB/explore/real_estate.json';
import * as mutual_funds_api from './api/dummyDB/explore/mutual_funds.json';

const ExploreInvestmentsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<UserIsLoggedInStackParams>>();

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

  const amtOfColumns = mutual_funds_api.funds.length / amtOfCardsShown;
  const AllColumns = Array(Math.floor(amtOfColumns)).fill(null);

  return (
    <SafeAreaView style={styles.container}>
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
            fillScreen>
            {AllColumns.map(index => (
              <View style={{gap: 12}} key={index}>
                {mutual_funds_api.funds
                  .slice(
                    amtOfCardsShown === 3 ? 0 : amtOfCardsShown,
                    amtOfCardsShown === 3
                      ? amtOfCardsShown
                      : amtOfCardsShown * 2,
                  )
                  .map((content, id) => {
                    return (
                      <MiniInvestmentDetailCard
                        key={id}
                        name={content.symbol}
                        issuer={content.name}
                        image={require('@/assets/images/MicrosoftLogo.png')}
                        amtRaised={0}
                        price={content.min_investment}
                        rate={content.return_rate}
                        type="mutualFunds"
                        valueCap={0}
                        term={content.distribution_frequency}
                        maturityStructure={content.maturity_structure}
                        onPress={() =>
                          navigation.navigate('InvestingStack', {
                            screen: 'InvestmentDetailScreen',
                            params: {InvestmentName: 'FairLock'},
                          })
                        }
                      />
                    );
                  })}
              </View>
            ))}
          </ScrollableSection>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
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
