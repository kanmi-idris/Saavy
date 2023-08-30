import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../Colors';

export default function PlusCircle_2(props: any) {
  const {
    width = 25,
    height = 24,
    viewBox = '0 0 25 24',
    fill = colors.green_1,
    pathStroke = colors.white,
    strokeWidth = '2',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <G id="fi:plus-circle">
        <Path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          fill={fill}
        />
        <Path
          d="M12.5 8V16"
          stroke={pathStroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M8.5 12H16.5"
          stroke={pathStroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
