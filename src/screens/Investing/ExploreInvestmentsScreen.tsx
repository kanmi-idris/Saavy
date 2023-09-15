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
import React from 'react';
import {SafeAreaView, View, StyleSheet, Pressable} from 'react-native';

const ExploreInvestmentsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<UserIsLoggedInStackParams>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <BasicInput iconStart="search" placeholder="Search" type="text" />
      </View>
      <View style={styles.investmentSuites}>
        <InvestmentSuites heading="Investment Suites" auxButton />
      </View>
      <View style={styles.recommendations}>
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
            <View style={{gap: 12}}>
              <Pressable
                onPress={() =>
                  navigation.navigate('InvestingStack', {
                    screen: 'InvestmentDetailScreen',
                    params: {InvestmentName: 'FairLock'},
                  })
                }>
                <MiniInvestmentDetailCard
                  name="FairLock"
                  issuer="FairMoney Microfinance Bank"
                  image={require('@/assets/images/MicrosoftLogo.png')}
                  amtRaised={200000000}
                  price={250.11}
                  rate={14.55}
                  type="savingsLock"
                  valueCap={18}
                  term="Monthly"
                />
              </Pressable>
              <MiniInvestmentDetailCard
                name="FairLock"
                issuer="FairMoney Microfinance Bank"
                image={require('@/assets/images/MicrosoftLogo.png')}
                amtRaised={200000000}
                price={250.11}
                rate={14.55}
                type="savingsLock"
                valueCap={18}
                term="Monthly"
              />
              <MiniInvestmentDetailCard
                name="FairLock"
                issuer="FairMoney Microfinance Bank"
                image={require('@/assets/images/MicrosoftLogo.png')}
                amtRaised={200000000}
                price={250.11}
                rate={14.55}
                type="savingsLock"
                valueCap={18}
                term="Monthly"
              />
            </View>
            <View style={{gap: 12}}>
              <MiniInvestmentDetailCard
                name="FairLock"
                issuer="FairMoney Microfinance Bank"
                image={require('@/assets/images/MicrosoftLogo.png')}
                amtRaised={200000000}
                price={250.11}
                rate={14.55}
                type="savingsLock"
                valueCap={18}
                term="Monthly"
              />
              <MiniInvestmentDetailCard
                name="FairLock"
                issuer="FairMoney Microfinance Bank"
                image={require('@/assets/images/MicrosoftLogo.png')}
                amtRaised={200000000}
                price={250.11}
                rate={14.55}
                type="savingsLock"
                valueCap={18}
                term="Monthly"
              />
              <MiniInvestmentDetailCard
                name="FairLock"
                issuer="FairMoney Microfinance Bank"
                image={require('@/assets/images/MicrosoftLogo.png')}
                amtRaised={200000000}
                price={250.11}
                rate={14.55}
                type="savingsLock"
                valueCap={18}
                term="Monthly"
              />
            </View>
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
  recommendations: {
    marginStart: 24,
  },
  live: {
    marginTop: 32,
  },
});

export default ExploreInvestmentsScreen;
