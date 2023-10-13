import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

interface SectionProps {
  children: React.ReactNode;
  auxBtn?: boolean;
  heading?: string;
  horizontal?: boolean;
  fillScreen?: boolean;
  gap?: number;
  pagingEnabled?: boolean;
}

export const ScrollableSection = ({
  children,
  heading,
  auxBtn,
  horizontal,
  fillScreen,
  pagingEnabled,
}: SectionProps) => {
  const {width} = Dimensions.get('window');

  const data = React.Children.toArray(children);
  const renderItem = ({item}: {item: React.ReactNode}) => {
    return (
      <View style={[fillScreen ? {width: width - 50} : null, styles.item]}>
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

  return (
    <View style={styles.container}>
      <View
        style={[
          fillScreen ? {width: width - 50} : null,
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
        pagingEnabled={pagingEnabled}
        scrollEventThrottle={32}
      />
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
    overflow: 'visible',
  },
  flatlist: {
    alignItems: 'stretch',
    paddingEnd: 8,
  },
});
