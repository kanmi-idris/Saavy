import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface DisplayCardProps {
  trend: 'upward' | 'downward';
}

const DisplayCard = ({trend}: DisplayCardProps) => {
  const chartProps = {
    width: 150,
    height: 150,
    viewBox: '0 0 100 50',
    fill: trend === 'upward' ? colors.green_7 : colors.red_5,
    stroke: colors.green_7,
  };
  const btnIconProps = {
    stroke: colors.white,
    pathStroke: colors.white,
  };
  return (
    <View style={styles.container}>
      <View style={styles.valueWrapper}>
        <View>
          <Text style={styles.valueHeading}>Portfolio Value</Text>
          <Text style={styles.portfolioValue}>$375,000.00</Text>
        </View>
        <View>
          <Text style={styles.valueHeading}>Expected Profits</Text>
          <Text style={styles.expectedProfits}>$32,389.41</Text>
        </View>
      </View>
      <View>
        <View style={styles.chart}>
          <Text
            style={[
              styles.indicator,
              {color: trend === 'upward' ? colors.green_7 : colors.red_7},
            ]}>
            4.50%
          </Text>
          <Icon name="displayCardChart" {...chartProps} />
        </View>
        <Pressable style={styles.investBtn}>
          <Text style={styles.investBtnText}>Invest</Text>
          <Icon name="plusCircle_1" {...btnIconProps} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueWrapper: {
    marginLeft: 16,
    marginVertical: 12,
    gap: 20,
  },
  valueHeading: {
    ...typography.regular.paragraphMid,
    color: colors.white,
  },
  portfolioValue: {
    ...typography.semiBold.heading05,
    color: colors.white,
  },
  expectedProfits: {
    ...typography.semiBold.heading06,
    color: colors.white,
  },
  investBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    bottom: 22,
    right: 16,
  },
  investBtnText: {
    ...typography.semiBold.paragraphMid,
    color: colors.white,
  },
  indicator: {
    ...typography.semiBold.paragraphMid,
    position: 'absolute',
    top: 75,
    left: 49,
  },
  chart: {
    position: 'relative',
    top: -25,
  },
});

export default DisplayCard;
