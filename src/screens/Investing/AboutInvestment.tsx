import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainInfoCard from './components/MainInfoCard';
import colors from '@/assets/Colors';

const AboutInvestment = () => {
  return (
    <View style={styles.container}>
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
      <MainInfoCard
        type="stocks"
        heading="MSFT"
        subheading="Microsoft Corporation"
        value1="$337.22"
        label1="Min Investment"
        value2="2.50%"
        label2="Moderate Risk"
        label3="Market Condition"
        status="loss"
        marketStatus="closed"
        label4=""
        value3=""
        value4=""
      />
      <MainInfoCard
        type="savings-lock"
        heading="FairLock"
        subheading="Fairmoney Microfinance Bank"
        value1="2.50%"
        label1="Monthly Returns"
        value2="2.50%"
        label2="Low Risk"
        status="loss"
        marketStatus=""
        label3=""
        label4=""
        value3=""
        value4=""
      />
      <MainInfoCard
        type="real-estate"
        heading="Rentberry"
        subheading="The first global home rental platform with full automation!"
        value1="$25M"
        label1="Valuation Cap"
        value2="$250"
        label2="Min Investment"
        status="loss"
        label3="Maturity Period"
        value3="7 years"
        label4="Funding Deadline"
        value4="August 23, 2023"
        marketStatus=""
      />
    </View>
  );
};

export default AboutInvestment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingHorizontal: 24,
    gap: 8,
  },
});
