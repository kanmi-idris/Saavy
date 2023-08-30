import colors from '@/assets/Colors';
import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';

interface ScrollProgressParams {
  data: Array<any>;
  scrollX: any;
}

const ScrollProgress = ({data, scrollX}: ScrollProgressParams) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.component1}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.activeBtn,
    borderColor: colors.activeBtn,
    marginHorizontal: 8,
    borderRadius: 50,
    borderWidth: 1,
    height: 8,
  },
  component1: {
    flexDirection: 'row',
  },
});

export default ScrollProgress;
