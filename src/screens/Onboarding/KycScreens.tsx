import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import {Dropdown} from '@/lib/components/FormInputs/SelectionInput';
import {OnboardingStackParams} from '@/navigation/OnboardingScreensStack';
import {RootStackParams} from '@/navigation/RootStackNavigator';
import {
  useNavigation,
  useRoute,
  RouteProp,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const KycScreens = () => {
  const navigation =
    useNavigation<
      CompositeNavigationProp<
        NativeStackNavigationProp<OnboardingStackParams, 'KycScreen'>,
        NativeStackNavigationProp<RootStackParams, 'UserIsLoggedInStack'>
      >
    >();

  const route = useRoute<RouteProp<RootStackParams, 'SecureInputScreen'>>();

  const handleMainBtnPress = () => {
    if (
      route.params.pageId === 'OnboardingStackFirstCompleteYourProfileScreen'
    ) {
      navigation.push('KycScreen', {
        heading: 'Complete Your Profile',
        subheading:
          'Tell us more about yourself, to help personalize your experience.',
        pageId: 'OnboardingStackSecondCompleteYourProfileScreen',
      });
    } else if (
      route.params.pageId === 'OnboardingStackSecondCompleteYourProfileScreen'
    ) {
      navigation.push('KycScreen', {
        heading: 'Add Your Banking Details',
        subheading:
          'We want to make sure that we provide you with the best possible experience on our platform. ',
        pageId: 'OnboardingStackAddBankingDetailsScreen',
      });
    } else if (
      route.params.pageId === 'OnboardingStackAddBankingDetailsScreen'
    ) {
      navigation.push('KycScreen', {
        heading: 'Protect Your Account',
        subheading:
          'We care about your account safety and want to provide a secure platform experience.',
        pageId: 'OnboardingStackProtectAccountScreen',
      });
    } else if (route.params.pageId === 'OnboardingStackProtectAccountScreen') {
      navigation.push('KycScreen', {
        heading: 'Emergency Contact',
        subheading:
          'Please provide the name and phone number of your next of kin to be used in case of an emergency.',
        pageId: 'OnboardingStackEmergencyContactScreen',
      });
    } else {
      navigation.navigate('UserIsLoggedInStack', {screen: 'UserDashboard'});
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
          <Text style={styles.subheading}> {route.params.subheading}</Text>
        </View>
        <UniqueKycScreen pageId={route.params.pageId} />
        <CustomButton
          variant="primary"
          label={
            route.params.pageId === 'OnboardingStackEmergencyContactScreen'
              ? 'Proceed to Dashboard'
              : 'Next'
          }
          onPress={handleMainBtnPress}
          iconEnd={
            route.params.pageId === 'OnboardingStackEmergencyContactScreen'
              ? undefined
              : 'arrowRight'
          }
        />
      </View>
    </SafeAreaView>
  );
};

interface props {
  pageId: string;
}

const UniqueKycScreen = ({pageId}: props) => {
  const [selected, setSelected] = useState<string>('');

  if (pageId === 'OnboardingStackFirstCompleteYourProfileScreen') {
    return (
      <View style={styles.inputWrapper}>
        <BasicInput type="text" label="First Name" />
        <BasicInput type="text" label="Last Name" />
        <View style={styles.flex}>
          <BasicInput
            iconEnd="calendar"
            label="Age"
            extraInfo="e.g 2023-05-27"
            type="text"
            flex={1}
          />
          <Dropdown
            label={'Gender'}
            placeholder="Choose Gender"
            data={['Male', 'Female']}
            onSelect={setSelected}
            flex={1}
          />
        </View>
      </View>
    );
  } else if (pageId === 'OnboardingStackSecondCompleteYourProfileScreen') {
    return (
      <View style={styles.inputWrapper}>
        <BasicInput
          type="text"
          label="Home Address"
          extraInfo="e.g 15, Benson Avenue, Lagos, Nigeria"
        />
        <BasicInput type="text" label="Occupation" />
        <BasicInput type="text" label="Income" extraInfo="e.g 250,000 naira" />
      </View>
    );
  } else if (pageId === 'OnboardingStackAddBankingDetailsScreen') {
    return (
      <View style={styles.inputWrapper}>
        <BasicInput type="numeric" label="BVN" extraInfo="e.g  023456789" />
        <BasicInput type="text" label="Account Name" />
        <BasicInput
          type="numeric"
          label="Account Number"
          extraInfo="e.g  0456536668"
        />
        <Dropdown
          label={'Bank Name'}
          placeholder="Choose Bank"
          data={[
            'Zenith Bank',
            'Guaranty Trust Bank',
            'First Bank of Nigeria',
            'Ecobank Nigeria',
            'Access Bank',
            'United Bank for Africa',
            'Fidelity Bank',
            'First City Monument Bank',
            'Union Bank of Nigeria',
            'Sterling Bank',
          ]}
          onSelect={setSelected}
        />
      </View>
    );
  } else if (pageId === 'OnboardingStackProtectAccountScreen') {
    return (
      <View style={styles.inputWrapper}>
        <BasicInput type="numeric" label="NIN Number" />
        <BasicInput
          type="text"
          label="Profile Picture"
          extraInfo="Max Size: 2mb"
          iconEnd="uploadCloud"
          placeholder="Click Here to Upload Your Image"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.inputWrapper}>
        <BasicInput type="text" label="Name" />
        <BasicInput
          type="numeric"
          label="Phone Number"
          extraInfo="e.g +234 812-3456-789"
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green_9,
  },
  headingWrapper: {
    marginBottom: 32,
    gap: 8,
  },
  subheading: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
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
  wrapper: {
    marginHorizontal: 24,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 32,
  },
  flex: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default KycScreens;
