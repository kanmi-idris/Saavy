import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, View, Text, Pressable} from 'react-native';

interface SecurePinInputProps {
  errorMessage?: string;
  disabled?: boolean;
  maxLength: number;
  setIsPinReady: (isPinReady: boolean) => void;
  setPin: (pin: string) => void;
  pin: string;
}

const SecurePinInput = ({
  errorMessage,
  disabled,
  pin,
  setPin,
  maxLength,
  setIsPinReady,
  ...props
}: SecurePinInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const contents = new Array(maxLength).fill(0);

  useEffect(() => {
    // update pin ready status
    setIsPinReady(pin.length === maxLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [pin, setIsPinReady, maxLength]);

  const pinInput = (_value: any, index: number) => {
    const digit = pin[index] || '';

    const isCurrentValue = index === pin.length;
    const isLastValue = index === maxLength - 1;
    const isCodeComplete = pin.length === maxLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const inputState = () => {
      if (isFocused && isValueFocused) {
        return styles.focus;
      } else if (errorMessage) {
        return styles.errorMessage;
      } else if (disabled) {
        return styles.disabled;
      }
    };

    return (
      <View key={index} style={[styles.pinIput, inputState()]}>
        <Text style={styles.pinInputText}>{digit}</Text>
      </View>
    );
  };

  const handleOnpress = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const inputState = () => {
    if (isFocused) {
      return styles.focus;
    } else if (errorMessage) {
      return styles.errorMessage;
    } else if (disabled) {
      return styles.disabled;
    }
  };

  // Regex to remove any non-digit characters from the input text
  const handleChangeText = (text: string) => {
    const filteredText = text.replace(/\D/g, '');
    setPin(filteredText);
  };

  return (
    <View>
      <Pressable onPressIn={handleOnpress} style={styles.pinBoxesContainer}>
        {contents.map(pinInput)}
      </Pressable>
      <TextInput
        value={pin}
        onChangeText={handleChangeText}
        maxLength={maxLength}
        ref={inputRef}
        autoCorrect={false}
        style={[styles.hiddenInput, inputState()]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={!disabled}
        keyboardType="number-pad"
        {...props}
      />
    </View>
  );
};

export default SecurePinInput;

const styles = StyleSheet.create({
  focus: {
    borderColor: colors.green_1,
  },
  errorMessage: {
    borderColor: colors.red_1,
    color: colors.red_1,
  },
  disabled: {
    borderColor: colors.black_10,
    backgroundColor: colors.black_10,
  },
  hiddenInput: {
    ...typography.regular.paragraphMid,
    color: colors.black_4,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
    opacity: 0,
  },
  pinBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 16,
    height: 50,
  },
  pinIput: {
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  pinInputText: {
    ...typography.regular.paragraphNormal,
    color: colors.black_4,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
