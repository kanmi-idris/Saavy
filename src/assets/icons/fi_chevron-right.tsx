import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ChevronRight(props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 1.5,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G id="fi:chevron-left">
        <Path
          d="M6 12L10 8L6 4"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
