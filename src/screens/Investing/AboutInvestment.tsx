/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MainInfoCard from './components/MainInfoCard';
import colors from '@/assets/Colors';
import {ScrollableSection, StaticSection} from '@/lib/layout/Section';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
// dummy APIs
import {InvestmentContext} from '@/lib/components/InvestmentSuitesScroll';
import {GetContent, findById} from './utils/utils';
import {AboutInvestmentAPIs} from './navigation/InvestmentDetailScreensNavigator';
import Icon from '@/assets/Icons';
import formatAmt from '@/lib/utils/formatAmount';
import {copyToClipboard} from '@/lib/utils/copyToClipboard';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const AboutInvestment = ({route}: {route: any}) => {
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
export default AboutInvestment;

const PageContent = ({contentId}: {contentId: string}) => {
  const {chosenInvestment} = useContext(InvestmentContext);
  let API = AboutInvestmentAPIs[chosenInvestment];

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
    // case 'startups':
    //   return <MutualFunds api={API} />;
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
  const about = GetContent(content.details.about);
  const earningModel = GetContent(content.details.earning_model);
  const opinion = GetContent(content.details.opinion);
  return (
    <View style={styles.mainContent}>
      <MainInfoCard
        type="mutual-funds"
        image={content.logo}
        heading={content.name}
        subheading={content.manager}
        value1={content.interest_rate}
        label1={content.duration}
        value2={content.percent_change + '%'}
        label2={content.risk_level + ' risk'}
        status={Math.sign(content.percent_change) === -1 ? 'loss' : 'gain'}
        marketStatus=""
        label3=""
        label4=""
        value3=""
        value4=""
      />

      {/* About Begins */}
      <StaticSection heading="About This Fund" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {about.paragraph} {about.button}
          </Text>
        </View>
      </StaticSection>
      {/* About Ends */}
      {/* Earning Begins */}
      <StaticSection heading="How you Earn" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {earningModel.paragraph} {earningModel.button}
          </Text>
        </View>
      </StaticSection>
      {/* Earning Ends */}
      {/* Our Opinion Begins */}
      <StaticSection heading="Our Opinion" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {opinion.paragraph} {opinion.button}
          </Text>
        </View>
      </StaticSection>
      {/* Our Opinion Ends */}
      {/* Prospectus Begins */}
      <StaticSection heading="fund prospectus" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            The fund prospectus is a document that provides the detailed
            documentation about this fund.
          </Text>
          <Pressable onPress={() => Linking.openURL(content.prospectus)}>
            <Text style={[styles.cardText, styles.link, {color: colors.link}]}>
              Download Prospectus
            </Text>
          </Pressable>
        </View>
      </StaticSection>
      {/* Prospectus Ends */}
    </View>
  );
};

const Stocks = ({content}: {content: any}) => {
  const about = GetContent(content.details.about);
  const earningModel = GetContent(content.details.earning_model);
  const opinion = GetContent(content.details.opinion);
  return (
    <View style={styles.mainContent}>
      <MainInfoCard
        type="stocks"
        image={content.logo}
        heading={content.symbol}
        subheading={content.name}
        value1={'$' + content.price}
        label1="Min Investment"
        value2={content.percent_change + '%'}
        label2={content.risk_level + ' risk'}
        status={Math.sign(content.percent_change) === -1 ? 'loss' : 'gain'}
        marketStatus={content.market_status}
        label3="Market Condition"
        label4=""
        value3=""
        value4=""
      />

      {/* About Begins */}
      <StaticSection heading="About This Stock" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {about.paragraph} {about.button}
          </Text>
        </View>
      </StaticSection>
      {/* About Ends */}
      {/* Earning Begins */}
      <StaticSection heading="How you Earn" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {earningModel.paragraph} {earningModel.button}
          </Text>
        </View>
      </StaticSection>
      {/* Earning Ends */}
      {/* Our Opinion Begins */}
      <StaticSection heading="Our Opinion" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {opinion.paragraph} {opinion.button}
          </Text>
        </View>
      </StaticSection>
      {/* Our Opinion Ends */}
      {/* Prospectus Begins */}
      <StaticSection heading="Stock Prospectus" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            The stock prospectus is a document that provides the detailed
            documentation about this stock.
          </Text>
          <Pressable
            onPress={() => {
              Linking.openURL(content.prospectus);
              styles.link.textDecorationLine === 'underline'
                ? 'none'
                : 'underline';
            }}>
            <Text style={[styles.cardText, styles.link, {color: colors.link}]}>
              Download Prospectus
            </Text>
          </Pressable>
        </View>
      </StaticSection>
      {/* Prospectus Ends */}
    </View>
  );
};

const SavingsLock = ({content}: {content: any}) => {
  const about = GetContent(content.details.about);
  const earningModel = GetContent(content.details.earning_model);
  const opinion = GetContent(content.details.opinion);
  return (
    <View style={styles.mainContent}>
      <MainInfoCard
        type="savings-lock"
        image={content.logo}
        heading={content.name}
        subheading={content.provider}
        value1={content.interest_rate}
        label1={content.duration + ' Returns'}
        value2={content.percent_change + '%'}
        label2={content.risk_level + ' risk'}
      />

      {/* About Begins */}
      <StaticSection heading="About This Savings Lock" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {about.paragraph} {about.button}
          </Text>
        </View>
      </StaticSection>
      {/* About Ends */}
      {/* Earning Begins */}
      <StaticSection heading="How you Earn" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {earningModel.paragraph} {earningModel.button}
          </Text>
        </View>
      </StaticSection>
      {/* Earning Ends */}
      {/* Our Opinion Begins */}
      <StaticSection heading="Our Opinion" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            {opinion.paragraph} {opinion.button}
          </Text>
        </View>
      </StaticSection>
      {/* Our Opinion Ends */}
      {/* Prospectus Begins */}
      <StaticSection heading="Savings Lock Prospectus" gap={4}>
        <View style={styles.cardBG}>
          <Text style={styles.cardText}>
            The savings lock prospectus is a document that provides the detailed
            documentation about this savings lock.
          </Text>
          <Pressable
            onPress={() => {
              Linking.openURL(content.prospectus);
              styles.link.textDecorationLine === 'underline'
                ? 'none'
                : 'underline';
            }}>
            <Text style={[styles.cardText, styles.link, {color: colors.link}]}>
              Download Prospectus
            </Text>
          </Pressable>
        </View>
      </StaticSection>
      {/* Prospectus Ends */}
    </View>
  );
};

// Real Estate Component Starts
const Characteristics = ({
  label,
  value,
  row,
}: {
  label: string;
  value: string;
  row?: boolean;
}) => (
  <View
    style={
      row ? {flexDirection: 'row', justifyContent: 'space-between'} : {gap: 4}
    }>
    <Text style={styles.infoSub}>{label}</Text>
    <Text style={styles.infoOneMain}>{value}</Text>
  </View>
);

const Market = ({content}: {content: any}) => {
  const market = content.market;

  const [showMore, setShowMore] = useState(false);
  const contentHeight = market.reduce(
    (sum: any, item: {[x: string]: string | any[]}) => {
      const keys = Object.keys(item);
      const textLength = item[keys[0]].length;
      return sum + textLength;
    },
    0,
  );
  return (
    <StaticSection heading="Market" gap={4}>
      <View style={[styles.cardBG, {marginRight: 24, paddingBottom: 0}]}>
        <View
          style={[
            {
              overflow: 'hidden',
              maxHeight: showMore ? null : 200,
              marginBottom: 24,
            },
          ]}>
          {market.map((item: any, index: number) => {
            const keys = Object.keys(item);
            return keys.map(key => {
              return (
                <View>
                  <Text
                    style={[
                      styles.cardText,
                      {...typography.semiBold.paragraphMid},
                    ]}>
                    {index + 1 + '. '}
                    <Text
                      style={[
                        styles.cardText,
                        {...typography.underline.paragraphMid},
                      ]}>
                      {key}
                    </Text>
                  </Text>
                  <Text style={styles.cardText}>{item[key] + '\n'}</Text>
                </View>
              );
            });
          })}
        </View>
        <View style={[{position: 'absolute', bottom: 8, left: 16}]}>
          {contentHeight > 200 && (
            <Text
              onPress={() => setShowMore(!showMore)}
              style={[styles.cardText, styles.link]}>
              {showMore ? 'show less' : 'more'}
            </Text>
          )}
        </View>
      </View>
    </StaticSection>
  );
};

const RealEstate = ({content}: {content: any}) => {
  const trackRecord = GetContent(content.track_record);
  // To copy the phone number to the user clipboard.
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 400);
    }
  }, [copied]);

  const handleCopy = (val: any) => {
    copyToClipboard(val);
    setCopied(true);
  };

  return (
    <View style={[styles.mainContent, {paddingRight: 0}]}>
      <View style={{marginRight: 24}}>
        <MainInfoCard
          type="real-estate"
          image={content.logo}
          heading={content.name}
          subheading={content.maintained_by}
          value1={content.interest_rate}
          label1={content.interest_duration + ' Returns'}
          value2={'$' + content.min_investment}
          label2="Min Investment"
          value3={content.maturity_period}
          label3="Maturity Period"
          label4="Occupancy Rate"
          value4={content.occupancy_rate}
        />
      </View>
      {/* Characteristics Begins */}
      <StaticSection heading="Characteristics" gap={4}>
        <View style={[styles.cardBG, {gap: 12, marginRight: 24}]}>
          <Characteristics label="Condition" value={content.condition} />
          <View style={styles.divider} />
          <Characteristics label="Type" value={content.type} />
          <View style={styles.divider} />
          <Characteristics label="Location" value={content.location.address} />
          <View style={styles.divider} />
          <Characteristics
            label="Amount Raised"
            value={'$' + formatAmt(content.amt_raised)}
          />
          <View style={styles.divider} />
          <Characteristics
            label="Funding Goal"
            value={'$' + formatAmt(content.funding_goal)}
          />
          <View style={styles.divider} />
          <Characteristics
            label="Funding Deadline"
            value={content.funding_deadline}
          />
        </View>
      </StaticSection>
      {/* Characteristics Ends */}
      {/* Features Begins */}
      <StaticSection heading="Features" gap={4}>
        <View style={[styles.cardBG, {gap: 4, marginRight: 24}]}>
          {content.features.map((item: string, index: React.Key) => (
            <Text style={[styles.cardText]} key={index}>
              {'•  ' + item}
            </Text>
          ))}
        </View>
      </StaticSection>
      {/* Features Ends */}
      {/* Landmarks Begins */}
      <StaticSection heading="Landmarks" gap={4}>
        <View style={[styles.cardBG, {gap: 4, marginRight: 24}]}>
          {content.location.landmarks.map((item: string, index: React.Key) => (
            <Text style={[styles.cardText]} key={index}>
              {'•  ' + item}
            </Text>
          ))}
        </View>
      </StaticSection>
      {/* Landmarks Ends */}
      {/* Market Begins */}
      <Market content={content} />
      {/* Market Ends */}
      {/* Track Record Begins */}
      <StaticSection heading="Track Record" gap={4}>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {trackRecord.paragraph} {trackRecord.button}
          </Text>
        </View>
      </StaticSection>
      {/* Track Record Ends */}
      {/* Team Begins */}
      <ScrollableSection heading="Team" gap={4} fillScreen horizontal>
        {content.team.map((employee: any, index: React.Key) => {
          const employeeBio = GetContent(employee.bio);
          return (
            <View style={[styles.cardBG, {gap: 8}]} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: employee.image}}
                  style={{width: 32, height: 32, borderRadius: 32}}
                />
                <View style={{width: '85%'}}>
                  <Text
                    style={[
                      styles.infoOneMain,
                      {...typography.medium.paragraphMid},
                    ]}>
                    {employee.name}
                  </Text>
                  <Text style={[styles.infoSub, {textTransform: 'uppercase'}]}>
                    {employee.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={[styles.infoSub]}>{employee.phone}</Text>
                    <TouchableOpacity
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => handleCopy(employee.phone)}>
                      {copied ? (
                        <Text style={[styles.copied]}>Copied</Text>
                      ) : (
                        <Icon name="copy" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <Text style={styles.cardText}>
                {employeeBio.paragraph}
                {employeeBio.button}
              </Text>
            </View>
          );
        })}
      </ScrollableSection>
      {/* Team Ends */}
      {/* Company Details Begins */}
      <StaticSection heading="Company Details" gap={4}>
        <View style={[styles.cardBG, {gap: 16, marginRight: 24}]}>
          <Characteristics
            row
            label="Legal Name"
            value={content.company.legal_name}
          />
          <Characteristics
            row
            label="Employees"
            value={content.company.employees}
          />
          <Characteristics
            row
            label="Website"
            value={content.company.website}
          />
          <Characteristics
            row
            label="Phone"
            value={content.company.phone.map(
              (number: string) => '+' + number + ', ',
            )}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.infoSub}>Socials</Text>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Pressable
                onPress={() => Linking.openURL(content.company.socials[0])}>
                <Icon name="facebook" />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(content.company.socials[0])}>
                <Icon name="twitter" />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(content.company.socials[0])}>
                <Icon name="instagram" />
              </Pressable>
            </View>
          </View>
          <Characteristics
            row
            label="Founded"
            value={content.company.founded}
          />
        </View>
      </StaticSection>
      {/* Company Details Ends */}

      {/* Testimonials Begins */}
      <ScrollableSection heading="Testimonials" gap={4} fillScreen horizontal>
        {content.testimonials.map((testimonial: any, index: React.Key) => {
          const testimonialText = GetContent(testimonial.testimonial);
          return (
            <View style={[styles.cardBG, {gap: 8}]} key={index}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <Image
                  source={{uri: testimonial.image}}
                  style={{width: 32, height: 32, borderRadius: 32}}
                />
                <View>
                  <Text
                    style={[
                      styles.infoOneMain,
                      {...typography.medium.paragraphMid},
                    ]}>
                    {testimonial.name}
                  </Text>
                  <Text style={styles.infoSub}>{testimonial.title}</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <Text style={styles.cardText}>
                {testimonialText.paragraph}
                {testimonialText.button}
              </Text>
            </View>
          );
        })}
      </ScrollableSection>
      {/* Testimonials Ends */}
      {/* Documents Begins */}
      <ScrollableSection heading="Documents" gap={4} fillScreen horizontal>
        {content.documents.map((document: any, index: React.Key) => {
          return (
            <View style={[styles.cardBG, {gap: 8, minHeight: 180}]} key={index}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <Icon name="document_outline" />
                <Text
                  style={[
                    styles.infoOneMain,
                    {...typography.medium.paragraphMid},
                  ]}>
                  {document.name}
                </Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.cardText}>{document.description}</Text>
              <Pressable
                onPress={() => {
                  Linking.openURL(document.url);
                  styles.link.textDecorationLine === 'underline'
                    ? 'none'
                    : 'underline';
                }}>
                <Text
                  style={[styles.cardText, styles.link, {color: colors.link}]}>
                  Download
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollableSection>
      {/* Documents Ends */}
    </View>
  );
};

// Real Estate Component Ends

// eslint-disable-next-line no-lone-blocks
/* {keys.map((content: string, index) => {
  let fullContent = MSFT.MSFT.Details[content];
  const fullContentLength = fullContent.length;
  const shortContent = fullContent.slice(0, 200) + '...';
  return (
    <StaticSection heading={content} gap={4} key={index}>
    <View style={styles.cardBG}>
    {showMore ? fullContent + ' ' : shortContent + ' '}
        <Text style={styles.cardText}>
          {fullContentLength > 200 && (
            <Text
              onPress={() => setShowMore(!showMore)}
              style={[styles.cardText, styles.link]}>
              {showMore ? 'show less' : 'more'}
            </Text>
          )}
        </Text>
        <Image source={{uri: ''}} alt="Image" style={styles.img} />
      </View>
    </StaticSection>
  );
})} */
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
    width: '100%',
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
});
