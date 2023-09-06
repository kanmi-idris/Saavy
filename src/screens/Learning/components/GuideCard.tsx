import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';

interface GuideCardProps {
  image: number;
  content: string;
}

const GuideCard = ({image, content}: GuideCardProps) => {
  const IconProp = {
    strokeWidth: 1.5,
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={image} />
      </View>
      <View style={styles.wrap}>
        <Text style={styles.content}>{content}</Text>
        <Pressable>
          <Icon name="chevronRight" {...IconProp} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  imgContainer: {
    backgroundColor: colors.green_9,
    width: 32,
    height: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    ...typography.regular.paragraphMid,
    color: colors.black_1,
    width: '85%',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default GuideCard;
