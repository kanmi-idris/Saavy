import React, {StrictMode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from '@/assets/Colors';
import MiniInvestmentDetailCard from './lib/components/Cards/MiniInvestmentDetailCard';

function App(): JSX.Element {
  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={colors.black_1} // set the background color of the status bar
          barStyle="light-content" // set the text color of the status bar to dark
          hidden={false} // show the status bar
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
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.green_9,
  },
  icon: {
    color: colors.green_1,
  },
});

export default App;
