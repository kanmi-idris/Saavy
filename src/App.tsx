import React, {StrictMode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import colors from '@/assets/Colors';
import BasicInput from './lib/components/FormInputs/BasicInput';
import {ScrollableSection} from './lib/layout/Section';
import MiniInvestmentDetailCard from './lib/components/Cards/MiniInvestmentDetailCard';

function App(): JSX.Element {
  const SecureinputFields = new Array(4).fill(0);
  console.log(SecureinputFields);

  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={colors.black_1} // set the background color of the status bar
          barStyle="light-content" // set the text color of the status bar to dark
          hidden={false} // show the status bar
        />
        <View style={styles.wrapper}>
          <BasicInput
            label="Email"
            type="numeric"
            placeholder="Enter Email"
            // disabled
          />
          <BasicInput
            label="Password"
            extraInfo="Must be 6 digits"
            placeholder="Enter Pin"
            iconEnd="eyeOff"
            customOnFocus={() => {
              console.log('im working');
            }}
            type="password"
            // errorMessage="Please Enter Your 4 digit Pin"
          />
        </View>
        {/* <View style={styles.otp}>
          {SecureinputFields.map((field, index) => {
            const emptyInputChar = ' ';
            // const digit = code[index] || emptyInputChar;

            return (
              <BasicInput
                key={index}
                type="numeric"
                value={1}
                // disabled
              />
            );
          })}
        </View> */}
        <View>
          <ScrollableSection heading="Summary" horizontal auxBtn>
            <View style={styles.view}>
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
            <View style={styles.view}>
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
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.green_9,
    justifyContent: 'center',
  },
  wrapper: {
    gap: 16,
  },
  icon: {
    color: colors.green_1,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  view: {
    gap: 8,
  },
});

export default App;
