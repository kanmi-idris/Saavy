import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface RecommendationCardProps {
  title: string;
  subtitle: string;
  subtext1: string | number;
  subtext2: number;
  type: string;
  image: number;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 56) / 2;

const RecommendationCard = ({
  title,
  subtitle,
  subtext1,
  subtext2,
  image,
  type,
}: RecommendationCardProps) => {
  const subtext2Type = () => {
    if (type === 'Startup') {
      return '$' + subtext2;
    } else {
      return subtext2 + '%';
    }
  };

  const subtext1Type = () => {
    if (type === 'Stock') {
      return '$' + subtext1;
    } else if (type === 'Startup') {
      return '$' + subtext1 + 'Cap';
    } else {
      return subtext1;
    }
  };
  return (
    <View style={styles.cardStyle}>
      <View style={styles.topWrap}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.bottomWrap}>
        <Text style={styles.subtext1}>{subtext1Type()}</Text>
        <Text style={styles.subtext2_stocks}>{subtext2Type()}</Text>
      </View>
    </View>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bottomWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  title: {
    ...typography.medium.paragraphMid,
    color: colors.white,
    width: 100,
  },
  subtitle: {
    ...typography.regular.paragraphSmall,
    color: colors.white,
    width: 95,
  },
  subtext1: {
    ...typography.medium.paragraphMid,
    color: colors.white,
  },
  subtext2_stocks: {
    ...typography.medium.paragraphMid,
    color: colors.green_1,
  },
  btnWrapper: {
    gap: 8,
  },
  cardStyle: {
    borderRadius: 8,
    padding: 12,
    gap: 8,
    minWidth: CARD_WIDTH,
    maxWidth: 200,
    backgroundColor: colors.black_4,
  },
  btnLabel: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
  },
});
