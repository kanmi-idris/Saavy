import React, {useState, useRef} from 'react';
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import strings from '@/assets/Strings';
import typography from '@/assets/Typography';
import CustomButton from '@/lib/components/Button/CustomButton';
import ScrollProgress from '@/lib/components/ScrollProgress';
import {OnboardingStackParams} from '@/navigation/OnboardingScreensStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Animated,
} from 'react-native';

type WelcomeScreenNavigationProp =
  NativeStackNavigationProp<OnboardingStackParams>;

const WelcomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList | null>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollBack = () => {
    if (currentIndex > 0 && currentIndex < strings.onboarding.welcome.length) {
      slidesRef.current?.scrollToIndex({index: currentIndex - 1});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Icon name="chevronLeft" onPress={scrollBack} />
        <ScrollProgress data={strings.onboarding.welcome} scrollX={scrollX} />
      </View>
      <FlatList
        data={strings.onboarding.welcome}
        renderItem={({item}) => (
          <SingleWelcomeScreen
            item={item}
            currentIndex={currentIndex}
            slidesRef={slidesRef}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

interface SingleWelcomeScreenProps {
  item: any;
  currentIndex: any;
  slidesRef: any;
}

const SingleWelcomeScreen = ({
  item,
  currentIndex,
  slidesRef,
}: SingleWelcomeScreenProps) => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const illustrationProps = {
    width: 350,
    height: 350,
  };
  const {width} = useWindowDimensions();

  let data = strings.onboarding.welcome;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('SignUpScreen');
    }
  };

  return (
    <View style={{width: width}}>
      <View style={styles.illustration}>
        <Icon name={item.illustration} {...illustrationProps} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={item.id !== 4 ? styles.button : styles.lastButton}>
        <CustomButton
          label={item.id === 4 ? 'Get Started' : undefined}
          iconEnd="arrowRight"
          variant="primary"
          onPress={scrollTo}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green_9,
  },
  nav: {
    marginTop: 24,
    marginBottom: 40,
    marginLeft: 8,
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  heading: {
    textAlign: 'center',
    color: colors.black_1,
    ...typography.semiBold.heading06,
  },
  text: {
    textAlign: 'center',
    color: colors.black_1,
    ...typography.regular.paragraphNormal,
    lineHeight: 19,
  },
  contentContainer: {
    gap: 16,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  button: {
    paddingHorizontal: '42%',
  },
  lastButton: {
    paddingHorizontal: '30%',
  },
});
