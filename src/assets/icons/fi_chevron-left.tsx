import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  onPress?: () => void;
}

export default function ChevronLeft({onPress}: Props, props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      onPress={onPress}>
      <G id="fi:chevron-left">
        <Path
          d="M15 18L9 12L15 6"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
