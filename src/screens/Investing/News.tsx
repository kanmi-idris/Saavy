import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InvestmentNews = () => {
  return (
    <View style={styles.container}>
      <Text>InvestmentNews</Text>
    </View>
  );
};

export default InvestmentNews;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});
