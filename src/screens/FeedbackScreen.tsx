import React from 'react';
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '@/navigation/RootStackNavigator';

const FeedbackScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParams, 'SecureInputScreen'>
    >();

  const route = useRoute<RouteProp<RootStackParams, 'FeedbackScreen'>>();

  const handleMainBtnPress = () => {
    if (route.params.pageId === 'OnboardingStackVerifyEmailFeedbackScreen') {
      navigation.push('SecureInputScreen', {
        variant: 'PasswordInputScreen',
        heading: 'Create Password',
        subheading: 'Please enter the 4 digit password',
        pageId: 'OnboardingStackCreatePasswordScreen',
      });
    }
  };

  const successIconProps = {
    width: 100,
    height: 100,
    viewBox: '0 0 24 24',
    strokeWidth: 0.6,
    stroke: colors.green_1,
    pathStroke: colors.green_1,
  };

  const failedIconProps = {
    width: 100,
    height: 100,
    viewBox: '0 0 60 60',
    strokeWidth: 1,
    stroke: colors.red_1,
    pathStroke: colors.red_1,
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Icon name="chevronLeft" onPress={navigation.goBack} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          {route.params.variant === 'successful' ? (
            <Icon name="CheckCircle" {...successIconProps} />
          ) : (
            <Icon name="X_Circle" {...failedIconProps} />
          )}
          <Text style={styles.heading}>{route.params.heading}</Text>
          <Text style={styles.subheading}>{route.params.subheading}</Text>
        </View>
        <CustomButton
          variant="primary"
          label={route.params.ButtonLabel}
          onPress={handleMainBtnPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: colors.green_9,
  },
  nav: {
    marginTop: 24,
    marginBottom: 60,
    marginLeft: 8,
  },
  heading: {
    ...typography.semiBold.heading05,
    color: colors.black_1,
    marginTop: 16,
  },
  wrapper: {
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 16,
  },
  subheading: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
    marginTop: 8,
  },
});

export default FeedbackScreen;
