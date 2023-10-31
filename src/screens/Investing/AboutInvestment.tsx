/* eslint-disable prettier/prettier */
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
import React, {useCallback, useContext, useEffect, useState} from 'react';
import MainInfoCard from './components/MainInfoCard';
import colors from '@/assets/Colors';
import {ScrollableSection, StaticSection} from '@/lib/layout/Section';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import Icon from '@/assets/Icons';
import formatAmt from '@/lib/utils/formatAmount';
import {copyToClipboard} from '@/lib/utils/copyToClipboard';
import YoutubePlayer from 'react-native-youtube-iframe';
import {InvestmentContext} from '@/lib/components/InvestmentSuitesScroll';
import {GetContent, findById} from './utils/utils';
import {AboutInvestmentAPIs} from './navigation/InvestmentDetailScreensNavigator';
import {useIsFocused} from '@react-navigation/native';
import Pinchable from 'react-native-pinchable';

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

const RenderImage = ({source}: {source: string[]}) => {
  const [imgHeight, setImgHeight] = useState(0);
  return (
    <>
      {source.map((image: string, index: number) => (
        <Pinchable key={index}>
          <Image
            key={index}
            source={{
              uri: image,
            }}
            resizeMode="stretch"
            alt="Image"
            style={[styles.img, {height: imgHeight - 65, width: 'auto'}]}
            onLoad={() => {
              Image.getSize(image, (width, height) => {
                // calculate image width and height
                const screenWidth = Dimensions.get('window').width;
                const scaleFactor = width / screenWidth;
                const imageHeight = height / scaleFactor;
                // set the state values for image width and height
                setImgHeight(imageHeight);
              });
            }}
          />
        </Pinchable>
      ))}
    </>
  );
};

const Startups = ({content}: {content: any}) => {
  const problem = GetContent(content.problem.intro);
  const solution = GetContent(content.solution.intro);
  const product = GetContent(content.product.intro);
  const traction = GetContent(content.traction.intro);
  const partnerships = GetContent(content.partnerships.intro);
  const customers = GetContent(content.customers.intro);
  const business_model = GetContent(content.business_model.intro);
  const market = GetContent(content.market.intro);
  const competition = GetContent(content.competition.intro);
  const vision_and_strategy = GetContent(content.vision_and_strategy.intro);
  const opinion = GetContent(content.opinion);
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

  // Playing Videos using youtube Iframe
  const isFocused = useIsFocused();
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  return (
    <ScrollView
      overScrollMode="never"
      bounces={false}
      contentContainerStyle={[
        styles.mainContent,
        {paddingRight: 0, marginBottom: 100},
      ]}>
      {/* Video Begins */}
      <ScrollableSection
        horizontal
        fillScreen
        scrollData={content.videos}
        offset={38}>
        {content.videos.map((video: string, index: number) => (
          <View key={index} style={styles.video}>
            <YoutubePlayer
              height={175}
              play={isFocused && playing}
              videoId={video}
              onChangeState={onStateChange}
              initialPlayerParams={{controls: false, rel: true}}
            />
          </View>
        ))}
      </ScrollableSection>
      {/* Video Ends */}
      <View style={{marginRight: 24}}>
        <MainInfoCard
          type="startups"
          image={content.logo}
          heading={content.name}
          subheading={content.tagline}
          value1={'$' + content.valuation_cap}
          label1={'Valuation Cap'}
          value2={'$' + content.min_investment}
          label2="Min Investment"
          label3="Maturity Period"
          label4="Funding Deadline"
          value3={content.maturity_period}
          value4={content.funding_deadline}
        />
      </View>
      {/* Highlights Begins */}
      <StaticSection heading="Highlights" gap={4}>
        <View style={[styles.cardBG, {gap: 4, marginRight: 24}]}>
          {content.highlights.map((item: string, index: React.Key) => (
            <Text style={[styles.cardText]} key={index}>
              {'•  ' + item}
            </Text>
          ))}
        </View>
      </StaticSection>
      {/* Highlights Ends */}
      {/* Problem Begins */}
      <StaticSection heading="Problem" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {problem.paragraph} {problem.button}
          </Text>
          <RenderImage source={content.problem.image} />
        </View>
      </StaticSection>
      {/* Problem Ends */}
      {/* Solution Begins */}
      <StaticSection heading="Solution" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {solution.paragraph} {solution.button}
          </Text>
          <RenderImage source={content.solution.image} />
        </View>
      </StaticSection>
      {/* Solution Ends */}
      {/* Product Begins */}
      <StaticSection heading="Product" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {product.paragraph} {product.button}
          </Text>
          <RenderImage source={content.product.image} />
        </View>
      </StaticSection>
      {/* Product Ends */}
      {/* Traction Begins */}
      <StaticSection heading="Traction" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {traction.paragraph} {traction.button}
          </Text>
          <RenderImage source={content.traction.image} />
        </View>
      </StaticSection>
      {/* Traction Ends */}
      {/* Partnerships Begins */}
      <StaticSection heading="Partnerships" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {partnerships.paragraph} {partnerships.button}
          </Text>
          <RenderImage source={content.partnerships.image} />
        </View>
      </StaticSection>
      {/* Partnerships Ends */}
      {/* customers Begins */}
      <StaticSection heading="customers" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {customers.paragraph} {customers.button}
          </Text>
          <RenderImage source={content.customers.image} />
        </View>
      </StaticSection>
      {/* customers Ends */}
      {/* Business Model Begins */}
      <StaticSection heading="Business Model" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {business_model.paragraph} {business_model.button}
          </Text>
          <RenderImage source={content.business_model.image} />
        </View>
      </StaticSection>
      {/* Business Model Ends */}
      {/* market Begins */}
      <StaticSection heading="market" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {market.paragraph} {market.button}
          </Text>
          <RenderImage source={content.market.image} />
        </View>
      </StaticSection>
      {/* market Ends */}
      {/* competition Begins */}
      <StaticSection heading="competition" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {competition.paragraph} {competition.button}
          </Text>
          <RenderImage source={content.competition.image} />
        </View>
      </StaticSection>
      {/* competition Ends */}
      {/* vision and strategy Begins */}
      <StaticSection heading="market" gap={4} fillScreen>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {vision_and_strategy.paragraph} {vision_and_strategy.button}
          </Text>
          <RenderImage source={content.vision_and_strategy.image} />
        </View>
      </StaticSection>
      {/* vision and strategy Ends */}
      {/* Team Begins */}
      <ScrollableSection
        heading="Team"
        gap={4}
        fillScreen
        horizontal
        offset={35}>
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
      <ScrollableSection
        heading="Testimonials"
        gap={4}
        fillScreen
        horizontal
        offset={35}>
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
      {/* Our Opinion Begins */}
      <StaticSection heading="Our Opinion" gap={4}>
        <View style={[styles.cardBG, {marginRight: 24}]}>
          <Text style={styles.cardText}>
            {opinion.paragraph} {opinion.button}
          </Text>
        </View>
      </StaticSection>
      {/* Our Opinion Ends */}
    </ScrollView>
  );
};

// Real Estate Component Starts
export const Characteristics = ({
  label,
  value,
  row,
  split,
}: {
  label: string;
  value: string;
  row?: boolean;
  split?: boolean;
}) => (
  <View
    style={
      row ? {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'} : {gap: 4}
    }>
    <Text style={styles.infoSub}>{label}</Text>
    <Text
      style={[
        styles.infoOneMain,
        {
          width: split ? '50%' : undefined,
          textAlign: split ? 'right' : undefined,
        },
      ]}>
      {value}
    </Text>
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
                <View key={index}>
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

  // Playing Videos using youtube Iframe
  const isFocused = useIsFocused();
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={[styles.mainContent, {paddingRight: 0}]}>
      {/* Video Begins */}
      <ScrollableSection
        horizontal
        fillScreen
        scrollData={content.videos}
        offset={38}>
        {content.videos.map((video: string, index: number) => (
          <View key={index} style={styles.video}>
            <YoutubePlayer
              height={175}
              play={isFocused && playing}
              videoId={video}
              onChangeState={onStateChange}
              initialPlayerParams={{controls: false, rel: true}}
            />
          </View>
        ))}
      </ScrollableSection>
      {/* Video Ends */}
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
      <ScrollableSection
        heading="Team"
        gap={4}
        fillScreen
        horizontal
        offset={35}>
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
      <ScrollableSection
        heading="Testimonials"
        gap={4}
        fillScreen
        horizontal
        offset={35}>
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
});
