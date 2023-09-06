import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Shield(props: any) {
  const {
    width = 16,
    height = 16,
    viewBox = '0 0 16 16',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 1.5,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M8.00002 14.6668C8.00002 14.6668 13.3334 12.0002 13.3334 8.00016V3.3335L8.00002 1.3335L2.66669 3.3335V8.00016C2.66669 12.0002 8.00002 14.6668 8.00002 14.6668Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
