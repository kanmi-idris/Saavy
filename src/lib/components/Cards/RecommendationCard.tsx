import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface RecommendationCardProps {
  title: string;
  subtitle: string;
  subtext1: string | number;
  subtext2: number;
  type: 'default' | 'stocks' | 'startups';
  image: number;
}

const RecommendationCard = ({
  title,
  subtitle,
  subtext1,
  subtext2,
  image,
  type,
}: RecommendationCardProps) => {
  const subtext2Type = () => {
    if (type === 'startups') {
      return '$' + subtext2;
    } else {
      return subtext2 + '%';
    }
  };

  const subtext1Type = () => {
    if (type === 'stocks') {
      return '$' + subtext1;
    } else if (type === 'startups') {
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
          <Text style={styles.title}>{title}</Text>
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
    maxWidth: 150,
    backgroundColor: colors.black_4,
  },
  btnLabel: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
  },
});