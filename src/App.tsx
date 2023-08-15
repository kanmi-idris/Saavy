import React, {StrictMode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from '@/assets/Colors';
import CustomButton from './lib/components/Button/CustomButton';

function App(): JSX.Element {
  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={colors.black_1} // set the background color of the status bar
          barStyle="light-content" // set the text color of the status bar to dark
          hidden={false} // show the status bar
        />
        <CustomButton
          disable={false}
          label="Get Started"
          iconEnd="arrowRight"
          iconStart="home"
          variant="text"
        />
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  icon: {
    color: colors.green_1,
  },
});

export default App;
