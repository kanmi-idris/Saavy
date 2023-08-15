import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import Icons from '@/assets/Icons';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icons.logo />
        <Text style={styles.slogan}>Invest smarter, grow faster</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: colors.green_9,
  },
  wrapper: {
    gap: 16,
  },
  slogan: {
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
  },
});
