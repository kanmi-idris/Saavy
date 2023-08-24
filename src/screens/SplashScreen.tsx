import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import Icons from '@/assets/Icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '@/navigation/RootStackNavigator';
import InvestmentIllustration from '@/assets/images/investment-illustration.svg';

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dummyToken = () => {
    return Math.random() < 0.5;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const checkToken = () => {
        const token = dummyToken();

        if (token) {
          navigation.navigate('SignInScreen');
        } else {
          navigation.navigate('OnboardingStack', {
            WelcomeScreen: {
              PageTitle: 'Reach Your Financial Goals',
              IntroText:
                'Whether you want to save for retirement, buy a house, or fund your education, Saavy has the right solution for you.',
              Image: <InvestmentIllustration />,
            },
          });
        }
      };

      checkToken();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icons name="logo" />
        <Text style={styles.slogan}>Invest smarter, grow faster</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: colors.green_9,
  },
  wrapper: {
    gap: 16,
  },
  slogan: {
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
  },
});
