import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Financials = () => {
  return (
    <View style={styles.container}>
      <Text>Financials</Text>
    </View>
  );
};

export default Financials;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});
