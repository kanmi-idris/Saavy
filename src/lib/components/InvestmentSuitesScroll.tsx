import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, ScrollView} from 'react-native';

/*This is a component that displays different investment suites for the user
 * It takes two props: heading and auxButton
 * The heading prop is a string that specifies the title of the component
 * The auxButton prop is a boolean that determines whether to show an auxiliary button next to the heading
 * The auxiliary button is a link that says "Learn to invest" and has a help circle icon
 * The component uses colors, icons, and typography from the assets folder
 * The component uses a state variable called pressed to keep track of which option is pressed by the user
 * The component uses a ScrollView to render the options horizontally and allow scrolling
 * The component uses Pressable components to create the options and the auxiliary button
 * The component uses Text components to display the labels of the options and the heading
 * The component uses Icon components to display the icons of the options and the auxiliary button
 * The component uses StyleSheet to create and compose styles for the elements
 * Usage: <InvestmentSuites heading="Investment Suites" auxButton />
 * */

interface InvestmentSuitesProps {
  auxButton: boolean;
  heading: string;
}

const InvestmentSuites = ({heading, auxButton}: InvestmentSuitesProps) => {
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
        <Text style={styles.heading}>{heading}</Text>
        {auxButton && (
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
        )}
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