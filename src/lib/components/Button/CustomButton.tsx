import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  disable?: boolean;
  iconStart?: string;
  iconEnd?: string;
  label: string;
  variant: 'primary' | 'secondary' | 'text';
}

const CustomButton = ({
  disable,
  iconEnd,
  iconStart,
  label,
  variant,
}: CustomButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const states = () => {
    if (pressed && variant === 'primary') {
      return activePryBtn;
    } else if (variant === 'secondary' && pressed) {
      return activeSecBtn;
    } else if (variant === 'text' && pressed) {
      return activeTextBtn;
    } else if (disable && variant === 'text') {
      return;
    } else if (disable) {
      return disabledBtn;
    }
  };

  const variants = () => {
    if (variant === 'text') {
      return defaultTextBtn;
    } else if (variant === 'secondary') {
      return defaultSecBtn;
    } else {
      return defaultPryBtn;
    }
  };

  const textStyleState = () => {
    if (
      (pressed && variant === 'text') ||
      (pressed && variant === 'secondary')
    ) {
      return styles.textTextActive;
    } else if (disable) {
      return styles.textDisable;
    }
  };

  const textStyles = () => {
    if (variant === 'text') {
      return styles.textText;
    } else if (variant === 'secondary') {
      return styles.textSec;
    } else if (variant === 'primary') {
      return styles.textPry;
    }
  };

  const iconFill = () => {
    if (disable) {
      return colors.black_10;
    }
  };

  const iconStroke = () => {
    if ((pressed && variant === 'primary') || variant === 'primary') {
      return colors.white;
    } else if (variant === 'text' || variant === 'secondary') {
      return colors.green_1;
    } else if (pressed) {
      return colors.activeBtn;
    } else if (disable) {
      return colors.black_9;
    } else {
      return colors.white;
    }
  };

  const iconPathStroke = () => {
    if (
      (pressed && variant === 'text') ||
      (pressed && variant === 'secondary')
    ) {
      return colors.activeBtn;
    } else if (disable) {
      return colors.black_10;
    } else if (variant === 'primary') {
      return colors.white;
    } else {
      return colors.green_1;
    }
  };

  const iconProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fill: iconFill(),
    stroke: iconStroke(),
    pathStroke: iconPathStroke(),
  };

  return (
    <Pressable
      style={states() || variants()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disable}>
      {iconStart && <Icon name={iconStart} {...iconProps} />}
      <Text style={textStyleState() || textStyles()}>{label}</Text>
      {iconEnd && <Icon name={iconEnd} {...iconProps} />}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  BtnStyle: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    flexShrink: 0,
  },
  defaultPry: {
    backgroundColor: colors.green_1,
  },
  activePry: {
    backgroundColor: colors.activeBtn,
  },
  disabled: {
    backgroundColor: colors.black_10,
  },
  defaultSec: {
    backgroundColor: colors.green_9,
    borderColor: colors.green_1,
    borderWidth: 1,
  },
  activeSec: {
    backgroundColor: colors.green_8,
    borderColor: colors.activeBtn,
    borderWidth: 1,
  },
  Text: {
    backgroundColor: 'none',
  },
  activeText: {
    backgroundColor: colors.green_8,
  },
  textSec: {
    ...typography.medium.paragraphNormal,
    color: colors.green_1,
  },
  textPry: {
    ...typography.medium.paragraphNormal,
    color: colors.white,
  },
  textText: {
    ...typography.medium.paragraphNormal,
    color: colors.green_1,
  },
  textTextActive: {
    ...typography.medium.paragraphNormal,
    color: colors.activeBtn,
  },
  textDisable: {
    ...typography.medium.paragraphNormal,
    color: colors.black_9,
  },
});

const defaultPryBtn = StyleSheet.compose(styles.BtnStyle, styles.defaultPry);

const activePryBtn = StyleSheet.compose(styles.BtnStyle, styles.activePry);

const defaultSecBtn = StyleSheet.compose(styles.BtnStyle, styles.defaultSec);

const activeSecBtn = StyleSheet.compose(styles.BtnStyle, styles.activeSec);

const defaultTextBtn = StyleSheet.compose(styles.BtnStyle, styles.Text);

const activeTextBtn = StyleSheet.compose(styles.BtnStyle, styles.activeText);

const disabledBtn = StyleSheet.compose(styles.BtnStyle, styles.disabled);
