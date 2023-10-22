import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function HomeIcon(props: any) {
  // Destructure the props and assign default values
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
    pathStrokeWidth = 2,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M9 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.48908C3 9.18049 3.14247 8.88919 3.38606 8.69973L11.3861 2.47751C11.7472 2.19665 12.2528 2.19665 12.6139 2.47751L20.6139 8.69973C20.8575 8.88919 21 9.18049 21 9.48908V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M9 22V12H15V22"
        fill={pathFill}
        stroke={pathStroke}
        strokeWidth={pathStrokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
