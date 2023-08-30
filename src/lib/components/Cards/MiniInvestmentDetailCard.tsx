import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import {addCommas} from '@/lib/utils/HelperFunctions';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface MiniInvestmentDetailCardPops {
  name: string;
  issuer: string;
  rate: number;
  amtRaised: number;
  price: number;
  valueCap: number;
  type: 'realEstate' | 'mutualFunds' | 'stocks' | 'startups' | 'savingsLock';
  image: number;
  term: number | string;
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
}: MiniInvestmentDetailCardPops) => {
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
        BottomText: 'Annually',
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
        TopText: '$' + valueCap + 'M',
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
        BottomText: term + '-yr maturity',
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
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapStart}>
          <Text
            style={[styles.mainText, styles.longText]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={[styles.subText, styles.longText]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {firstBlock()}
          </Text>
        </View>
        <View style={styles.wrapEnd}>
          <Text style={[styles.mainText, ratesStyle()!.TopText]}>
            {middleBlock()?.TopText}
          </Text>
          <Text style={[styles.subText, ratesStyle()!.BottomText]}>
            {middleBlock()?.BottomText}
          </Text>
        </View>
        <View style={styles.wrapEnd}>
          <Text style={[styles.mainText, ratesStyle()!.TopText]}>
            {lastBlock()?.TopText}
          </Text>
          <Text style={[styles.subText, ratesStyle()!.BottomText]}>
            {lastBlock()?.BottomText}
          </Text>
        </View>
      </View>
    </View>
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
    // shadowColor: colors.black_1,
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowRadius: 8,
    // elevation: 8,
    // shadowOpacity: 1,
  },
  imgWrap: {
    borderRadius: 50,
    width: 40,
    height: 40,
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
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  mainText: {
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
  },
  subText: {
    ...typography.regular.paragraphMid,
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
