import {
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import CustomButton from '@/lib/components/Button/CustomButton';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import {InvestmentContext} from '@/lib/components/InvestmentSuitesScroll';
import {InvestmentAPIs} from './navigation/InvestmentDetailScreensNavigator';
import {GetContent, findById} from './utils/utils';
import Icon from '@/assets/Icons';
import {StaticSection} from '@/lib/layout/Section';
import formatAmt from '@/lib/utils/formatAmount';
import {PieChart} from 'react-native-gifted-charts';

// dummy APIs
import real_estate_api from '@/screens/Investing/api/dummyDB/details/financials/real_estate.json';
import startups_api from '@/screens/Investing/api/dummyDB/details/financials/startups.json';
import savings_lock_api from '@/screens/Investing/api/dummyDB/details/financials/savings_lock.json';
import stocks_api from '@/screens/Investing/api/dummyDB/details/financials/stocks.json';
import mutual_funds_api from '@/screens/Investing/api/dummyDB/details/financials/mutual_funds.json';
import {Characteristics} from './AboutInvestment';
import {createPieData} from '@/lib/utils/CreatePieData';

const FinancialAPIs: InvestmentAPIs = {
  realEstate: real_estate_api.real_estate,
  stocks: stocks_api.stocks,
  savingsLock: savings_lock_api.savings_lock,
  startups: startups_api.startups,
  mutualFunds: mutual_funds_api.funds,
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Financials = ({route}: {route: any}) => {
  const {contentId} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never">
        <PageContent contentId={contentId} />
      </ScrollView>
      <CustomButton variant="primary" label="Invest Now" style={styles.btn} />
    </View>
  );
};
export default Financials;

const PageContent = ({contentId}: {contentId: string}) => {
  const {chosenInvestment} = useContext(InvestmentContext);
  let API = FinancialAPIs[chosenInvestment];

  const content = API.find(findById(contentId));

  switch (chosenInvestment) {
    case 'mutualFunds':
      return <MutualFunds content={content} />;
    case 'stocks':
      return <Stocks content={content} />;
    case 'savingsLock':
      return <SavingsLock content={content} />;
    case 'realEstate':
      return <RealEstate content={content} />;
    case 'startups':
      return <Startups content={content} />;
    default:
      return (
        <View
          style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              ...typography.semiBold.paragraphMid,
              color: colors.black_1,
              textAlign: 'center',
            }}>
            The details of this investment could not be found, please bear with
            us as our engineers are working tirelessly to bring it to you
          </Text>
        </View>
      );
  }
};

const MutualFunds = ({content}: {content: any}) => {
  const strategy = GetContent(content.strategy_and_holdings);
  const performance = GetContent(content.performance_and_fees);
  const rules = GetContent(content.trading_rules_and_restrictions);

  type FundCompositionItem = {
    asset_type: string;
    percentage: number;
    color: string;
  };

  return (
    <View style={styles.mainContent}>
      <View style={[styles.cardBG, {gap: 12}]}>
        <Characteristics
          row
          label="Size"
          value={content.fund_size.amount + ' as of ' + content.fund_size.date}
        />
        <View style={styles.divider} />
        <Characteristics split row label="Trustee" value={content.trustee} />
        <View style={styles.divider} />
        <Characteristics
          split
          row
          label="Custodian"
          value={content.custodian}
        />
        <View style={styles.divider} />
        <Characteristics
          split
          row
          label="Management fee"
          value={content.management_fee}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="10-year avg annual return"
          value={content.ten_year_avg_annual_return}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Exchange fee"
          value={content.exchange_fee}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Expense ratio"
          value={content.expense_ratio}
        />
      </View>
      {/* Fund Composition Chart Start */}
      <StaticSection heading="Fund Composition" gap={24}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PieChart
            donut
            innerRadius={60}
            radius={100}
            data={createPieData(content.fund_composition)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {content.fund_composition.map(
            (value: FundCompositionItem, index: React.Key) => (
              <View key={index} style={{flexDirection: 'row', gap: 12}}>
                <View
                  style={{
                    backgroundColor: value.color,
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                  }}
                />
                <Text style={styles.legend}>
                  {value.asset_type + '(' + value.percentage + '%)'}
                </Text>
              </View>
            ),
          )}
        </View>
      </StaticSection>
      {/* Fund Composition Chart End */}

      {/* Strategy and Holdings Begins */}
      <StaticSection heading="Strategy and Holdings" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {strategy.paragraph} {strategy.button}
          </Text>
        </View>
      </StaticSection>
      {/* Strategy and Holdings Ends */}
      {/* Performance and Fees Begins */}
      <StaticSection heading="Performance and Fees" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {performance.paragraph} {performance.button}
          </Text>
        </View>
      </StaticSection>
      {/* Performance and Fees Ends */}
      {/* Trading Rules and Restrictions Begins */}
      <StaticSection heading="Trading Rules and Restrictions" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {rules.paragraph} {rules.button}
          </Text>
        </View>
      </StaticSection>
      {/* Trading Rules and Restrictions Ends */}
    </View>
  );
};

const Stocks = ({content}: {content: any}) => {
  const composition = GetContent(content.stock_composition);
  const performance = GetContent(content.stock_performance_and_fees);
  const rules = GetContent(content.trading_rules_and_restrictions);
  return (
    <View style={styles.mainContent}>
      <View style={[styles.cardBG, {gap: 12}]}>
        <Characteristics
          row
          label="Open"
          value={'$' + formatAmt(content.stock_price.current_price)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="High"
          value={'$' + formatAmt(content.stock_price.high_price)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Low"
          value={'$' + formatAmt(content.stock_price.low_price)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="52-week high"
          value={'$' + formatAmt(content.stock_price.fiftyTwo_week_high)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="52-week low"
          value={'$' + formatAmt(content.stock_price.fiftyTwo_week_low)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Volume"
          value={content.stock_stats.volume}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Market cap"
          value={content.stock_stats.market_cap}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="P/E ratio"
          value={content.stock_stats.PE_ratio}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Dividend yield"
          value={content.stock_stats.dividend_yield}
        />
      </View>
      {/* Composition Begins */}
      <StaticSection heading="Composition" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {composition.paragraph} {composition.button}
          </Text>
        </View>
      </StaticSection>
      {/* Composition Ends */}
      {/* Performance and Fees Begins */}
      <StaticSection heading="Performance and Fees" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {performance.paragraph} {performance.button}
          </Text>
        </View>
      </StaticSection>
      {/* Performance and Fees Ends */}
      {/* Trading Rules and Restrictions Begins */}
      <StaticSection heading="Trading Rules and Restrictions" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {rules.paragraph} {rules.button}
          </Text>
        </View>
      </StaticSection>
      {/* Trading Rules and Restrictions Ends */}
    </View>
  );
};

const SavingsLock = ({content}: {content: any}) => {
  const strategy = GetContent(content.strategy_and_holdings);
  return (
    <View style={styles.mainContent}>
      <View style={[styles.cardBG, {gap: 12}]}>
        <Characteristics
          row
          label="Min Investment"
          value={'$' + formatAmt(content.min_investment)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Max Investment"
          value={'$' + formatAmt(content.max_investment)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Interest Rate"
          value={content.interest_rate}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Maturity Period"
          value={content.maturity_period}
        />
        <View style={styles.divider} />
        <Characteristics row label="Liquidity" value={content.liquidity} />
        <View style={styles.divider} />
        <Characteristics row label="Security" value={content.security} />
      </View>
      {/* Composition Begins */}
      <StaticSection heading="Composition" gap={4}>
        <View style={[styles.cardBG, {gap: 4}]}>
          {content.composition.map((item: string, index: React.Key) => (
            <Text style={[styles.cardText]} key={index}>
              {'•  ' + item}
            </Text>
          ))}
        </View>
      </StaticSection>
      {/* Composition Ends */}
      {/* Strategy */}
      <StaticSection heading="Strategy and Holdings" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {strategy.paragraph} {strategy.button}
          </Text>
        </View>
      </StaticSection>
      {/* Strategy Ends */}
      <StaticSection heading="Performance and Fees" gap={4}>
        <View style={[styles.cardBG, {gap: 4}]}>
          {content.performance_and_fees.map(
            (item: string, index: React.Key) => (
              <Text style={[styles.cardText]} key={index}>
                {'•  ' + item}
              </Text>
            ),
          )}
        </View>
      </StaticSection>
      <StaticSection heading="Trading Rules and Restrictions" gap={4}>
        <View style={[styles.cardBG, {gap: 4}]}>
          {content.trading_rules_and_restrictions.map(
            (item: string, index: React.Key) => (
              <Text style={[styles.cardText]} key={index}>
                {'•  ' + item}
              </Text>
            ),
          )}
        </View>
      </StaticSection>
    </View>
  );
};

const Startups = ({content}: {content: any}) => {
  const strategy = GetContent(content.strategy_and_holdings);
  const performance = GetContent(content.performance_and_fees);
  const rules = GetContent(content.trading_rules_and_restrictions);

  return (
    <ScrollView
      overScrollMode="never"
      bounces={false}
      contentContainerStyle={[styles.mainContent, {marginBottom: 100}]}>
      <View style={[styles.cardBG, {gap: 12}]}>
        <Characteristics
          row
          label="Valuation cap"
          value={content.valuation_cap}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Funding Goal"
          value={content.funding_goal}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Min Investment"
          value={'$' + formatAmt(content.min_investment)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Maturity Period"
          value={content.maturity_period}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Amount Raised So Far"
          value={'$' + formatAmt(content.amount_raised_so_far)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Total raised in previous rounds"
          value={content.total_raised_in_previous_rounds}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Total raised from crowdfunding"
          value={content.total_raised_from_crowdfunding}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Number of Investors"
          value={content.number_of_investors}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Security Type"
          value={content.security_type}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Funding Deadline"
          value={content.funding_deadline}
        />
      </View>
      {/* Strategy */}
      <StaticSection heading="Strategy and Holdings" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {strategy.paragraph} {strategy.button}
          </Text>
        </View>
      </StaticSection>
      {/* Strategy Ends */}
      <StaticSection heading="Performance and Fees" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {performance.paragraph} {performance.button}
          </Text>
        </View>
      </StaticSection>
      {/* Rules Begins */}
      <StaticSection heading="Rules and Restrictions" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {rules.paragraph} {rules.button}
          </Text>
        </View>
      </StaticSection>
      {/* Rules Ends */}
    </ScrollView>
  );
};

const RealEstate = ({content}: {content: any}) => {
  type FundsUse = {
    name: string;
    amount: number;
    percentage: number;
    color: string;
  };

  return (
    <ScrollView
      overScrollMode="never"
      bounces={false}
      contentContainerStyle={[styles.mainContent, {marginBottom: 100}]}>
      <View style={[styles.cardBG, {gap: 12}]}>
        <Characteristics
          row
          label="Project Cost"
          value={'$' + formatAmt(content.project_cost)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Funding Goal"
          value={'$' + formatAmt(content.funding_goal)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Min Investment"
          value={'$' + formatAmt(content.min_investment)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Maturity Period"
          value={content.maturity_period}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Annual Dividends"
          value={content.annual_dividends}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Amount Raised So Far"
          value={'$' + formatAmt(content.amount_raised_so_far)}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Security Type"
          value={content.security_type}
        />
        <View style={styles.divider} />
        <Characteristics
          row
          label="Funding Deadline"
          value={content.funding_deadline}
        />
      </View>

      {/* Fund Composition Chart Start */}
      <StaticSection heading="Proposed Use of Funds" gap={24}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PieChart
            donut
            innerRadius={60}
            radius={100}
            data={createPieData(content.proposed_use_of_funds)}
          />
        </View>

        <View style={{gap: 16, alignSelf: 'center'}}>
          {content.proposed_use_of_funds.map(
            (value: FundsUse, index: React.Key) => (
              <View
                key={index}
                style={{flexDirection: 'row', gap: 12, alignSelf: 'center'}}>
                <View
                  style={{
                    backgroundColor: value.color,
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                  }}
                />
                <Text style={styles.legend}>
                  {`${value.name} ($${value.amount}, ${value.percentage}%)`}
                </Text>
              </View>
            ),
          )}
        </View>
      </StaticSection>
      {/* Fund Composition Chart End */}

      {/* Business Plan Begins */}
      <StaticSection heading="Business Plan / Strategy" gap={4}>
        <View style={[styles.cardBG, {gap: 8}]}>
          <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
            <Icon name="document_outline" />
            <Text
              style={[styles.infoOneMain, {...typography.medium.paragraphMid}]}>
              {content.business_plan.title}
            </Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.cardText}>
            {content.business_plan.description}
          </Text>
          <Pressable
            onPress={() => {
              Linking.openURL(content.business_plan.url);
              styles.link.textDecorationLine === 'underline'
                ? 'none'
                : 'underline';
            }}>
            <Text style={[styles.cardText, styles.link, {color: colors.link}]}>
              Download
            </Text>
          </Pressable>
        </View>
      </StaticSection>
      {/* Business Plan Ends */}
    </ScrollView>
  );
};

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
  img: {
    borderRadius: 4,
    marginTop: 12,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.black_10,
  },
  infoOneMain: {
    color: colors.black_1,
    ...typography.regular.paragraphMid,
  },
  infoSub: {
    color: colors.black_6,
    ...typography.regular.paragraphSmall,
    textTransform: 'capitalize',
  },
  copied: {
    ...typography.regular.paragraphSmall,
    fontSize: 10,
    marginStart: 5,
    color: colors.black_1,
  },
  video: {
    borderRadius: 8,
    flexShrink: 0,
    height: 175,
    overflow: 'hidden',
  },
  legend: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
    textTransform: 'capitalize',
  },
});
