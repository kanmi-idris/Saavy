import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

interface ChatCardsProps {
  variant: 'user' | 'AI';
  content: string;
  userImage?: number;
  suggestion?: boolean;
}

const ChatCards = ({
  variant,
  content,
  userImage,
  suggestion,
}: ChatCardsProps) => {
  const [pressed, setPressed] = useState([false, false, false, false]);

  const handlePress = (index: number) => {
    setPressed(pressed.map((item, i) => (i === index ? !item : item)));
  };

  const toolsIcon = (index: number) => ({
    stroke: colors.black_6,
    strokeWidth: 1.5,
    fill: pressed[index] ? colors.black_6 : 'none',
  });
  const aiIcon = {
    fill: colors.black_5,
  };

  return (
    <View style={[styles.container, {width: suggestion ? '75%' : undefined}]}>
      <View
        style={[
          styles.wrap,
          // eslint-disable-next-line react-native/no-inline-styles
          {flexDirection: variant === 'user' ? 'row-reverse' : 'row'},
        ]}>
        <Text style={styles.message}>{content}</Text>
        {!suggestion && (
          <View style={styles.ai}>
            {variant === 'AI' ? (
              <Icon name="ai_icon" {...aiIcon} />
            ) : (
              <Image source={userImage ? userImage : 0} alt="avatar" />
            )}
          </View>
        )}
      </View>
      {!suggestion && variant === 'AI' ? (
        <View style={styles.tools}>
          <View style={styles.thumbs}>
            <Pressable
              onPress={() =>
                pressed[1] === false ? handlePress(0) : undefined
              }>
              <Icon name="thumbs_up" {...toolsIcon(0)} />
            </Pressable>
            <Pressable
              onPress={() =>
                pressed[0] === false ? handlePress(1) : undefined
              }>
              <Icon name="thumbs_down" {...toolsIcon(1)} />
            </Pressable>
          </View>
          <Pressable onPress={() => handlePress(2)}>
            <Icon name="clipboard" {...toolsIcon(2)} />
          </Pressable>
        </View>
      ) : (
        !suggestion && (
          <View style={styles.tools}>
            <View style={{flex: 1}}>
              <Pressable onPress={() => handlePress(2)}>
                <Icon name="clipboard" {...toolsIcon(2)} />
              </Pressable>
            </View>
            <Pressable
              style={[
                styles.editBtn,
                {
                  backgroundColor: pressed[3] ? colors.black_6 : colors.white,
                },
              ]}
              onPress={() => handlePress(3)}>
              <Text
                style={[
                  styles.editBtnText,
                  {
                    color: pressed[3] ? colors.white : colors.black_5,
                  },
                ]}>
                Edit
              </Text>
            </Pressable>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'flex-start',
    borderRadius: 8,
    backgroundColor: colors.white,
    gap: 16,
  },
  wrap: {
    gap: 10,
  },
  message: {
    ...typography.others.paragraphInput,
    color: colors.black_1,
    flex: 1,
    fontSize: 13,
  },
  ai: {
    width: 32,
    height: 32,
    flexShrink: 0,
    backgroundColor: colors.black_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  thumbs: {
    gap: 8,
    flexDirection: 'row',
    flex: 1,
  },
  tools: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editBtn: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.black_6,
  },
  editBtnText: {
    ...typography.medium.paragraphSmall,
  },
});

export default ChatCards;
