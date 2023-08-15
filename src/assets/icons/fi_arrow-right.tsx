import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ArrowRight(props: any) {
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
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G id="fi:arrow-right">
        <Path
          d="M4.16699 10H15.8337"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M10 4.16663L15.8333 9.99996L10 15.8333"
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
