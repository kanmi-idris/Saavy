import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

// Text Inputs
// Password Inputs
// Number Inputs
// Text Area Inputs
// SecurePin Input

interface BasicInputProps {
  iconStart?: string;
  iconEnd?: string;
  label?: string;
  extraInfo?: string;
  placeholder?: string;
  errorMessage?: string;
  autoComplete?: 'email' | 'tel';
  disabled?: boolean;
  type: 'multiline' | 'text' | 'numeric' | 'password';
  customOnFocus?: () => void;
  flex?: number;
}

const BasicInput = ({
  iconStart,
  iconEnd,
  label,
  extraInfo,
  errorMessage,
  type,
  autoComplete,
  placeholder,
  disabled,
  flex,
  ...props
}: BasicInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [endIcon, setEndIcon] = useState(iconEnd);

  const handleFocus = () => {
    setIsFocused(true);
    props.customOnFocus && props?.customOnFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
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

  const handlePasswordIconPress = () => {
    if (endIcon === 'eyeOff') {
      setEndIcon('eye');
      setHidePassword(!hidePassword);
    } else if (endIcon === 'eye') {
      setEndIcon('eyeOff');
      setHidePassword(!hidePassword);
    } else {
      return iconEnd;
    }
  };

  const ai_input_icons = () => {
    if (iconStart === 'ai_icon' && iconEnd === 'ai_send') {
      return {
        width: 28,
        height: 26,
        viewBox: '0 0 28 28',
      };
    }
  };

  const iconProps = {
    width: ai_input_icons()?.width || 16,
    height: ai_input_icons()?.height || 16,
    viewBox: ai_input_icons()?.viewBox || '0 0 16 16',
    stroke: colors.black_6,
    pathStroke: colors.black_6,
    strokeWidth: 1,
    fill: iconStart === 'ai_icon' ? colors.black_6 : undefined,
  };
  return (
    <View style={[styles.container, {flex: flex}]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputField,
          inputState(),
          iconStart === 'ai_icon' && iconEnd === 'ai_send'
            ? // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: colors.black_6,
                shadowColor: colors.black_1,
                borderWidth: 0.5,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
                shadowOpacity: 1,
              }
            : undefined,
        ]}>
        {iconStart && <Icon name={iconStart} {...iconProps} />}
        <TextInput
          autoComplete={autoComplete}
          multiline={type === 'multiline' ? true : false}
          numberOfLines={type === 'multiline' ? 4 : 1}
          textAlignVertical={type === 'multiline' ? 'top' : 'auto'}
          autoCorrect={false}
          placeholderTextColor={colors.black_6}
          placeholder={placeholder}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          keyboardType={
            type === 'numeric' || type === 'password'
              ? 'decimal-pad'
              : undefined
          }
          secureTextEntry={type === 'password' ? hidePassword : false}
          {...props}
        />
        <Pressable onPress={handlePasswordIconPress}>
          {endIcon && <Icon name={endIcon} {...iconProps} />}
        </Pressable>
      </View>
      {errorMessage || extraInfo ? (
        <Text
          style={[
            styles.extraInfo,
            errorMessage ? styles.errorMessage : undefined,
          ]}>
          {errorMessage ? errorMessage : extraInfo}
        </Text>
      ) : null}
    </View>
  );
};

export default BasicInput;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  inputField: {
    gap: 8,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
  },
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
  input: {
    ...typography.regular.paragraphMid,
    color: colors.black_4,
    flex: 1,
  },
  label: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  extraInfo: {
    ...typography.medium.paragraphSmall,
    color: colors.black_6,
  },
});
