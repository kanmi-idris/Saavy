import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BriefcaseIcon(props: any) {
  // Destructure the props and assign default values
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 1,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    pathFill = 'none',
    pathStroke = 'black',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M13.3333 4.6665H2.66659C1.93021 4.6665 1.33325 5.26346 1.33325 5.99984V12.6665C1.33325 13.4029 1.93021 13.9998 2.66659 13.9998H13.3333C14.0696 13.9998 14.6666 13.4029 14.6666 12.6665V5.99984C14.6666 5.26346 14.0696 4.6665 13.3333 4.6665Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M10.6666 14V3.33333C10.6666 2.97971 10.5261 2.64057 10.2761 2.39052C10.026 2.14048 9.68687 2 9.33325 2H6.66659C6.31296 2 5.97383 2.14048 5.72378 2.39052C5.47373 2.64057 5.33325 2.97971 5.33325 3.33333V14"
        fill={pathFill}
        stroke={pathStroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
