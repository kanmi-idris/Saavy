import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

export const findById = (id: string) => {
  return function (content: {id: string}) {
    return content.id === id;
  };
};

export const GetContent = (value: string) => {
  const [showMore, setShowMore] = useState(false);
  let fullContent = value;
  const fullContentLength = fullContent.length;
  const shortContent = fullContent.slice(0, 200) + '…';
  let paragraph = showMore === true ? fullContent + ' ' : shortContent + ' ';
  return {
    paragraph: paragraph,
    button: (
      <Text style={styles.cardText}>
        {fullContentLength > 200 && (
          <Text
            onPress={() => setShowMore(!showMore)}
            style={[styles.cardText, styles.link]}>
            {showMore ? 'show less' : 'more'}
          </Text>
        )}
      </Text>
    ),
  };
};

const styles = StyleSheet.create({
  cardText: {
    ...typography.others.paragraphInput,
    color: colors.black_1,
    fontSize: 13.3,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
});
