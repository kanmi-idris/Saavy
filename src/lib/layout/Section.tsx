/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollViewProps,
} from 'react-native';
import ScrollProgress from '../components/ScrollProgress';

interface SectionProps extends ScrollViewProps {
  children: React.ReactNode;
  auxBtn?: boolean;
  heading?: string;
  horizontal?: boolean;
  fillScreen?: boolean;
  gap?: number;
  pagingEnabled?: boolean;
  scrollData?: any[];
  offset?: number;
}

export const ScrollableSection = ({
  children,
  heading,
  auxBtn,
  horizontal,
  fillScreen,
  // pagingEnabled,
  offset,
  scrollData,
}: SectionProps) => {
  const {width: SCREEN_WIDTH} = Dimensions.get('window');

  const data = React.Children.toArray(children);
  const renderItem = ({item}: {item: React.ReactNode}) => {
    return (
      <View
        style={[fillScreen ? {width: SCREEN_WIDTH - 50} : null, styles.item]}>
        {item}
      </View>
    );
  };

  const iconProps = {
    width: 12,
    height: 12,
    stroke: colors.black_6,
    viewBox: '0 0 20 20',
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList | null>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View
        style={[
          fillScreen ? {width: SCREEN_WIDTH - 50} : null,
          styles.headingWrapper,
        ]}>
        {heading && <Text style={styles.heading}>{heading}</Text>}
        {auxBtn && (
          <Pressable style={styles.filterByParent}>
            <Text style={styles.filterBy}>Filter By</Text>
            <Icon name="chevronDown" {...iconProps} />
          </Pressable>
        )}
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.flatlist}
        horizontal={horizontal}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        // pagingEnabled={pagingEnabled}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        // The following props are related to the snap feature
        snapToInterval={offset && SCREEN_WIDTH - offset} // The interval to snap to, in pixels
        snapToAlignment="center" // The alignment of the snapped item, can be "start", "center" or "end"
        decelerationRate="fast" // The speed of the scroll deceleration, can be a number or "normal" or "fast"
      />
      {scrollData && (
        <ScrollProgress
          data={scrollData}
          scrollX={scrollX}
          style={{marginTop: 4, alignSelf: 'center'}}
        />
      )}
    </View>
  );
};

export const StaticSection = ({
  children,
  heading,
  auxBtn,
  gap,
}: SectionProps) => {
  const iconProps = {
    width: 12,
    height: 12,
    stroke: colors.black_6,
    viewBox: '0 0 20 20',
  };
  return (
    <View style={{gap: gap}}>
      <View style={[styles.headingWrapper]}>
        <Text style={styles.heading}>{heading}</Text>
        {auxBtn && (
          <Pressable style={styles.filterByParent}>
            <Text style={styles.filterBy}>Filter By</Text>
            <Icon name="chevronDown" {...iconProps} />
          </Pressable>
        )}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  headingWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    ...typography.medium.paragraphMid,
    color: colors.black_1,
    textTransform: 'capitalize',
  },
  filterByParent: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  filterBy: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  item: {
    marginRight: 12,
  },
  list: {
    // overflow: 'visible',
  },
  flatlist: {
    alignItems: 'stretch',
    paddingEnd: 8,
  },
});
