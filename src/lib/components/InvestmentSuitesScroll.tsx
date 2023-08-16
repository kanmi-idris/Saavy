// Navigation Tab buttons and Investment Suites Buttons
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, ScrollView} from 'react-native';

const InvestmentSuites = () => {
  const [pressed, setPressed] = useState(-1);
  const label = [
    'Mutual Funds',
    'Stocks',
    'Real Estate',
    'Savings Lock',
    'Startups',
  ];

  const iconProps = {
    width: 16,
    height: 16,
    stroke: colors.link,
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Investment Suites</Text>
        <Pressable
          style={styles.defaultLink}
          onPressIn={() => setPressed(10)}
          onPressOut={() => setPressed(-1)}>
          <Icon name="helpCircle" {...iconProps} />
          <Text
            style={pressed === 10 ? styles.activeLinkText : styles.linkText}>
            Learn to invest
          </Text>
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={styles.btnWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {label.map((content, index) => (
          <Pressable
            key={index}
            style={pressed === index ? activeBtn : defaultBtn}
            onPressIn={() => setPressed(index)}>
            <Text style={styles.btnLabel}>{content}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default InvestmentSuites;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  headingWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
  },
  linkText: {
    ...typography.underline.paragraphMid,
    color: colors.link,
  },
  activeLinkText: {
    ...typography.semiBold.paragraphMid,
    color: colors.link,
  },
  defaultLink: {
    flexDirection: 'row',
    gap: 4,
  },
  btnWrapper: {
    gap: 8,
  },
  baseBtnStyle: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  defaultBtnStyle: {
    backgroundColor: colors.green_8,
  },
  activeBtnStyle: {
    backgroundColor: colors.activeBtn,
  },
  btnLabel: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
  },
});

const defaultBtn = StyleSheet.compose(
  styles.baseBtnStyle,
  styles.defaultBtnStyle,
);

const activeBtn = StyleSheet.compose(
  styles.baseBtnStyle,
  styles.activeBtnStyle,
);
