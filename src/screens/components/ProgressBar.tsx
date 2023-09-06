import colors from '@/assets/Colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface progressBarProps {
  percent: number;
}

const ProgressBar = ({percent}: progressBarProps) => {
  return (
    <View style={styles.background}>
      <View style={[styles.progress, {width: `${percent}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 250,
    height: 6,
    backgroundColor: colors.black_10,
    borderRadius: 50,
    position: 'relative',
  },
  progress: {
    height: 6,
    backgroundColor: colors.green_1,
    position: 'absolute',
    borderRadius: 50,
  },
});

export default ProgressBar;
