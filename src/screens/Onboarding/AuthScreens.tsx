import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import {RootStackParams} from '@/navigation/RootStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
// import Icon from '@/assets/Icons';

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParams>;

export const SignInScreen = () => {
  return <AuthScreen variant="SignIn" />;
};

export const SignUpScreen = () => {
  return <AuthScreen variant="SignUp" />;
};

interface AuthScreenProps {
  variant: 'SignIn' | 'SignUp';
}

const AuthScreen = ({variant}: AuthScreenProps) => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const handleMainBtnPress = () => {
    if (variant === 'SignUp') {
      navigation.navigate('SecureInputScreen', {
        variant: 'OtpScreen',
        heading: 'Verify Email',
        subheading:
          'Please enter the 4 digit code sent to you email olasunkanmiidris15@gmail.com',
        pageId: 'OnboardingStackVerifyEmailScreen',
      });
    } else {
      navigation.navigate('UserIsLoggedInStack', {screen: 'UserDashboard'});
    }
  };

  const handleSecondaryBtnPress = () => {
    if (variant === 'SignUp') {
      navigation.push('SignInScreen');
    } else {
      navigation.push('OnboardingStack', {screen: 'SignUpScreen'});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.nav}>
        <Icon name="chevronLeft" />
      </View> */}
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          {variant === 'SignUp' ? 'Create Account' : 'Welcome Back'}
        </Text>
        <View style={styles.inputWrapper}>
          <BasicInput type="text" label="Email Address" autoComplete="email" />
          {variant === 'SignUp' ? (
            <BasicInput
              type="numeric"
              label="Phone Number"
              autoComplete="tel"
              extraInfo="e.g +234 812-3456-789"
            />
          ) : (
            <BasicInput
              iconEnd="eyeOff"
              label="Password"
              extraInfo="Must be 6 digits"
              type="password"
            />
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            variant="primary"
            label={variant === 'SignUp' ? 'Create Account' : 'Login'}
            onPress={handleMainBtnPress}
          />
          <CustomButton
            variant="text"
            onPress={handleSecondaryBtnPress}
            label={
              variant === 'SignUp'
                ? 'Log in to your account'
                : 'New User? Create Account'
            }
          />
        </View>
        <View>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>
          <CustomButton
            variant="socialAuth"
            label={
              variant === 'SignUp' ? 'Sign Up With Google' : 'Login With Google'
            }
            iconEnd="GoogleLogo"
          />
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
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.black_10,
    borderRadius: 50,
  },
  or: {
    ...typography.medium.paragraphNormal,
    color: colors.black_8,
  },
  divider: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  // nav: {
  //   marginTop: 24,
  //   marginBottom: 40,
  //   marginLeft: 8,
  // },
  heading: {
    ...typography.semiBold.heading05,
    color: colors.black_1,
    marginBottom: 48,
    marginTop: 96,
  },
  wrapper: {
    marginHorizontal: 24,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 32,
  },
  buttonWrapper: {
    gap: 4,
    marginBottom: 32,
  },
});
