import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  onPress?: () => void;
}

export default function Menu({onPress}: Props, props: any) {
  const {
    width = 16,
    height = 20,
    viewBox = '0 0 16 16',
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
      <G id="fi:menu">
        <Path
          d="M2 12.5H14"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M2 8.5H14"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M2 4.5H14"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
