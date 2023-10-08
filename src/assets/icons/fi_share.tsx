import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Share(props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 1.3,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M12 14.667C13.1046 14.667 14 13.7716 14 12.667C14 11.5624 13.1046 10.667 12 10.667C10.8954 10.667 10 11.5624 10 12.667C10 13.7716 10.8954 14.667 12 14.667Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M5.72668 9.00684L10.28 11.6602"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M12 5.33301C13.1046 5.33301 14 4.43758 14 3.33301C14 2.22844 13.1046 1.33301 12 1.33301C10.8954 1.33301 10 2.22844 10 3.33301C10 4.43758 10.8954 5.33301 12 5.33301Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M10.2734 4.33984L5.72668 6.99318"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
