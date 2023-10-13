/* eslint-disable react-native/no-inline-styles */
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProgressBar from './components/ProgressBar';
import typography from '@/assets/Typography';
import {ScrollableSection, StaticSection} from '@/lib/layout/Section';
import strings from '@/assets/Strings';
import RecommendationCard from '@/lib/components/Cards/RecommendationCard';
import MiniInvestmentDetailCard from '@/lib/components/Cards/MiniInvestmentDetailCard';
import DisplayCard from './components/DisplayCard';
import WelcomeBar from './components/WelcomeBar';

const UserDashboardScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.baseContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{paddingBottom: 32}}>
        <View style={styles.welcomeBarWrap}>
          <WelcomeBar
            heading="Hi, Inumidun"
            subheading="Lets Make you wealthier today 😊"
            image={require('@/assets/images/avatar.png')}
            newNotifications={true}
          />
        </View>
        <View style={styles.scrollables}>
          <ScrollableSection fillScreen horizontal>
            <DisplayCard
              label="Portfolio Value"
              key={Math.random()}
              trend="upward"
            />
            <DisplayCard label="Stocks" key={Math.random()} trend="downward" />
            <DisplayCard
              label="Real Estate"
              key={Math.random()}
              trend="upward"
            />
            <DisplayCard
              label="Mutual Funds"
              key={Math.random()}
              trend="downward"
            />
            <DisplayCard
              label="Savings Lock"
              key={Math.random()}
              trend="upward"
            />
            <DisplayCard label="Startups" key={Math.random()} trend="upward" />
          </ScrollableSection>
          <ScrollableSection
            heading="Recommendations For You"
            horizontal
            pagingEnabled>
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
          <ScrollableSection
            heading="Continue Learning"
            horizontal
            fillScreen
            pagingEnabled>
            {strings.learning.continue.map(content => (
              <ContinueLearningCard
                key={content.id}
                heading={content.heading}
                subheading={content.text}
                percentCompleted={content.percentCompleted}
              />
            ))}
          </ScrollableSection>
        </View>
        <View style={styles.staticSection}>
          <StaticSection heading="Your Top Performers" gap={8}>
            <MiniInvestmentDetailCard
              key={1}
              name="FairLock"
              issuer="FairMoney Microfinance Bank"
              image={require('@/assets/images/MicrosoftLogo.png')}
              amtRaised={200000000}
              price={250.11}
              rate={14.55}
              type="savingsLock"
              valueCap={18}
              term="Monthly"
              onPress={() => {}}
            />
            <MiniInvestmentDetailCard
              key={2}
              name="FairLock"
              issuer="FairMoney Microfinance Bank"
              image={require('@/assets/images/MicrosoftLogo.png')}
              amtRaised={200000000}
              price={250.11}
              rate={14.55}
              type="savingsLock"
              valueCap={18}
              term="Monthly"
              onPress={() => {}}
            />
            <MiniInvestmentDetailCard
              key={3}
              name="FairLock"
              issuer="FairMoney Microfinance Bank"
              image={require('@/assets/images/MicrosoftLogo.png')}
              amtRaised={200000000}
              price={250.11}
              rate={14.55}
              type="savingsLock"
              valueCap={18}
              term="Monthly"
              onPress={() => {}}
            />
          </StaticSection>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface ContinueLearningCardProps {
  heading: string;
  subheading: string;
  percentCompleted: number;
}

const ContinueLearningCard = ({
  heading,
  subheading,
  percentCompleted,
}: ContinueLearningCardProps) => {
  const iconProps = {
    width: 36,
    height: 36,
    pathFill: colors.white,
    fill: colors.green_1,
    stroke: colors.green_1,
    pathStroke: colors.white,
  };

  return (
    <Pressable style={[styles.container]}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subheading}>{subheading}</Text>
        <ProgressBar percent={percentCompleted} />
      </View>
      <Icon name="playCircle" {...iconProps} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    // paddingTop: 32,
    flex: 1,
    backgroundColor: colors.green_9,
  },
  scrollables: {
    marginStart: 24,
    gap: 24,
  },
  staticSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'auto',
  },
  wrapper: {
    gap: 4,
    maxWidth: '80%',
  },
  heading: {
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
  },
  subheading: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
    marginBottom: 8,
  },
  welcomeBarWrap: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
});

export default UserDashboardScreen;
