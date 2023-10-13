import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MainInfoCard from './components/MainInfoCard';
import colors from '@/assets/Colors';
import {StaticSection} from '@/lib/layout/Section';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import MSFT from '@/screens/Investing/api/dummyDB/MSFT.json';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const AboutInvestment = () => {
  const [showMore, setShowMore] = useState(false);
  const keys = Object.keys(MSFT.MSFT.Details);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.mainContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never">
        <MainInfoCard
          type="mutual-funds"
          heading="Pax Large Cap Fund (PAXLX)"
          subheading="Impax Asset Management LLC"
          value1="6.49%"
          label1="Annual Returns"
          value2="1.32%"
          label2="Moderate Risk"
          status="gain"
          marketStatus=""
          label3=""
          label4=""
          value3=""
          value4=""
        />
        {keys.map((content: string, index) => {
          let fullContent = MSFT.MSFT.Details[content];
          const fullContentLength = fullContent.length;
          const shortContent = fullContent.slice(0, 200) + '...';
          return (
            <StaticSection heading={content} gap={4} key={index}>
              <View style={styles.cardBG}>
                <Text style={styles.cardText}>
                  {showMore ? fullContent + ' ' : shortContent + ' '}
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
        })}
        <StaticSection heading="prospectus" gap={4}>
          <View style={styles.cardBG}>
            <Text style={styles.cardText}>
              The prospectus is a document that provides a detailed
              documentation about this investment
            </Text>
            <Pressable onPress={() => {}}>
              <Text
                style={[styles.cardText, styles.link, {color: colors.link}]}>
                Download Prospectus
              </Text>
            </Pressable>
          </View>
        </StaticSection>
      </ScrollView>
      <CustomButton variant="primary" label="Invest Now" style={styles.btn} />
    </View>
  );
};

export default AboutInvestment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  mainContent: {
    gap: 24,
    paddingBottom: 150,
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
});
