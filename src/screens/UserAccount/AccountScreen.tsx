import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import WelcomeBar from '@/lib/components/WelcomeBar';
import formatAmt from '@/lib/utils/formatAmount';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AccountScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.baseContainer}>
      <ScrollView>
        <WelcomeBar
          heading="Inumidun Lois"
          subheading="User Id: #8324569"
          image={require('@/assets/images/avatar.png')}
          style={{marginVertical: 16}}
          variant="settings"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

interface BalanceProps {
  image: string | number;
  label: string;
  currency: string;
  onPress: () => void;
  value: number;
}
export const AccountBalance = ({
  label,
  value,
  currency,
  image,
}: BalanceProps) => {
  return (
    <View>
      <View style={[styles.row, {gap: 4}]}>
        <View style={styles.imgBg}>
          <Image source={typeof image === 'string' ? {uri: image} : image} />
        </View>
        <Text>{label}</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text>{currency + formatAmt(value)}</Text>
        <View style={[styles.row, {gap: 4}]}>
          <Text>Fund Wallet</Text>
          <Icon name="plusCircle_1" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flexGrow: 1,
    backgroundColor: colors.green_9,
    paddingHorizontal: 24,
  },
  container: {
    padding: 16,
    borderRadius: 8,
  },
  imgBg: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
