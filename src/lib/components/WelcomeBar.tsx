import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {WelcomeBarProps} from 'types';

const WelcomeBar = ({
  newNotifications,
  heading,
  subheading,
  image,
  style,
  variant,
}: WelcomeBarProps) => {
  const iconProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 20 20',
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.welcomeText}>{heading}</Text>
          <Text style={styles.moreInfo}>{subheading}</Text>
        </View>
      </View>
      <Pressable style={styles.notificationWrapper}>
        {newNotifications && <View style={styles.badge} />}
        <Icon
          name={variant === 'notification' ? 'bell' : 'settings'}
          {...iconProps}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  welcomeText: {
    ...typography.semiBold.paragraphNormal,
    color: colors.black_1,
  },
  moreInfo: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  badge: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: colors.red_1,
    width: 8,
    height: 8,
    right: 3,
    top: 0,
    zIndex: 1000,
  },
  image: {
    width: 40,
    height: 40,
  },
  notificationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeBar;
