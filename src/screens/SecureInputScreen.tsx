import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  useNavigation,
  useRoute,
  RouteProp,
  CompositeNavigationProp,
} from '@react-navigation/native';
import Icon from '@/assets/Icons';
import SecurePinInput from '@/lib/components/FormInputs/SecurePinInput';
import {RootStackParams} from '@/navigation/RootStackNavigator';
import {OnboardingStackParams} from '@/navigation/OnboardingScreensStack';

type SecureInputScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParams, 'FeedbackScreen'>,
  NativeStackNavigationProp<OnboardingStackParams, 'KycScreen'>
>;

const SecureInputScreen = () => {
  const navigation = useNavigation<SecureInputScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParams, 'SecureInputScreen'>>();

  const [pin, setPin] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);

  const MAX_LENGTH = 4;

  const handleMainBtnPress = () => {
    if (route.params.pageId === 'OnboardingStackVerifyEmailScreen') {
      navigation.navigate('FeedbackScreen', {
        heading: 'Verified',
        subheading: 'Your account has been successfully verified',
        ButtonLabel: 'Create Password',
        pageId: 'OnboardingStackVerifyEmailFeedbackScreen',
        variant: 'successful',
      });
    } else if (route.params.pageId === 'OnboardingStackCreatePasswordScreen') {
      navigation.navigate('KycScreen', {
        heading: 'Complete Your Profile',
        subheading:
          'Tell us more about yourself, to help personalize your experience.',
        pageId: 'OnboardingStackFirstCompleteYourProfileScreen',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Icon name="chevronLeft" onPress={navigation.goBack} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{route.params.heading}</Text>
          <Text style={styles.subheading}>{route.params.subheading}</Text>
        </View>
        <View style={styles.inputWrapper}>
          <SecurePinInput
            pin={pin}
            setPin={setPin}
            maxLength={MAX_LENGTH}
            setIsPinReady={setIsPinReady}
          />
          {route.params.variant === 'OtpScreen' && (
            <Pressable>
              <Text style={styles.resendOtpText}>Resend Code</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            variant="primary"
            label="Confirm"
            onPress={handleMainBtnPress}
            disable={isPinReady ? false : true}
          />
          {route.params.variant === 'OtpScreen' && (
            <Pressable>
              <Text style={styles.changeModeOfOtpContact}>
                Change Email Address
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green_9,
  },
  nav: {
    marginTop: 24,
    marginBottom: 40,
    marginLeft: 8,
  },
  heading: {
    ...typography.semiBold.heading05,
    color: colors.black_1,
  },
  headingWrapper: {
    marginBottom: 32,
    gap: 8,
  },
  wrapper: {
    marginHorizontal: 24,
  },
  subheading: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 32,
  },
  resendOtpText: {
    ...typography.regular.paragraphMid,
    color: colors.black_2,
    textAlign: 'center',
  },
  changeModeOfOtpContact: {
    ...typography.underline.paragraphReg,
    color: colors.black_2,
    textAlign: 'center',
  },
  buttonWrapper: {
    gap: 8,
    marginBottom: 32,
  },
});

export default SecureInputScreen;
