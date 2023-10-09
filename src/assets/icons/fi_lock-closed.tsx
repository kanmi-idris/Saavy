import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function LockClosed(props: any) {
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
        d="M7.875 4.875V2.64844C7.875 2.15116 7.67746 1.67424 7.32583 1.32261C6.97419 0.970982 6.49728 0.773438 6 0.773438C5.50272 0.773438 5.02581 0.970982 4.67417 1.32261C4.32254 1.67424 4.125 2.15116 4.125 2.64844V4.875"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M8.625 4.875H3.375C2.75368 4.875 2.25 5.37868 2.25 6V10.125C2.25 10.7463 2.75368 11.25 3.375 11.25H8.625C9.24632 11.25 9.75 10.7463 9.75 10.125V6C9.75 5.37868 9.24632 4.875 8.625 4.875Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
