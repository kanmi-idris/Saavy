/* eslint-disable react-native/no-inline-styles */
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import {addCommas} from '@/lib/utils/HelperFunctions';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface MiniInvestmentDetailCardPops {
  name: string;
  issuer: string;
  rate: number;
  amtRaised: number;
  price: number;
  valueCap: number;
  type: 'realEstate' | 'mutualFunds' | 'stocks' | 'startups' | 'savingsLock';
  image: number | string;
  term: number | string;
  maturityStructure?: string;
  onPress: () => void;
}

const MiniInvestmentDetailCard = ({
  name,
  issuer,
  amtRaised,
  rate,
  price,
  image,
  type,
  term,
  valueCap,
  onPress,
  maturityStructure,
}: MiniInvestmentDetailCardPops) => {
  const [pressed, setPressed] = useState(false);

  const firstBlock = () => {
    if (type === 'startups') {
      const formattedAmt = addCommas(amtRaised);
      return '$' + formattedAmt + ' raised';
    } else {
      return issuer;
    }
  };

  const middleBlock = () => {
    if (type === 'realEstate' || type === 'mutualFunds') {
      return {
        TopText: rate + '%',
        BottomText: term,
      };
    } else if (type === 'startups') {
      return {
        TopText: '$' + price,
        BottomText: 'Min Invest',
      };
    } else {
      return {
        TopText: '',
        BottomText: '',
      };
    }
  };

  const lastBlock = () => {
    if (type === 'startups') {
      return {
        TopText: valueCap,
        BottomText: 'Value Cap',
      };
    } else if (type === 'stocks') {
      return {
        TopText: '$' + price,
        BottomText: rate + '%',
      };
    } else if (type === 'savingsLock') {
      return {
        TopText: rate + '%',
        BottomText: term,
      };
    } else {
      return {
        TopText: '$' + price,
        BottomText:
          type === 'mutualFunds' || type === 'realEstate'
            ? maturityStructure
            : term + '-yr maturity',
      };
    }
  };

  const ratesStyle = () => {
    const rateColor =
      Math.sign(rate) === -1 ? styles.negative : styles.positive;
    if (type === 'stocks' && rate) {
      return {
        TopText: styles.mainText,
        BottomText: rateColor,
      };
    } else if (type === 'savingsLock' && rate) {
      return {
        TopText: rateColor,
        BottomText: styles.subText,
      };
    } else {
      return {
        TopText: rateColor,
        BottomText: styles.subText,
      };
    }
  };

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: pressed ? colors.black_10 : colors.white},
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <View style={styles.imgWrap}>
        <Image
          source={typeof image === 'number' ? image : {uri: `${image}`}}
          style={styles.image}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapStart}>
          <Text
            style={[
              styles.mainText,
              {
                width:
                  type === 'mutualFunds' || type === 'realEstate' ? 71 : 100,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={[
              styles.subText,
              {
                width:
                  type === 'mutualFunds' || type === 'realEstate' ? 71 : 100,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {firstBlock()}
          </Text>
        </View>
        <View style={styles.wrapEnd}>
          <Text
            style={[
              styles.mainText,
              !(type === 'startups') && ratesStyle()!.TopText,
            ]}>
            {middleBlock()?.TopText}
          </Text>
          <Text style={[styles.subText, ratesStyle()!.BottomText]}>
            {middleBlock()?.BottomText}
          </Text>
        </View>
        <View style={styles.wrapEnd}>
          <Text
            style={[
              styles.mainText,
              !(
                type === 'mutualFunds' ||
                type === 'realEstate' ||
                type === 'startups'
              ) && ratesStyle()!.TopText,
            ]}>
            {lastBlock()?.TopText}
          </Text>
          <Text
            style={[
              styles.subText,
              !(
                type === 'mutualFunds' ||
                type === 'realEstate' ||
                type === 'startups'
              ) && ratesStyle()!.BottomText,
            ]}>
            {lastBlock()?.BottomText}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MiniInvestmentDetailCard;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imgWrap: {
    borderRadius: 50,
    width: 32,
    height: 32,
    backgroundColor: colors.green_9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapStart: {
    alignItems: 'flex-start',
    gap: 4,
  },
  wrapEnd: {
    alignItems: 'flex-end',
    gap: 4,
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 32,
  },
  mainText: {
    ...typography.medium.paragraphMid,
    color: colors.black_1,
  },
  subText: {
    ...typography.regular.paragraphSmall,
    color: colors.black_6,
  },
  longText: {
    width: 100,
  },
  negative: {
    color: colors.red_1,
  },
  positive: {
    color: colors.green_1,
  },
});
