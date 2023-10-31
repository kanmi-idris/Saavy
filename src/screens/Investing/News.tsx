import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import React, {useContext} from 'react';
import {
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// dummy APIs
import {InvestmentContext} from '@/lib/components/InvestmentSuitesScroll';
import getRelativeTime from '@/lib/utils/GetRelativeTime';
import mutual_funds_api from '@/screens/Investing/api/dummyDB/details/news/mutual_funds.json';
import real_estate_api from '@/screens/Investing/api/dummyDB/details/news/real_estate.json';
import savings_lock_api from '@/screens/Investing/api/dummyDB/details/news/savings_lock.json';
import startups_api from '@/screens/Investing/api/dummyDB/details/news/startups.json';
import stocks_api from '@/screens/Investing/api/dummyDB/details/news/stocks.json';
import {NewsItem} from 'types';
import {InvestmentAPIs} from './navigation/InvestmentDetailScreensNavigator';
import {findById} from './utils/utils';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const InvestmentNews = ({route}: {route: any}) => {
  const {contentId} = route.params;
  const {chosenInvestment} = useContext(InvestmentContext);

  const NewsAPIs: InvestmentAPIs = {
    realEstate: real_estate_api.real_estate,
    stocks: stocks_api.stocks,
    savingsLock: savings_lock_api.savings_lock,
    startups: startups_api.startups,
    mutualFunds: mutual_funds_api.fund,
  };
  let API = NewsAPIs[chosenInvestment];
  const content = API.filter(findById(contentId));

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 24,
          paddingBottom: 100,
        }}>
        {content.map((item: NewsItem, index: React.Key) => {
          return (
            <View style={[styles.cardBG, {gap: 8}]} key={index}>
              <View style={{gap: 4}}>
                <Text style={styles.cardText}>{item.headline}</Text>
                <Text style={styles.subheading}>
                  {getRelativeTime(item.timestamp)}
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  Linking.openURL(item.url);
                  styles.link.textDecorationLine === 'underline'
                    ? 'none'
                    : 'underline';
                }}>
                <Text
                  style={[styles.cardText, styles.link, {color: colors.link}]}>
                  {item.source}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      <CustomButton variant="primary" label="Invest Now" style={styles.btn} />
    </View>
  );
};

export default InvestmentNews;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    flexGrow: 1,
  },
  mainContent: {
    gap: 24,
    paddingBottom: 150,
    paddingHorizontal: 24,
  },
  cardBG: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  cardText: {
    ...typography.others.paragraphInput,
    color: colors.black_1,
    fontSize: 13.3,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  btn: {
    position: 'absolute',
    bottom: 16,
    width: SCREEN_WIDTH - 48,
    alignSelf: 'center',
  },
  subheading: {
    ...typography.regular.paragraphSmall,
    color: colors.black_6,
  },
});
