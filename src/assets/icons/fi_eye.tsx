import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function Eye(props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    pathFill = 'none',
    pathStroke = 'black',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G id="fi:eye">
        <Path
          d="M0.666626 8.00008C0.666626 8.00008 3.33329 2.66675 7.99996 2.66675C12.6666 2.66675 15.3333 8.00008 15.3333 8.00008C15.3333 8.00008 12.6666 13.3334 7.99996 13.3334C3.33329 13.3334 0.666626 8.00008 0.666626 8.00008Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
          fill={pathFill}
          stroke={pathStroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
