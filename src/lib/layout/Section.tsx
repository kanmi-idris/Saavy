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
  heading: string;
  horizontal?: boolean;
}

export const ScrollableSection = ({
  children,
  heading,
  auxBtn,
  horizontal,
}: SectionProps) => {
  const {width} = Dimensions.get('window');

  const data = React.Children.toArray(children);
  const renderItem = ({item}: {item: React.ReactNode}) => {
    return <View style={[{width: width - 65}, styles.item]}>{item}</View>;
  };

  const iconProps = {
    width: 12,
    height: 12,
    stroke: colors.black_6,
    viewBox: '0 0 20 20',
  };
  return (
    <View style={styles.container}>
      <View style={[{width: width - 65}, styles.headingWrapper]}>
        <Text style={styles.heading}>{heading}</Text>
        {auxBtn && (
          <Pressable style={styles.filterByParent}>
            <Text style={styles.filterBy}>Filter By</Text>
            <Icon name="chevronDown" {...iconProps} />
          </Pressable>
        )}
      </View>
      <FlatList
        style={styles.list}
        horizontal={horizontal}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={2}
      />
    </View>
  );
};

export const StaticSection = ({children, heading, auxBtn}: SectionProps) => {
  const iconProps = {
    width: 12,
    height: 12,
    stroke: colors.black_6,
    viewBox: '0 0 20 20',
  };
  return (
    <View style={styles.container}>
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
    ...typography.medium.paragraphNormal,
    color: colors.black_1,
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
});
