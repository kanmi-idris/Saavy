import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function LockOpen(props: any) {
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
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M9.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M3.5 5.49959V3.49959C3.49938 2.87961 3.72914 2.28152 4.14469 1.82142C4.56023 1.36132 5.13192 1.07204 5.74875 1.00973C6.36559 0.947426 6.98357 1.11654 7.48274 1.48425C7.9819 1.85195 8.32663 2.39201 8.45 2.99959"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
