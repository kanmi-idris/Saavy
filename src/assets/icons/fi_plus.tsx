import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Plus(props: any) {
  const {
    width = 21,
    height = 20,
    viewBox = '0 0 21 20',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 1.5,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M10.5 4.1665V15.8332"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M4.66669 10H16.3334"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
